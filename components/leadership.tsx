import { Linkedin } from "lucide-react"

export default function Leadership() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
            Led by Industry Veterans
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-foreground">Ashcroft Capital Team</h3>
            <p className="text-emerald-600 font-semibold mt-2">Multifamily Investment Leaders</p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            Our leadership team brings decades of combined experience in real estate investment, property management,
            construction, and capital markets. We are united by a shared mission to create lasting value while elevating
            the communities we serve.
          </p>

          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/company/ashcroft-capital-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
