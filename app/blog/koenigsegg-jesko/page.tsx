import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function KoenigseggJeskoPage() {
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
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            EXCLUSIVE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Koenigsegg Jesko: Swedish Innovation Meets Extreme Performance
          </h1>
          <div className="flex items-center space-x-6 text-gray-600">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Anna Larsson
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              December 6, 2024
            </span>
          </div>
        </div>

        <img
          src="/placeholder.svg?height=400&width=800"
          alt="Koenigsegg Jesko"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The Koenigsegg Jesko represents the Swedish manufacturer's vision of the ultimate track-focused hypercar,
            combining revolutionary technology with uncompromising performance in pursuit of the perfect driving
            machine.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Revolutionary Transmission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Jesko features Koenigsegg's groundbreaking Light Speed Transmission (LST), a 9-speed multi-clutch system
            that can change to any gear in virtually zero time. This revolutionary gearbox eliminates the traditional
            sequential shifting pattern, allowing the car to select the optimal gear for any situation instantly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Extreme Aerodynamics</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Jesko's aerodynamic package is the most advanced Koenigsegg has ever created. The massive rear wing can
            generate up to 1,400kg of downforce, while the active front splitter and side winglets work together to
            balance the car at high speeds. Every surface has been optimized for maximum aerodynamic efficiency.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Twin-Turbo V8 Mastery</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The 5.0-liter twin-turbocharged V8 engine produces up to 1,600 horsepower on racing fuel, making it one of
            the most powerful production car engines ever built. The engine features Koenigsegg's innovative tumble
            valve technology and advanced turbocharger system for maximum efficiency and power delivery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Track Weapon</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Jesko is designed with one goal in mind: to be the fastest track car possible. Every component, from the
            carbon fiber construction to the advanced suspension system, has been optimized for maximum performance.
            It's a car that pushes the boundaries of what's physically possible on a race track.
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
