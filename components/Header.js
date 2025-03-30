// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-6 px-8 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-darkBackground">
      <h1 className="text-xl font-header tracking-wide dark:text-darkText">theodoros kourtalis</h1>
      <nav className="space-x-6 text-sm font-body">
        <Link href="/"><a className="lowercase hover:underline">home</a></Link>
        <Link href="/blog"><a className="lowercase hover:underline">blog</a></Link>
        <Link href="/cv"><a className="lowercase hover:underline">cv</a></Link>
        <Link href="/projects"><a className="lowercase hover:underline">projects</a></Link>
      </nav>
    </header>
  );
}