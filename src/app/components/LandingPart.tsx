import Image from 'next/image'
import profilePicture from '@assets/pfp2.png'
export default function LandingPart() {
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
        <h3 className="dev-cursor  text-mainColor  to-white text-5xl font-extrabold">
          Developpeur Web
        </h3>
      </div>

      {/* arrow down */}
      <div className="scroll-down"></div>
    </div>
  )
}
