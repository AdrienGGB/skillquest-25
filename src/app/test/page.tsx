import { supabase } from '@/lib/supabase'

export default async function TestPage() {
  const { data, error } = await supabase.from('test').select('*')

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      {error ? (
        <div className="text-red-500">
          <p>Error connecting to Supabase:</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      ) : (
        <div className="text-green-500">
          <p>Successfully connected to Supabase!</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
} 