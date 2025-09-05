import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function McLaren720SPage() {
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
          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            MCLAREN
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            McLaren 720S: British Engineering at Its Finest
          </h1>
          <div className="flex items-center space-x-6 text-gray-600">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Sophie Anderson
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              December 8, 2024
            </span>
          </div>
        </div>

        <img
          src="/mclaren-720s-orange-carbon-fiber-supercar-detailed.jpg"
          alt="McLaren 720S"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The McLaren 720S represents the pinnacle of British automotive engineering, combining Formula 1-derived
            technology with stunning design to create one of the most capable supercars ever built.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Carbon Fiber Mastery</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The 720S features McLaren's revolutionary MonoCell II carbon fiber chassis, which weighs just 75kg while
            providing exceptional rigidity. This lightweight construction allows the 720S to achieve a dry weight of
            only 1,283kg, giving it an incredible power-to-weight ratio.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Twin-Turbo Excellence</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The 4.0-liter twin-turbocharged V8 engine produces 710 horsepower and 568 lb-ft of torque, propelling the
            720S from 0-60 mph in just 2.8 seconds. The engine's flat torque curve ensures explosive acceleration at any
            speed, while the distinctive McLaren exhaust note provides an unforgettable soundtrack.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Aerodynamic Innovation</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            McLaren's innovative approach to aerodynamics is evident throughout the 720S. The distinctive dihedral doors
            aren't just for show – they improve airflow around the car. The active rear spoiler and front air dam work
            together to optimize downforce and reduce drag automatically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Complete Package</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The 720S isn't just about straight-line speed – it's a complete supercar that excels on both road and track.
            The adaptive suspension provides comfort for daily driving while transforming into a track weapon when
            needed. It's this versatility that makes the 720S truly special.
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
