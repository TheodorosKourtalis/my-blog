import Header from '../../components/Header';
import { getAllPosts } from '../../lib/posts';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground text-text dark:text-darkText">
      <Header />
      <main className="max-w-3xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-header mb-6">signals</h2>
        <ul>
          {posts.map(post => (
            <li key={post.slug} className="mb-8">
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <h3 className="font-header text-2xl">{post.frontMatter.title}</h3>
                  <p className="text-sm font-body">
                    {post.frontMatter.type} — {post.frontMatter.date} {post.frontMatter.author ? `· ${post.frontMatter.author}` : ''}
                  </p>
                  <p className="mt-2">{post.frontMatter.excerpt}</p>
                </a>
              </Link>
              <hr className="mt-4 border-t border-gray-300 dark:border-gray-600" />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts }
  };
}