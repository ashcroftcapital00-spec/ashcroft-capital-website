import Hero from "@/components/hero"
import About from "@/components/about"
import Approach from "@/components/approach"
import Properties from "@/components/properties"
import Leadership from "@/components/leadership"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Approach />
      <Properties />
      <Leadership />
      <CTA />
      <Footer />
    </main>
  )
}
