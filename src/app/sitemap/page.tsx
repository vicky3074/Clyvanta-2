import Link from "next/link";
import type { Metadata } from "next";
import { ONTARIO_LOCATIONS } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Sitemap | CanadaCashHomes",
  description: "Complete sitemap of all pages, city locations, and blog articles on CanadaCashHomes.",
  robots: "index, follow",
};

export default function SitemapPage() {
  // Get all cities and regions
  const cities = ONTARIO_LOCATIONS.filter(location => location.type === 'city');
  const regions = ONTARIO_LOCATIONS.filter(location => location.type === 'region');

  // Blog posts
  const blogPosts = [
    { slug: 'inherited-property-guide', title: 'Complete Guide to Selling Inherited Property in Ontario' },
    { slug: 'niagara-real-estate-market', title: 'Niagara Real Estate Market Analysis 2024' },
    { slug: 'power-of-sale-guide', title: 'Power of Sale Guide for Ontario Homeowners' },
    { slug: 'sell-house-as-is-st-catharines', title: 'Sell Your House As-Is in St. Catharines' },
    { slug: 'sell-house-fast-hamilton', title: 'How to Sell Your House Fast in Hamilton' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Site Directory</h1>
          <p className="text-xl text-gray-600 mb-4">
            Complete directory of all pages on CanadaCashHomes
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-blue-800 text-sm">
              <strong>For search engines:</strong> Our XML sitemap is available at{' '}
              <a href="/sitemap.xml" className="underline hover:text-blue-900">
                canadacashhomes.com/sitemap.xml
              </a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                Main Pages
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-blue-600 hover:text-blue-800 hover:underline">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-blue-600 hover:text-blue-800 hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Resources */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                Legal & Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/ai-info" className="text-blue-600 hover:text-blue-800 hover:underline">
                    AI Info Page
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
                    Sitemap (Current Page)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog Articles */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                Blog Articles
              </h2>
              <ul className="space-y-2">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ontario Regions */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                Ontario Regions
              </h2>
              <ul className="space-y-2">
                {regions.map((region) => (
                  <li key={region.slug}>
                    <Link 
                      href={`/${region.slug}`} 
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {region.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* GTA Cities */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                Greater Toronto Area
              </h2>
              <ul className="space-y-2">
                {cities
                  .filter(city => city.region === "Greater Toronto Area")
                  .map((city) => (
                    <li key={city.slug}>
                      <Link 
                        href={`/${city.slug}`} 
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Other Ontario Cities */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                Other Ontario Cities
              </h2>
              <ul className="space-y-2 text-sm">
                {cities
                  .filter(city => city.region !== "Greater Toronto Area")
                  .map((city) => (
                    <li key={city.slug}>
                      <Link 
                        href={`/${city.slug}`} 
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {city.name} <span className="text-gray-500">({city.region})</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600">6</div>
                  <div className="text-sm text-gray-600">Main Pages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{cities.length}</div>
                  <div className="text-sm text-gray-600">Ontario Cities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{regions.length}</div>
                  <div className="text-sm text-gray-600">Regions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{blogPosts.length}</div>
                  <div className="text-sm text-gray-600">Blog Articles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}