'use client'
import NavBar from '@components/NavBar'
import Projects from '@components/Projects'
import Footer from '@components/Footer'
import AboutAndSkils from '@components/AboutAndSkils'
import Timeline from '@components/Timeline'
import LandingPart from '@components/LandingPart'

export default function Home() {
  return (
    <main
      className="bg-gradient-to-bl
     from-background to-stone-600 px-5 font-satoshi text-white dark:bg-background dark:text-white"
    >
      {/* "background-animate to-main via-backgroundx from-backgroundx bg-gradient-to-r px-4" */}
      <NavBar />
      <LandingPart />
      <AboutAndSkils />
      <Projects />
      <Timeline />
      <Footer />
    </main>
  )
}
