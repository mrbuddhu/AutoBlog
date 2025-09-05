import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MercedesAMGGTBlackSeriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">🚗</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">AutoBlog</span>
              <span className="text-sm text-gray-500">Motor Vehicle Insights</span>
            </div>
          </Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-red-500 hover:text-red-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-8">
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            LUXURY
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mercedes-AMG GT Black Series: Track Beast Unleashed
          </h1>
          <div className="flex items-center space-x-6 text-gray-600">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              David Chen
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              December 11, 2024
            </span>
          </div>
        </div>

        <img
          src="/mercedes-amg-gt-black-series-silver-racing-car-det.jpg"
          alt="Mercedes AMG GT Black Series"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The Mercedes-AMG GT Black Series represents the pinnacle of AMG engineering, bringing Formula 1 technology
            to the road in the most powerful AMG GT ever created.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unleashed Power</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The hand-built 4.0-liter twin-turbo V8 engine has been extensively modified to produce 720 horsepower and
            590 lb-ft of torque. This represents a significant increase over the standard GT R, achieved through larger
            turbochargers, a new intake system, and revised engine mapping.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Aerodynamic Mastery</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Every surface of the Black Series has been optimized for aerodynamic efficiency. The massive rear wing,
            front splitter, and side skirts work together to generate significant downforce, while the active
            aerodynamics adjust automatically based on driving conditions and selected drive mode.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Track-Focused Engineering</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Black Series features a completely reworked suspension system with adjustable coilovers, spherical
            bearings, and anti-roll bars. The carbon fiber body panels reduce weight while increasing structural
            rigidity, and the ceramic composite brakes provide fade-free stopping power.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Ultimate AMG</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With a 0-60 mph time of 3.1 seconds and a top speed of 202 mph, the GT Black Series is not just the fastest
            AMG GT – it's one of the fastest production cars ever built. It represents Mercedes-AMG's uncompromising
            pursuit of performance perfection.
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
