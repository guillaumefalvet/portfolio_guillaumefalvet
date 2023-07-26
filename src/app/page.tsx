import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Image from 'next/image';
import profilePicture from '../../public/withoutbg.png';
import SocialMedia from './components/SocialMedia';

export default function Home() {
  const profilePictureWidth = 300;
  function getHeightAspectRation(width: number) {
    const ratioWidth = 100;
    const rationHeight = 113;
    const aspectRatio = (width * rationHeight) / ratioWidth;
    return aspectRatio;
  }
  return (
    <main className="px-10 bg-gradient-to-tl from-moonstone via-moonstone to-black xsm:px-5">
      <NavBar />
      <div className="flex justify-center">
        <section className="max-w-screen-xl bg-black bg-opacity-50 rounded-3xl xsm:w-screen md:w-3/4 sm:w-auto text-white">
          <div className="text-center p-10 py-10">
            <div className="flex flex-wrap justify-center mb-14">
              <div className="pb-5">
                <Image
                  className="rounded-full shadow-lg md:mr-10 xsm:mr-0"
                  src={profilePicture}
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
                  Developpeur Web
                </h3>
              </div>
            </div>
            <SocialMedia />
            <p className="text-md py-5 leading-8 text-gray-800 mx-auto md:text-xl">
              Je m&apos;appelle Guillaume Falvet, j&apos;ai 28 ans, et j&apos;ai
              toujours été passionné par la technologie, en particulier le
              développement web. Mon parcours professionnel a été varié,
              commençant par le domaine du bâtiment où j&apos;ai exercé en tant
              que charpentier/menuisier, puis dans le secteur de la grande
              distribution en tant que magasinier et responsable du rayon fruits
              et légumes. Finalement, j&apos;ai trouvé ma place dans le domaine
              de la restauration en tant que commis de cuisine en 2020, et
              j&apos;ai progressé pour devenir second de cuisine/chef de partie.
              Après une période de préparation intensive, j&apos;ai pris la
              décision en 2022 d&apos;entamer une reconversion professionnelle
              dans le domaine du développement web. J&apos;ai suivi une
              formation de six mois en tant que Développeur Web et Web Mobile
              chez O&apos;clock, qui m&apos;a permis d&apos;acquérir de solides
              compétences. La formation m&apos;a également renforcé dans ma
              motivation et ma détermination à poursuivre cette nouvelle
              carrière.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 mx-auto md:text-xl">
              Durant ma formation, j&apos;ai pris la décision de me spécialiser
              davantage dans le domaine du backend du développement web.
              J&apos;ai trouvé un réel intérêt pour la gestion des bases de
              données, la logique des algorithmes et la création d&apos;APIs
              robustes. Cependant, je tiens à souligner que j&apos;ai également
              une passion pour le design. J&apos;apprécie l&apos;aspect visuel
              des interfaces utilisateur et je suis soucieux de créer des
              expériences esthétiques et conviviales pour les utilisateurs.
              Cette combinaison de compétences en backend et en design me permet
              d&apos;avoir une vision globale des projets web et de contribuer à
              leur succès de manière holistique. Je crois fermement que
              l&apos;alliance du design et de la fonctionnalité est essentielle
              pour créer des sites web et des applications à la fois attrayants
              et performants. Cela me motive à continuer à me former et à
              explorer de nouvelles techniques et tendances dans le domaine du
              design d&apos;interfaces utilisateur.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 mx-auto md:text-xl">
              Actuellement, je suis à la recherche d&apos;une entreprise qui
              pourrait m&apos;accueillir en alternance pour le passage du titre
              de Concepteur Développeur d&apos;Application. Je suis enthousiaste
              à l&apos;idée de mettre en pratique mes connaissances et de
              continuer à me développer professionnellement au sein d&apos;une
              équipe dynamique. Je suis convaincu que ma polyvalence, ma
              capacité d&apos;adaptation et ma volonté constante
              d&apos;apprendre seront des atouts précieux dans cette nouvelle
              étape de ma carrière. Je suis prêt à relever de nouveaux défis et
              à contribuer activement au succès des projets auxquels je
              participerai.
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
