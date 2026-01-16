import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Invest in Communities?</h2>
        <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join us in transforming real estate investments into thriving communities. Contact our team to learn more
          about investment opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 px-8">
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-400 text-white hover:bg-emerald-800/30 bg-transparent"
          >
            View Resources
          </Button>
        </div>

        <div className="pt-12 md:pt-16 border-t border-emerald-800/30">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-emerald-400 font-semibold mb-3">Follow Us</div>
              <div className="space-y-2 text-sm text-emerald-100">
                <a
                  href="https://www.linkedin.com/company/ashcroft-capital-llc"
                  className="hover:text-white transition-colors block"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/ashcroftcapital/"
                  className="hover:text-white transition-colors block"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold mb-3">Contact</div>
              <div className="text-sm text-emerald-100">For partnership inquiries and investment opportunities</div>
            </div>
            <div>
              <div className="text-emerald-400 font-semibold mb-3">Resources</div>
              <div className="space-y-2 text-sm text-emerald-100">
                <a
                  href="https://www.prnewswire.com/news-releases/ashcroft-capital-announces-recapitalization-of-the-avery-302343626.html"
                  className="hover:text-white transition-colors block"
                >
                  News & Updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
