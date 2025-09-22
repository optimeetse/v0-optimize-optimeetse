"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react"

const featuredPost = {
  slug: "ai-revolutionizing-pharma-outreach-2024",
  title: "How AI is Revolutionizing Pharmaceutical Outreach in 2024",
  excerpt:
    "Discover how artificial intelligence is transforming the way life sciences companies connect with pharmaceutical decision makers, from personalized messaging to predictive analytics.",
  author: "Aric Weinberg",
  date: "January 8, 2025",
  readTime: "8 min read",
  category: "AI & Technology",
  image: "/ai-pharmaceutical-outreach-technology.jpg",
  featured: true,
}

const blogPosts = [
  {
    slug: "sdr-strategies-biotech-partnerships",
    title: "SDR Strategies That Actually Work for Biotech Partnership Development",
    excerpt:
      "Learn the proven sales development tactics that help biotech companies secure meetings with Big Pharma business development teams.",
    author: "Aric Weinberg",
    date: "January 1, 2025",
    readTime: "6 min read",
    category: "SDR Strategy",
    image: "/biotech-partnership-sales-development.jpg",
  },
  {
    slug: "cold-email-compliance-pharma-industry",
    title: "Cold Email Compliance: What Life Sciences Companies Need to Know",
    excerpt:
      "Navigate the complex regulatory landscape of pharmaceutical communications while maintaining effective outreach campaigns.",
    author: "Aric Weinberg",
    date: "December 25, 2024",
    readTime: "7 min read",
    category: "Compliance",
    image: "/pharmaceutical-compliance-regulations.jpg",
  },
  {
    slug: "ai-personalization-pharma-emails",
    title: "Using AI to Personalize Emails for Pharmaceutical Executives",
    excerpt:
      "How machine learning algorithms can analyze pharma company data to create highly targeted, personalized outreach messages.",
    author: "Aric Weinberg",
    date: "December 18, 2024",
    readTime: "5 min read",
    category: "AI & Technology",
    image: "/ai-email-personalization-pharmaceutical.jpg",
  },
  {
    slug: "sdr-metrics-life-sciences-outreach",
    title: "The Only SDR Metrics That Matter for Life Sciences Outreach",
    excerpt:
      "Stop tracking vanity metrics. Here are the KPIs that actually predict success in pharmaceutical and biotech outreach.",
    author: "Aric Weinberg",
    date: "December 11, 2024",
    readTime: "4 min read",
    category: "SDR Strategy",
    image: "/sales-metrics-analytics-dashboard.jpg",
  },
  {
    slug: "future-ai-sales-development-2025",
    title: "The Future of AI in Sales Development: 2025 Predictions",
    excerpt:
      "What's coming next in AI-powered sales development? Our predictions for the technologies that will reshape outbound sales.",
    author: "Aric Weinberg",
    date: "December 4, 2024",
    readTime: "9 min read",
    category: "AI & Technology",
    image: "/future-ai-sales-technology-2025.jpg",
  },
  {
    slug: "building-pharma-prospect-database",
    title: "How to Build a High-Quality Pharmaceutical Prospect Database",
    excerpt:
      "Step-by-step guide to researching, organizing, and maintaining a database of pharmaceutical decision makers.",
    author: "Aric Weinberg",
    date: "November 27, 2024",
    readTime: "6 min read",
    category: "Lead Generation",
    image: "/pharmaceutical-database-research.jpg",
  },
]

const categories = ["All", "AI & Technology", "SDR Strategy", "Compliance", "Lead Generation"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">SDR & AI Weekly</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Weekly insights on sales development, artificial intelligence, and life sciences outreach strategies.
              Learn from real campaigns and industry experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={() => window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")}
              >
                Get Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Article</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{featuredPost.title}</h3>
                    <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-slate-600">
              Stay updated with the latest trends in sales development and AI technology
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={
                  category === "All"
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : "border-slate-300 text-slate-600 hover:bg-slate-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-cyan-600 font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Update</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Get weekly insights on SDR strategies, AI innovations, and life sciences outreach delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-cyan-600 hover:bg-slate-100 px-6">Subscribe</Button>
          </div>
          <p className="text-white/80 text-sm mt-4">Join 2,500+ sales professionals. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
