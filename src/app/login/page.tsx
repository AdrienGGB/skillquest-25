'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) {
      alert('Check your email for the magic link&apos;!');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 my-2 w-full"
      />
      <button onClick={handleLogin} className="bg-black text-white px-4 py-2">
        Send Magic Link
      </button>
    </div>
  );
}
