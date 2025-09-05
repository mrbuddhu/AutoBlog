import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button" // Updated import path

export default function LamborghiniHuracanEvoPage() {
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
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            SUPERCAR
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Lamborghini Huracán EVO: Italian Passion Meets Technology
          </h1>
          <div className="flex items-center space-x-6 text-gray-600">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Emma Rodriguez
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              December 12, 2024
            </span>
          </div>
        </div>

        <img
          src="/lamborghini-huracan-evo-orange-supercar-detailed.jpg"
          alt="Lamborghini Huracan Evo"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            The Lamborghini Huracán EVO represents the perfect marriage of Italian passion and cutting-edge technology,
            creating a supercar that's as emotionally stirring as it is technologically advanced.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Heart of a Bull</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At the core of the Huracán EVO lies a naturally aspirated 5.2-liter V10 engine producing 630 horsepower and
            443 lb-ft of torque. This magnificent powerplant delivers its power with the characteristic Lamborghini
            roar, accelerating from 0-60 mph in just 2.9 seconds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technological Evolution</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The EVO features Lamborghini's LDVI (Lamborghini Dinamica Veicolo Integrata) system, which acts as the car's
            central brain, coordinating all dynamic systems in real-time. This technology allows the Huracán EVO to
            predict the driver's intentions and optimize performance accordingly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Design Philosophy</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Every line of the Huracán EVO serves a purpose, from the aggressive front splitter to the integrated rear
            spoiler. The design isn't just about aesthetics – it's about channeling airflow to maximize downforce and
            cooling efficiency while maintaining that unmistakable Lamborghini presence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Experience</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Driving the Huracán EVO is an assault on the senses in the best possible way. The V10's symphony, the
            precise steering feedback, and the explosive acceleration combine to create an experience that's pure
            automotive theater. It's a car that makes every journey feel like a special occasion.
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
