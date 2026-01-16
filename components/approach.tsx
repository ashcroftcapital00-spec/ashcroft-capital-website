export default function Approach() {
  const pillars = [
    {
      title: "Strategic Insight",
      description:
        "Deep market analysis to identify opportunities early and position assets strategically for maximum growth.",
    },
    {
      title: "Operational Excellence",
      description: "Seamless coordination across acquisition, management, construction, and resident services.",
    },
    {
      title: "Sustainability First",
      description:
        "Energy-efficient systems and resource-saving upgrades that reduce environmental impact and ensure long-term competitiveness.",
    },
    {
      title: "Community Impact",
      description:
        "Properties designed as thriving destinations where residents feel valued and connected to their community.",
    },
    {
      title: "Transparent Partnership",
      description: "Clear communication, regular performance reporting, and accountability at every stage.",
    },
    {
      title: "Continuous Innovation",
      description: "Advanced data analytics and technology to optimize decisions and anticipate market trends.",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
            Excellence Through Integration
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-emerald-600 rounded-sm"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
