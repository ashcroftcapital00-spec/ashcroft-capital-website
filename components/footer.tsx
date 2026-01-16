export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-white font-bold text-lg">Ashcroft Capital</div>
            <p className="text-sm mt-2">Turning Vision Into Lasting Value</p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="https://ashcroftcapital.com" className="hover:text-white transition-colors">
              Main Site
            </a>
            <a href="https://www.youtube.com/c/AshcroftCapital" className="hover:text-white transition-colors">
              YouTube
            </a>
            <a
              href="https://birchstoneresidential.com/ashcroft-capital/"
              className="hover:text-white transition-colors"
            >
              Birchstone
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 md:mt-12 pt-8 text-center text-sm">
          <p>&copy; 2025 Ashcroft Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
