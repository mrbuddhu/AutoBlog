import { Search, Calendar, User, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function HomePage() {
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
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero-background.jpeg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 text-white max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">Featured</span>
              <span className="text-sm text-gray-300 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Dec 15, 2024
              </span>
              <span className="text-sm text-gray-300 flex items-center">
                <User className="w-4 h-4 mr-1" />
                Alex Johnson
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Future of <span className="text-red-500">Electric</span>
              <br />
              Supercars is Here
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Discover how cutting-edge electric powertrains are revolutionizing the automotive industry, delivering
              unprecedented performance while maintaining environmental sustainability.
            </p>

            <div className="flex items-center space-x-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-medium">
                Read Article →
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded font-medium bg-transparent"
              >
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 text-xl">📖</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500K+</h3>
              <p className="text-gray-600">Monthly Readers</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 text-xl">🚗</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">250+</h3>
              <p className="text-gray-600">Car Reviews</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 text-xl">📝</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Daily</h3>
              <p className="text-gray-600">Fresh Content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest automotive news, reviews, and insights from our expert team of automotive
              journalists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/tesla-model-s-plaid-electric-car-dashboard-interio.jpg"
                  alt="Tesla Model S Plaid"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ELECTRIC
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/tesla-model-s-plaid">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    Tesla Model S Plaid: Breaking Speed Records in Electric Performance
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  The latest Tesla Model S Plaid redefines what electric vehicles can achieve, delivering unprecedented
                  acceleration and range in a luxury package.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Sarah Mitchell
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 15, 2024
                    </span>
                  </div>
                  <Link href="/blog/tesla-model-s-plaid">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/porsche-911-gt3-rs-track-focused-engineering-red-s.jpg"
                  alt="Porsche 911 GT3 RS"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  FEATURED
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/porsche-911-gt3-rs">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    Porsche 911 GT3 RS: Track-Focused Engineering Excellence
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Porsche's latest GT3 RS combines decades of motorsport expertise with cutting-edge aerodynamics to
                  create the ultimate track-focused road car.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Mike Torres
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 14, 2024
                    </span>
                  </div>
                  <Link href="/blog/porsche-911-gt3-rs">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/bmw-m4-competition-coupe-racing-blue.jpg"
                  alt="BMW M4 Competition"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  REVIEW
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/bmw-m4-competition">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    BMW M4 Competition: Pure Driving Dynamics Redefined
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  The BMW M4 Competition delivers raw performance with precision handling, making it a true driver's car
                  for enthusiasts.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      James Wilson
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 13, 2024
                    </span>
                  </div>
                  <Link href="/blog/bmw-m4-competition">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/lamborghini-huracan-evo-orange-supercar.jpg"
                  alt="Lamborghini Huracán Evo"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  SUPERCAR
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/lamborghini-huracan-evo">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    Lamborghini Huracán EVO: Italian Passion Meets Technology
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  The Huracán EVO showcases Lamborghini's commitment to combining emotional design with cutting-edge
                  technology.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Emma Rodriguez
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 12, 2024
                    </span>
                  </div>
                  <Link href="/blog/lamborghini-huracan-evo">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/mercedes-amg-gt-black-series-silver-racing-car.jpg"
                  alt="Mercedes AMG GT Black Series"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  LUXURY
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/mercedes-amg-gt-black-series">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    Mercedes-AMG GT Black Series: Track Beast Unleashed
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  The most powerful AMG GT ever built brings Formula 1 technology to the road in an uncompromising
                  package.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      David Chen
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 11, 2024
                    </span>
                  </div>
                  <Link href="/blog/mercedes-amg-gt-black-series">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/ferrari-sf90-stradale-red-hybrid-supercar.jpg"
                  alt="Ferrari SF90 Stradale"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  HYBRID
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/ferrari-sf90-stradale">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    Ferrari SF90 Stradale: Hybrid Revolution from Maranello
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Ferrari's first plug-in hybrid supercar combines electric efficiency with the legendary V8
                  performance.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Lisa Thompson
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 10, 2024
                    </span>
                  </div>
                  <Link href="/blog/ferrari-sf90-stradale">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 7 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/audi-r8-v10-plus-white-supercar.jpg"
                  alt="Audi R8 V10 Plus"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  PERFORMANCE
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/audi-r8-v10-plus">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    Audi R8 V10 Plus: The Last of the Naturally Aspirated
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Audi's flagship supercar celebrates the pure joy of naturally aspirated V10 power in its final form.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Robert Kim
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 9, 2024
                    </span>
                  </div>
                  <Link href="/blog/audi-r8-v10-plus">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 8 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/mclaren-720s-orange-carbon-fiber-supercar.jpg"
                  alt="McLaren 720S"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  MCLAREN
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/mclaren-720s">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    McLaren 720S: British Engineering at Its Finest
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  The 720S represents McLaren's pursuit of aerodynamic perfection and lightweight construction
                  excellence.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Sophie Anderson
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 8, 2024
                    </span>
                  </div>
                  <Link href="/blog/mclaren-720s">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 9 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/bugatti-chiron-blue-carbon-fiber-hypercar.jpg"
                  alt="Bugatti Chiron"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  HYPERCAR
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/bugatti-chiron">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    Bugatti Chiron: The Ultimate Expression of Speed
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  With 1,479 horsepower, the Chiron pushes the boundaries of what's possible in automotive engineering.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Marcus Weber
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 7, 2024
                    </span>
                  </div>
                  <Link href="/blog/bugatti-chiron">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article 10 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="/koenigsegg-jesko-white-carbon-fiber-hypercar.jpg"
                  alt="Koenigsegg Jesko"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  EXCLUSIVE
                </span>
              </div>
              <CardContent className="p-6">
                <Link href="/blog/koenigsegg-jesko">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-500 cursor-pointer">
                    Koenigsegg Jesko: Swedish Innovation Meets Extreme Performance
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  The Jesko represents Koenigsegg's vision of the ultimate track-focused hypercar with revolutionary
                  technology.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      Anna Larsson
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      Dec 6, 2024
                    </span>
                  </div>
                  <Link href="/blog/koenigsegg-jesko">
                    <span className="text-red-500 font-medium cursor-pointer hover:underline">Read More →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest automotive news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-gray-900 border-0" />
              <Button className="bg-red-500 hover:bg-red-600 px-8">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* AutoBlog Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🚗</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">AutoBlog</span>
                    <span className="text-sm text-slate-400">Motor Vehicle Insights</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Your ultimate destination for the latest automotive news, reviews, and insights. From classic cars to
                  cutting-edge electric vehicles.
                </p>
                <div className="flex space-x-4">
                  <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                  <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                  <Youtube className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Sports Cars
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Electric Vehicles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Motorcycles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Trucks & SUVs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Classic Cars
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Car Reviews
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Advertise
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-slate-300 hover:text-white">
                      Newsletter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Get in Touch */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Get in Touch</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="text-slate-300">
                      <div>123 Auto Street</div>
                      <div>Motor City, MC 12345</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-slate-300">+1 (234) 567-8900</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-slate-300">info@autoblog.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
              <p>&copy; 2024 AutoBlog. All rights reserved.</p>
              <p>Made with ❤️ for automotive enthusiasts</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
