import Image from 'next/image'
import profilePicture from '@assets/pfp2.png'
import { useEffect, useState } from 'react'
export default function LandingPart() {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)

  function handleScroll() {
    // by default scrollY is 0 (obviously..), so when you scroll past 300px the scroll state changes to true
    if (window.scrollY >= 300) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="h-screen">
      <div className="mb-14 flex flex-wrap justify-center">
        <Image
          className="mr-0 rounded-full shadow-lg md:mr-10"
          src={profilePicture}
          width="400"
          alt="Photo de Guillaume Falvet"
        />
      </div>
      <div className="flex flex-wrap justify-center py-2">
        <h2 className="dev-cursor  to-white  text-5xl font-extrabold text-mainColor">
          Developpeur Web
        </h2>
      </div>

      {/* arrow down animation if the scroll state is true*/}
      {!isScrolling && <div className="scroll-down"></div>}
    </div>
  )
}
