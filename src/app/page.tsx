'use client'
import NavBar from '@components/NavBar'
import Projects from '@components/Projects'
import Footer from '@components/Footer'
import AboutAndSkils from '@components/AboutAndSkils'
import Timeline from '@components/Timeline'
import LandingPart from '@components/LandingPart'
import { useState } from 'react'
import Contact from '@components/Contact'
import HackerManPage from '@components/HackerManPage'

export default function Home() {
  const [isAHackerMan, setIsAHackerman] = useState<boolean>(false)
  return (
    <>
      {isAHackerMan ? (
        <HackerManPage />
      ) : (
        <main className="bg-gradient-to-bl from-background to-stone-600 px-5 font-satoshi text-white dark:bg-background dark:text-white">
          <NavBar />
          <LandingPart />
          <AboutAndSkils />
          <Projects />
          <Timeline />
          <Contact setIsAHackerman={setIsAHackerman} />
          <Footer />
        </main>
      )}
    </>
  )
}
