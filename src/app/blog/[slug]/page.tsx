import { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import CTA from "../../../../components/CTA";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getAllPostSlugs,
  getRelatedPosts,
} from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(slug => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
              <div className="mb-4">
                <span
                  className={`text-white px-3 py-1 rounded-full text-sm font-medium ${
                    post.isPillar ? "bg-yellow-600" : "bg-blue-600"
                  }`}
                >
                  {post.category}
                </span>
              </div>

              <h1
                className={`text-4xl lg:text-5xl font-bold mb-6 ${
                  post.isPillar ? "text-yellow-900" : "text-gray-900"
                }`}
              >
                {post.title}
              </h1>

              <div className="flex items-center text-gray-600 text-sm">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none sm:prose-xl lg:prose-2xl prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-6 prose-h2:text-2xl prose-h2:leading-snug prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:leading-snug prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-6 prose-ul:mb-6 prose-li:mb-2 prose-ol:mb-6" 
                 style={{ 
                   '--tw-prose-body': 'var(--brand-section-text)',
                   '--tw-prose-headings': 'var(--brand-section-text)', 
                   '--tw-prose-lead': 'var(--brand-section-subtext)',
                   '--tw-prose-links': 'var(--brand-primary-600)',
                   '--tw-prose-bold': 'var(--brand-section-text)',
                   '--tw-prose-counters': 'var(--brand-section-subtext)',
                   '--tw-prose-bullets': 'var(--brand-section-subtext)',
                   '--tw-prose-hr': 'var(--brand-border-default)',
                   '--tw-prose-quotes': 'var(--brand-section-text)',
                   '--tw-prose-quote-borders': 'var(--brand-primary-300)',
                   '--tw-prose-captions': 'var(--brand-section-subtext)',
                   '--tw-prose-code': 'var(--brand-section-text)',
                   '--tw-prose-pre-code': 'var(--brand-section-text)',
                   '--tw-prose-pre-bg': 'var(--brand-slate-50)',
                   '--tw-prose-th-borders': 'var(--brand-border-default)',
                   '--tw-prose-td-borders': 'var(--brand-border-default)'
                 } as React.CSSProperties}>
              <MDXRemote source={post.content} />
            </div>
          </div>
        </article>

        <section className="py-20 theme-section-bg-alternate">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>

                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
