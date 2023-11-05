import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Paragraph from './components/Paragraph';
import ProfileCard from './components/ProfileCard';

export default function Home() {
  return (
    <>
      <main className="px-10 bg-gradient-to-t from-black via-umber to-umber xsm:px-5">
        <NavBar />
        <div className="flex justify-center">
          <div className="max-w-screen-xl bg-white bg-opacity-50 rounded-3xl xsm:w-screen md:w-3/4 sm:w-auto text-black">
            <ProfileCard />
            <SocialMedia />
            <Paragraph title="À Propos">
              Bonjour, je suis Guillaume Falvet, un passionné de développement
              et de technologie. Mon parcours professionnel atypique m&apos;a
              conduit vers le monde de la programmation, où j&apos;ai découvert
              ma véritable passion. J&apos;ai décidé de faire de ma passion mon
              métier en entreprenant un voyage de reconversion professionnelle,
              qui m&apos;a permis d&apos;acquérir des compétences solides en
              développement web et de devenir un concepteur développeur
              d&apos;applications en devenir. Découvrez ici mes projets.
            </Paragraph>
            <Projects />
          </div>
        </div>
      </main>
      <footer>
        <SocialMedia />
      </footer>
    </>
  );
}
