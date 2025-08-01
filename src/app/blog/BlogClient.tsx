"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { BlogPost } from "@/lib/blog";

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Articles") {
      return posts;
    }
    return posts.filter(post => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(posts.map(post => post.category))
    );
    return ["All Articles", ...uniqueCategories];
  }, [posts]);

  // Count posts per category
  const getCategoryCount = (category: string) => {
    if (category === "All Articles") return posts.length;
    return posts.filter(post => post.category === category).length;
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-first: Categories as horizontal filter bar */}
        <div className="mb-8 lg:hidden">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }`}
                >
                  {category} ({getCategoryCount(category)})
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content first on mobile, right side on desktop */}
          <main className="lg:col-span-3 order-1 lg:order-1">
            <div className="space-y-4">
              {filteredPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg border hover:shadow-md transition-shadow p-4 border-gray-200"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">
                        {post.category}
                      </span>
                      <span>
                        {new Date(post.date).toLocaleDateString("en-CA", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span>📍 {post.location}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="group">
                      <h2 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </main>

          {/* Sidebar second on mobile, left side on desktop */}
          <aside className="lg:col-span-1 order-2 lg:order-2 space-y-6">
            {/* Desktop-only Categories sidebar */}
            <div className="hidden lg:block bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left hover:text-blue-700 transition-colors ${
                        selectedCategory === category
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {category}{" "}
                      <span className="text-gray-500">
                        ({getCategoryCount(category)})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Articles - smaller on mobile */}
            <div className="bg-white rounded-lg p-4 lg:p-6 shadow-sm border border-gray-200">
              <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">
                Recent Articles
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {posts.slice(0, 3).map((post, index) => (
                  <article
                    key={index}
                    className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0 lg:pb-4"
                  >
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-CA", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
