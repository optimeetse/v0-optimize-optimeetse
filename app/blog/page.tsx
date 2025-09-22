"use client"

import React from "react"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp } from "lucide-react"
import { trackPageView, trackButtonClick, trackFormSubmission } from "@/components/analytics-tracker"

const blogPosts = [
  {
    slug: "ai-pharmaceutical-outreach-2024",
    title: "How AI is Revolutionizing Pharmaceutical Outreach in 2024",
    excerpt:
      "Discover how artificial intelligence is transforming the way life sciences companies connect with pharmaceutical partners, from predictive analytics to personalized messaging.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/ai-pharmaceutical-outreach.jpg",
    featured: true,
  },
  {
    slug: "sdr-strategies-biotech-partnerships",
    title: "SDR Strategies That Actually Work for Biotech Partnership Development",
    excerpt:
      "Learn the proven sales development tactics that top biotech companies use to secure partnerships with Big Pharma and establish lucrative licensing deals.",
    author: "Michael Rodriguez",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "SDR Strategy",
    image: "/biotech-partnership-strategy.jpg",
    featured: false,
  },
  {
    slug: "pharmaceutical-compliance-cold-outreach",
    title: "Navigating Pharmaceutical Compliance in Cold Outreach: A Complete Guide",
    excerpt:
      "Understanding FDA regulations, HIPAA compliance, and industry best practices when conducting outreach to pharmaceutical companies.",
    author: "Dr. Jennifer Walsh",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Compliance",
    image: "/pharmaceutical-compliance.jpg",
    featured: false,
  },
  {
    slug: "ai-email-personalization-pharma",
    title: "AI-Powered Email Personalization for Pharmaceutical Decision Makers",
    excerpt:
      "How to use artificial intelligence to craft highly personalized emails that resonate with C-suite executives at pharmaceutical companies.",
    author: "Alex Thompson",
    date: "2023-12-25",
    readTime: "7 min read",
    category: "AI & Technology",
    image: "/ai-email-personalization-pharmaceutical.jpg",
    featured: false,
  },
  {
    slug: "measuring-sdr-success-life-sciences",
    title: "Measuring SDR Success in Life Sciences: KPIs That Matter",
    excerpt:
      "The essential metrics and KPIs that life sciences companies should track to optimize their sales development efforts and maximize ROI.",
    author: "Sarah Chen",
    date: "2023-12-18",
    readTime: "5 min read",
    category: "SDR Strategy",
    image: "/sales-metrics-analytics-dashboard.jpg",
    featured: false,
  },
  {
    slug: "future-ai-sales-2025",
    title: "The Future of AI in Sales: Predictions for 2025",
    excerpt:
      "Expert predictions on how artificial intelligence will continue to reshape sales development, lead generation, and customer relationship management.",
    author: "Michael Rodriguez",
    date: "2023-12-11",
    readTime: "9 min read",
    category: "AI & Technology",
    image: "/future-ai-sales-technology-2025.jpg",
    featured: false,
  },
]

const categories = ["All", "AI & Technology", "SDR Strategy", "Compliance", "Lead Generation"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [email, setEmail] = React.useState("")

  useEffect(() => {
    trackPageView("/blog", "SDR & AI Weekly Blog")
  }, [])

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    trackFormSubmission("blog_newsletter", { email })
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
    alert("Thanks for subscribing to SDR & AI Weekly!")
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    trackButtonClick(`Category: ${category}`, "blog_filter")
  }

  const handlePostClick = (postTitle) => {
    trackButtonClick(`Blog Post: ${postTitle}`, "blog_listing")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="h-12 w-12 text-cyan-400 mr-4" />
              <h1 className="text-5xl font-bold">SDR & AI Weekly</h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Your weekly dose of sales development insights, AI innovations, and life sciences industry expertise. Stay
              ahead of the curve with actionable strategies for pharmaceutical outreach.
            </p>
            <div className="flex items-center justify-center space-x-6 text-slate-400">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                <span>Weekly Insights</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Industry Experts</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>5-10 Min Reads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mr-4">Featured Article</h2>
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
                Editor's Pick
              </Badge>
            </div>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-cyan-100 text-cyan-800">{featuredPost.category}</Badge>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button
                        className="bg-cyan-500 hover:bg-cyan-600"
                        onClick={() => handlePostClick(featuredPost.title)}
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory === category ? "bg-cyan-500 hover:bg-cyan-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-slate-800">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight hover:text-cyan-600 transition-colors">
                    <Link href={`/blog/${post.slug}`} onClick={() => handlePostClick(post.title)}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Insight</h3>
          <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
            Get the latest SDR strategies, AI innovations, and life sciences industry insights delivered to your inbox
            every week.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-slate-900"
            />
            <Button type="submit" variant="secondary" className="bg-white text-cyan-600 hover:bg-slate-100">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-cyan-200 mt-4">Join 2,500+ life sciences professionals. Unsubscribe anytime.</p>
        </section>
      </div>
    </div>
  )
}
