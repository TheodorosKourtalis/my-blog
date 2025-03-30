import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-center md:justify-start py-4 px-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row md:items-center">
        <h1 className="text-xl font-header mr-8">theodoros kourtalis</h1>
        <nav className="text-sm font-body">
          <Link href="/"><a className="mr-4 lowercase hover:underline">home</a></Link>
          <Link href="/blog"><a className="mr-4 lowercase hover:underline">blog</a></Link>
          <Link href="/cv"><a className="mr-4 lowercase hover:underline">cv</a></Link>
          <Link href="/projects"><a className="lowercase hover:underline">projects</a></Link>
        </nav>
      </div>
    </header>
  );
}