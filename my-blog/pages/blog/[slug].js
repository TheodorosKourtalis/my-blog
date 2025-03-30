import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Header from '../../components/Header';
import { getPostBySlug, getAllPostSlugs } from '../../lib/posts';

export default function Post({ source, frontMatter }) {
  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground text-text dark:text-darkText">
      <Header />
      <main className="max-w-3xl mx-auto py-10 px-6">
        <article>
          <h1 className="text-3xl font-header mb-2">{frontMatter.title}</h1>
          <p className="text-sm font-body mb-6">
            {frontMatter.type} — {frontMatter.date} {frontMatter.author ? `· ${frontMatter.author}` : ''}
          </p>
          <MDXRemote {...source} />
          {frontMatter.link && (
            <p className="mt-6">
              <a href={frontMatter.link} className="text-accent hover:underline">
                → view more
              </a>
            </p>
          )}
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  const paths = slugs.map(slug => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      source: mdxSource,
      frontMatter: post.frontMatter
    }
  };
}