import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeslaModelSPlaidPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">🚗</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">AutoBlog</span>
              <span className="text-sm text-gray-500">Motor Vehicle Insights</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Cars
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Motorcycles
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Trucks
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Electric
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Reviews
            </a>
          </nav>

          <div className="flex items-center">
            <Share2 className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-600 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-6">
          <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">ELECTRIC</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Tesla Model S Plaid: Breaking Speed Records in Electric Performance
        </h1>

        <div className="flex items-center space-x-6 mb-8 text-gray-600">
          <span className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            Sarah Mitchell
          </span>
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Dec 15, 2024
          </span>
          <span>5 min read</span>
        </div>

        <img
          src="/tesla-model-s-plaid-electric-car-dashboard-interio.jpg"
          alt="Tesla Model S Plaid Interior"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The Tesla Model S Plaid represents a quantum leap in electric vehicle performance, delivering unprecedented
            acceleration and range that challenges the very definition of what an electric car can achieve.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Revolutionary Performance</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With its tri-motor setup producing over 1,000 horsepower, the Model S Plaid accelerates from 0-60 mph in
            just 1.99 seconds, making it one of the fastest production cars ever built. This isn't just about
            straight-line speed – the advanced torque vectoring system ensures exceptional handling dynamics that rival
            traditional supercars.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cutting-Edge Technology</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Plaid's 4680 battery cells represent the latest in battery technology, offering improved energy density
            and thermal management. Combined with Tesla's advanced battery management system, the vehicle achieves an
            EPA-estimated range of over 400 miles on a single charge.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interior Innovation</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Inside, the Model S Plaid features a completely redesigned interior with a 17-inch horizontal touchscreen, a
            new steering wheel design, and premium materials throughout. The rear passengers enjoy their own 8-inch
            display for entertainment and climate control.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Future of Electric</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Model S Plaid isn't just a car – it's a statement about the future of automotive performance. By proving
            that electric vehicles can outperform traditional supercars while maintaining practicality and efficiency,
            Tesla has redefined what consumers can expect from electric mobility.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/">
            <Button className="bg-red-500 hover:bg-red-600 text-white">← Back to All Articles</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}
