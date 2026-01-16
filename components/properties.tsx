import Image from "next/image"

export default function Properties() {
  const properties = [
    {
      name: "Modern Luxury Portfolio",
      location: "Sun Belt Region",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/getty-images-oaCmnTJE9pw-unsplash-QKxcH7QjgOfYnpnw7A3w6LMELXfZSn.jpg",
      stats: "250+ Units",
    },
    {
      name: "Contemporary Communities",
      location: "Strategic Markets",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/getty-images-rHoMQ87hvIY-unsplash-oCTN7qSPj7yov2kqXWvYmXldVxpVDO.jpg",
      stats: "500+ Units",
    },
    {
      name: "Transformed Destinations",
      location: "Growth Corridors",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bildstockru-master-AIYaPfyG3hU-unsplash-RaXzsL2cfnb4j4JkjC9wP6qfq0A2k5.jpg",
      stats: "300+ Units",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
            Properties That Transform Communities
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-64 md:h-72 overflow-hidden rounded-lg mb-6">
                <Image
                  src={prop.image || "/placeholder.svg"}
                  alt={prop.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">{prop.stats}</div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{prop.name}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{prop.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
