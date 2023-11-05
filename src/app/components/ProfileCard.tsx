import Image from 'next/image';
import profilePicture from '../assets/pfp.png';
export default function ProfileCard() {
  return (
    <div className="p-10 py-10">
      <div className="flex flex-wrap justify-center mb-14">
        <Image
          className="rounded-full shadow-lg md:mr-10 xsm:mr-0"
          src={profilePicture}
          width="350"
          alt="Photo de Guillaume Falvet"
        />
        <div className="mt-10">
          <h1 className="text-5xl py-2 font-medium md:text-6xl">
            Guillaume Falvet
          </h1>
          <h3 className="text-2xl py-2 md:text-4xl dev-cursor">
            Developpeur Web
          </h3>

          <h2 className="text-1xl py-2 md:text-3xl">
            Actuellement en recherche d&apos;alternance pour Janvier 2024
          </h2>
        </div>
      </div>
    </div>
  );
}
