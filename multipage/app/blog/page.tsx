import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data para los posts del blog (mismo array del homepage)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    summary: "Learn how to build modern web applications with the latest Next.js features and App Router. This comprehensive guide covers everything from setup to deployment.",
    content: "Next.js 15 introduces powerful new features that make building web applications easier than ever..."
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    summary: "Essential TypeScript patterns and practices for writing maintainable code. Discover advanced types and patterns.",
    content: "TypeScript provides powerful type safety features that can significantly improve code quality..."
  },
  {
    id: 3,
    title: "Responsive Design with Tailwind CSS",
    summary: "Create beautiful responsive layouts using Tailwind's utility-first approach. Master mobile-first design.",
    content: "Tailwind CSS revolutionizes the way we approach styling in web development..."
  },
  {
    id: 4,
    title: "Modern React Patterns",
    summary: "Explore contemporary React patterns and hooks for building scalable applications. Learn custom hooks and state management.",
    content: "React's ecosystem continues to evolve with new patterns that improve developer experience..."
  },
  {
    id: 5,
    title: "Building RESTful APIs",
    summary: "Design and implement robust RESTful APIs with Node.js and Express. Best practices for API architecture.",
    content: "Creating well-designed APIs is crucial for building scalable web applications..."
  },
  {
    id: 6,
    title: "Database Design Fundamentals",
    summary: "Learn the principles of good database design and normalization. SQL and NoSQL comparison.",
    content: "Understanding database design is essential for building data-driven applications..."
  },
  {
    id: 7,
    title: "Testing Strategies for Web Apps",
    summary: "Comprehensive testing approaches including unit, integration, and E2E testing with modern tools.",
    content: "Testing is a critical part of the development process that ensures code quality..."
  }
];

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1, 7);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Featured Post */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-8 lg:mb-0">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-lg">Featured Image</span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.summary}
                </p>
                <Link 
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Section - 6 Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              {gridPosts.map((post) => (
                <article key={post.id} className="mb-8 lg:mb-0">
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                            Thumbnail
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            {post.summary}
                          </p>
                          <Link 
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                          >
                            Leer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
