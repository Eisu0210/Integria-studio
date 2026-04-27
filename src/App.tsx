import './App.css'
import { HeroSection } from './components/HeroSection'
import { OffersSection } from './components/OffersSection'
import { UseCasesSection } from './components/UseCasesSection'
import { MethodSection } from './components/MethodSection'
import { DemoSection } from './components/DemoSection'
import { FinalCtaSection } from './components/FinalCtaSection'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <div className="page-shell">
      <HeroSection />
      <main>
        <OffersSection />
        <UseCasesSection />
        <MethodSection />
        <DemoSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
