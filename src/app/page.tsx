import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Image from 'next/image';
import profilePicture2 from '../../public//JCG_0048 copie.png';
import SocialMedia from './components/SocialMedia';
import Paragraph from './components/Paragraph';

export default function Home() {
  return (
    <main className="px-10 bg-gradient-to-t from-black via-umber to-umber xsm:px-5">
      <NavBar />
      <div className="flex justify-center">
        <section className="max-w-screen-xl bg-white bg-opacity-50 rounded-3xl xsm:w-screen md:w-3/4 sm:w-auto text-black">
          <div className="p-10 py-10">
            <div className="flex flex-wrap justify-center mb-14">
              <div className="pb-5">
                <Image
                  className="rounded-full shadow-lg md:mr-10 xsm:mr-0"
                  src={profilePicture2}
                  width="350"
                  alt="Photo de Guillaume Falvet"
                />
              </div>
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
            <SocialMedia />
            <Paragraph>
              N&apos;hésitez pas à me contacter si vous souhaitez en savoir plus
              sur mon parcours ou discuter de possibilités de collaboration. Je
              suis impatient de mettre mes compétences de développeur web au
              service de projets passionnants.
            </Paragraph>
          </div>
          <Projects />
        </section>
      </div>
      <SocialMedia />
    </main>
  );
}
