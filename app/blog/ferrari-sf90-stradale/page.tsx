import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FerrariSF90StradaleePage() {
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
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            HYBRID
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ferrari SF90 Stradale: Hybrid Revolution from Maranello
          </h1>
          <div className="flex items-center space-x-6 text-gray-600">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Lisa Thompson
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              December 10, 2024
            </span>
          </div>
        </div>

        <img
          src="/ferrari-sf90-stradale-red-hybrid-supercar-detailed.jpg"
          alt="Ferrari SF90 Stradale"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The Ferrari SF90 Stradale marks a revolutionary moment in Ferrari's history as their first plug-in hybrid
            supercar, combining legendary V8 performance with cutting-edge electric technology.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hybrid Powerhouse</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The SF90 Stradale combines a twin-turbocharged 4.0-liter V8 engine with three electric motors to produce a
            combined 986 horsepower. This hybrid system allows for pure electric driving for short distances while
            delivering explosive performance when all systems work together.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Technology</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Ferrari has integrated their most advanced technologies into the SF90, including the eManettino dial that
            allows drivers to select between different hybrid modes. The car features torque vectoring, advanced
            traction control, and a sophisticated energy recovery system.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Performance Redefined</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With a 0-60 mph time of just 2.5 seconds and a top speed of 211 mph, the SF90 Stradale is the fastest
            Ferrari road car ever produced. The instant torque from the electric motors fills any gaps in the V8's power
            delivery, creating seamless acceleration.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Future of Ferrari</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The SF90 Stradale represents Ferrari's vision for the future – a world where hybrid technology enhances
            rather than compromises the pure Ferrari experience. It proves that electrification can coexist with the
            passion and emotion that defines the prancing horse.
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
