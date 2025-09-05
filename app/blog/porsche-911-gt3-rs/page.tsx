import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Porsche911GT3RSPage() {
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
          <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm font-medium">FEATURED</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Porsche 911 GT3 RS: Track-Focused Engineering Excellence
        </h1>

        <div className="flex items-center space-x-6 mb-8 text-gray-600">
          <span className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            Mike Torres
          </span>
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Dec 14, 2024
          </span>
          <span>7 min read</span>
        </div>

        <img
          src="/porsche-911-gt3-rs-track-focused-engineering-red-s.jpg"
          alt="Porsche 911 GT3 RS"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The Porsche 911 GT3 RS represents the pinnacle of track-focused engineering, combining decades of motorsport
            expertise with cutting-edge aerodynamics to create the ultimate road-legal race car.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aerodynamic Mastery</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Every surface of the GT3 RS has been sculpted for maximum aerodynamic efficiency. The massive rear wing,
            front splitter, and side air intakes work in harmony to generate significant downforce while managing
            airflow around the vehicle. The result is a car that becomes more planted and stable as speeds increase.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Naturally Aspirated Power</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At the heart of the GT3 RS lies a 4.0-liter naturally aspirated flat-six engine producing 518 horsepower.
            This high-revving masterpiece delivers power linearly and predictably, with a soundtrack that's pure music
            to enthusiasts' ears. The engine redlines at 9,000 RPM, providing an exhilarating driving experience that
            turbocharged engines simply cannot match.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Track-Tuned Suspension</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The suspension system features adaptive dampers and anti-roll bars that can be adjusted for different track
            conditions. The car sits lower than the standard GT3, with a more aggressive setup that prioritizes track
            performance over comfort. Every component has been optimized for maximum precision and feedback.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Racing Heritage</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The GT3 RS draws directly from Porsche's extensive motorsport experience, incorporating lessons learned from
            decades of racing success. From the lightweight construction to the precise steering calibration, every
            aspect of this car reflects Porsche's commitment to performance excellence.
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
