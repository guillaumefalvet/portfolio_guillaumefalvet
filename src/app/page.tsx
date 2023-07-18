import Link from 'next/link';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProfilePictore from '../../public/profilepicture.png';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="px-10 text-sage bg-gradient-to-tl from-moonstone via-feldgrau to-van-dyke xsm:px-5">
      <NavBar />
      <div className="flex justify-center">
        <section className="w-fit bg-almond bg-opacity-60 rounded-3xl xsm:w-screen md:w-3/4 sm:w-auto text-umber">
          <div className="text-center p-10 py-10">
            <div className="flex flex-col items-center pb-5">
              <img
                className="w-50 h-50 mb-3 rounded-full shadow-lg"
                src="./il_fullxfull.4337929119_si67-removebg-preview.png"
                alt="Photo de profile de Guillaume Falvet"
              />
            </div>
            <h1 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Guillaume Falvet
            </h1>
            <h3 className="text-2xl py-2 md:text-3xl text-beige-react text-mint-cream dev-cursor">
              Developpeur Javascript
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 mx-auto md:text-xl">
              Bienvenue sur mon site ! Je m&apos;appelle Guillaume Falvet et je
              suis actuellement en reconversion professionnelle dans le
              développement web. Après avoir travaillé comme cuisinier,
              j&apos;ai choisi de me tourner vers une nouvelle carrière dans
              laquelle j&apos;ai trouvé ma passion : le développement web.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 mx-auto md:text-xl">
              Je suis motivé par les défis techniques que le développement web
              implique et j&apos;aime découvrir de nouvelles technologies pour
              améliorer mes compétences. Mon sens de l&apos;initiative, ma
              curiosité et ma rigueur sont des atouts que je mets à profit dans
              mes projets. Je suis capable de travailler de manière autonome,
              tout en ayant un esprit d&apos;équipe fort qui me permet de
              collaborer efficacement avec mes collègues.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 mx-auto md:text-xl">
              Je suis à l&apos;aise avec plusieurs langages de programmation
              tels que HTML, CSS, Javascript, NodeJS, PSQL, et Python, ce qui me
              permet de travailler sur des projets complexes et passionnants. Si
              vous souhaitez en savoir plus sur mes compétences et mon parcours
              professionnel, n&apos;hésitez pas à me contacter.
            </p>
          </div>
          <Projects />
        </section>
      </div>
      <Footer />
    </main>
  );
}
