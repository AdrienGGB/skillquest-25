'use client';
import { useState } from 'react';

export default function PromptForm() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call AI service with prompt
    console.log('Prompt submitted:', prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full border p-2"
        rows={6}
        placeholder="Describe your AI project..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Generate Project
      </button>
    </form>
  );
}