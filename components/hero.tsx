import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/getty-images-rHoMQ87hvIY-unsplash-oCTN7qSPj7yov2kqXWvYmXldVxpVDO.jpg"
          alt="luxury residential"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <div className="mb-6 inline-block">
          <span className="inline-block bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
            Multifamily Investment Excellence
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Turning Vision Into <span className="text-emerald-400">Lasting Value</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ashcroft Capital combines financial expertise with operational excellence to elevate communities across the
          Sun Belt and create measurable value for investors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
            Explore Our Platform
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-950 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-slate-400">Properties Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">$2B+</div>
            <div className="text-slate-400">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">15+</div>
            <div className="text-slate-400">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  )
}
