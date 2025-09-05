import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AudiR8V10PlusPage() {
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
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            PERFORMANCE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Audi R8 V10 Plus: The Last of the Naturally Aspirated
          </h1>
          <div className="flex items-center space-x-6 text-gray-600">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Robert Kim
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              December 9, 2024
            </span>
          </div>
        </div>

        <img
          src="/audi-r8-v10-plus-white-supercar-detailed.jpg"
          alt="Audi R8 V10 Plus"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The Audi R8 V10 Plus represents the swan song of naturally aspirated supercars, celebrating the pure joy of
            a high-revving V10 engine in an era of forced induction and electrification.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Heart of the Beast</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The 5.2-liter naturally aspirated V10 engine produces 602 horsepower and 413 lb-ft of torque, delivering
            power in a linear, predictable manner that's becoming increasingly rare. The engine revs to 8,700 rpm,
            creating a symphony that no turbocharged engine can match.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quattro All-Wheel Drive</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Audi's legendary quattro all-wheel-drive system ensures that all 602 horses reach the ground effectively.
            The system can send up to 100% of torque to the rear wheels when needed, allowing for controlled oversteer
            while maintaining the security of all-wheel traction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Everyday Supercar</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Unlike many supercars, the R8 V10 Plus is remarkably usable as a daily driver. The cabin is spacious, the
            ride quality is comfortable in Comfort mode, and the visibility is excellent. It's a supercar you can drive
            every day without compromise.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Fitting Farewell</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            As one of the last naturally aspirated supercars, the R8 V10 Plus serves as a reminder of what we're losing
            in the march toward electrification. It's a pure, honest supercar that prioritizes driver engagement over
            ultimate lap times, making it a true enthusiast's choice.
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
