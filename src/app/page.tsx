import PromptForm from '@/components/PromptForm'; // Assuming '@/' resolves to 'src/'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-center">Create Your Website</h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Describe the website you want to generate using the prompt below.
        </p>
        <div className="w-full">
          <PromptForm />
        </div>
      </main>
    </div>
  );
}
