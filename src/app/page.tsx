import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Image from 'next/image';
import profilePicture2 from '../../public//JCG_0048 copie.png';
import SocialMedia from './components/SocialMedia';

export default function Home() {
  const profilePictureWidth = 350;
  function getHeightAspectRation(width: number) {
    const ratioWidth = 150;
    const rationHeight = 150;
    const aspectRatio = (width * rationHeight) / ratioWidth;
    return aspectRatio;
  }
  return (
    <main className="px-10 bg-gradient-to-t from-black via-umber to-umber xsm:px-5">
      <NavBar />
      <div className="flex justify-center">
        <section className="max-w-screen-xl bg-white bg-opacity-50 rounded-3xl xsm:w-screen md:w-3/4 sm:w-auto text-black">
          <div className="text-center p-10 py-10">
            <div className="flex flex-wrap justify-center mb-14">
              <div className="pb-5">
                <Image
                  className="rounded-full shadow-lg md:mr-10 xsm:mr-0"
                  src={profilePicture2}
                  width={profilePictureWidth}
                  height={getHeightAspectRation(profilePictureWidth)}
                  alt="Photo de profile de Guillaume Falvet"
                />
              </div>
              <div className="text-left mt-10">
                <h1 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl text-left">
                  Guillaume Falvet
                </h1>
                <h3 className="text-2xl py-2 md:text-3xl text-beige-react text-mint-cream dev-cursor text-left">
                  Developpeur JavaScript spécialisé backend
                </h3>

                <h2 className="text-1xl py-2 md:text-2xl text-beige-react text-mint-cream text-left">
                  Actuellement en recherche d&apos; alternance pour Janvier 2024
                  aux alentours de Montpellier
                </h2>
              </div>
            </div>
            <h3 className="text-4xl py-2 text-beige-react text-mint-cream text-center font-medium">
              À propos
            </h3>
            <SocialMedia />

            <p className="text-md py-5 leading-8 text-gray-800 mx-auto md:text-xl">
              J&apos;ai 28 ans et j&apos;ai toujours été passionné par la
              technologie, en particulier le développement web. Mon parcours
              professionnel a été varié, commençant par le domaine du bâtiment
              où j&apos;ai exercé en tant que charpentier/menuisier, puis dans
              le secteur de la grande distribution en tant que magasinier et
              responsable du rayon fruits et légumes. Finalement, j&apos;ai
              trouvé ma place dans le domaine de la restauration en tant que
              commis de cuisine en 2020, et j&apos;ai progressé pour devenir
              second de cuisine/chef de partie. Après une période de préparation
              intensive, j&apos;ai pris la décision en 2022 d&apos;entamer une
              reconversion professionnelle dans le domaine du développement web.
              J&apos;ai suivi une formation de six mois en tant que Développeur
              Web et Web Mobile chez O&apos;clock, qui m&apos;a permis
              d&apos;acquérir de solides compétences. La formation m&apos;a
              également renforcé dans ma motivation et ma détermination à
              poursuivre cette nouvelle carrière.
            </p>

            <p className="text-md py-5 leading-8 text-gray-800 mx-auto md:text-xl">
              N&apos;hésitez pas à me contacter si vous souhaitez en savoir plus
              sur mon parcours ou discuter de possibilités de collaboration. Je
              suis impatient de mettre mes compétences de développeur web au
              service de projets passionnants.
            </p>
          </div>
          <Projects />
        </section>
      </div>
      <SocialMedia />
    </main>
  );
}
