import Image from "next/image"

export default function About() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Building Communities with Purpose
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Since our founding, Ashcroft Capital has grown through discipline and foresight. We target markets across
              the Sun Belt, where economic expansion, population growth, and housing demand create strong fundamentals
              for long-term success.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Every decision reflects a balance between opportunity and prudence—ensuring sustainable performance that
              endures through market cycles. Our vertically integrated platform allows seamless coordination from
              acquisition to asset management.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-emerald-600 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Purpose-Driven Investing</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Each property is evaluated for financial potential and its capacity to become a thriving, livable
                    community.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-emerald-600 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vertically Integrated</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Direct management of critical functions ensures tighter control, reduced costs, and stronger
                    outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bildstockru-master-AIYaPfyG3hU-unsplash-RaXzsL2cfnb4j4JkjC9wP6qfq0A2k5.jpg"
              alt="Ashcroft properties"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
