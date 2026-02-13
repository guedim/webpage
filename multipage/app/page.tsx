import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data para los posts del blog
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    summary: "Learn how to build modern web applications with the latest Next.js features and App Router.",
    content: "Next.js 15 introduces powerful new features that make building web applications easier than ever..."
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    summary: "Essential TypeScript patterns and practices for writing maintainable code.",
    content: "TypeScript provides powerful type safety features that can significantly improve code quality..."
  },
  {
    id: 3,
    title: "Responsive Design with Tailwind CSS",
    summary: "Create beautiful responsive layouts using Tailwind's utility-first approach.",
    content: "Tailwind CSS revolutionizes the way we approach styling in web development..."
  },
  {
    id: 4,
    title: "Modern React Patterns",
    summary: "Explore contemporary React patterns and hooks for building scalable applications.",
    content: "React's ecosystem continues to evolve with new patterns that improve developer experience..."
  }
];

export default function Homepage() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-8 lg:mb-0">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-lg">Profile Image</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About me</h2>
                <p className="text-gray-600 mb-4">
                  I'm a passionate software developer with expertise in modern web technologies. 
                  I love creating clean, efficient, and user-friendly applications that solve real-world problems.
                </p>
                <p className="text-gray-600 mb-6">
                  With a strong foundation in TypeScript, React, and Next.js, I build scalable 
                  web applications that deliver exceptional user experiences. I'm always eager to 
                  learn new technologies and take on challenging projects.
                </p>
                <Link 
                  href="/about"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Blog</h2>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              {/* Featured Post */}
              <div className="mb-8 lg:mb-0">
                <article className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.summary}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Leer más
                  </Link>
                </article>
              </div>

              {/* Recent Posts List */}
              <div>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <article key={post.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                            Thumbnail
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            {post.summary}
                          </p>
                          <Link 
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Leer
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
