import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 100 // Maximum requests per minute

const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  const now = Date.now()
  const windowData = rateLimitMap.get(ip) || { count: 0, timestamp: now }
  
  // Reset counter if outside window
  if (now - windowData.timestamp > RATE_LIMIT_WINDOW) {
    windowData.count = 0
    windowData.timestamp = now
  }
  
  windowData.count++
  rateLimitMap.set(ip, windowData)
  
  if (windowData.count > MAX_REQUESTS) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }
  
  // Create supabase client
  const supabase = createMiddlewareClient({ req, res })
  
  // Refresh session if expired
  await supabase.auth.getSession()
  
  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
} 