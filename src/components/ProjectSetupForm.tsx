import { useState } from 'react';

export default function ProjectSetupForm() {
  const [config, setConfig] = useState({
    githubRepo: '',
    vercelProject: '',
    supabaseUrl: '',
    supabaseKey: '',
    apiKey: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Saved config:', config);
    // TODO: Save to DB or context
  };

  return (
    <div className="space-y-4">
      {['githubRepo', 'vercelProject', 'supabaseUrl', 'supabaseKey', 'apiKey'].map((key) => (
        <input
          key={key}
          className="border w-full p-2"
          placeholder={key}
          name={key}
          value={config[key as keyof typeof config]}
          onChange={handleChange}
        />
      ))}
      <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2">
        Save Configuration
      </button>
    </div>
  );
}