import H3 from './ui/H3'
import { motion } from 'framer-motion'
import Strong from './ui/Strong'
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}
export default function AboutAndSkils() {
  return (
    <div className="grid gap-10 md:mx-16 md:grid-cols-2 ">
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex max-w-4xl flex-col"
      >
        <h2 className="text-mainColor py-2 text-center text-4xl font-medium">
          À Propos
        </h2>

        <H3>🚀 Mon Parcours Professionnel et Ma Passion</H3>
        <p>
          Mon parcours professionnel a évolué de manière diversifiée, mais ma
          passion pour le numérique et le développement a persisté comme une
          constante inspiratrice. Pour moi, le développement n&apos;est pas
          seulement une compétence technique, c&apos;est aussi un moyen
          d&apos;expression.
        </p>

        <H3>💡 Découverte de ma Voie à travers Python et O&apos;Clock</H3>
        <p>
          Initialement, j&apos;ai exploré le monde du développement en réalisant
          plusieurs projets en Python grâce à des formations Udemy et
          d&apos;autres ressources gratuites. Après avoir travaillé trois années
          dans la restauration pour financer ma reconversion, j&apos;ai
          entrepris avec détermination une formation de Développeur Fullstack
          JavaScript chez O&apos;Clock. Cette expérience m&apos;a permis de
          maîtriser des technologies web telles que HTML, CSS, JavaScript,
          NodeJS et SQL.
        </p>

        <H3>🎯 L&apos;Équilibre entre Frontend et Backend</H3>
        <p>
          Au cours de ma formation, j&apos;ai développé un intérêt particulier
          pour les défis liés à la création de backend. Cependant, en tant que
          diplômé Fullstack, j&apos;ai également acquis une solide base en
          frontend, notamment avec ReactJS, que je continue d&apos;approfondir
          de manière autodidacte à travers des projets et des formations en
          ligne.
        </p>

        <H3>
          🏆 Réussite chez O&apos;Clock et Orientation vers l&apos;Alternance
        </H3>
        <p>
          Grâce à mes efforts, j&apos;ai obtenu avec succès mon titre
          professionnel de DWWM chez O&apos;Clock, avec les encouragements du
          jury pour la suite de ma carrière. Animé par le désir de compléter ma
          formation par une expérience pratique, je suis à la recherche
          d&apos;une <Strong>alternance</Strong> pour mettre en application mes
          connaissances et contribuer activement à des projets concrets.
        </p>
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex max-w-4xl flex-col text-justify"
      >
        <h2 className="text-mainColor py-2 text-center text-4xl font-medium">
          Compétences
        </h2>
        <H3>🚀 Langages de programmation</H3>
        <ul>
          <li>
            <Strong>Javascript:</Strong> Maîtrise de Javascript et Typescript
            pour le développement web.
          </li>
          <li>
            <Strong>NodeJS:</Strong> Utilisation avancée de NodeJS pour le
            développement côté backend.
          </li>
          <li>
            <Strong>Express et NestJS:</Strong> Expérience dans le développement
            de backend avec Express et NestJS.
          </li>
          <li>
            <Strong>React:</Strong> Développement d&apos;interfaces utilisateur
            réactives avec React.
          </li>
        </ul>

        <H3>🗃️ Bases de données</H3>
        <ul>
          <li>
            <Strong>PostgreSQL & MongoDB:</Strong> Utilisation de SGBD
            relationnelles et NoSQL.
          </li>
        </ul>

        <H3>🎨 Technologies web</H3>
        <ul>
          <li>
            <Strong>HTML, CSS:</Strong> Création de mises en page responsives et
            esthétiques.
          </li>
        </ul>

        <H3>🔨🤝🧠 Compétences transverses</H3>
        <ul>
          <li>
            <Strong>Gestion du stress:</Strong> Acquise lors de mon expérience
            en tant que chef de partie en cuisine.
          </li>
          <li>
            <Strong>Rigueur:</Strong> Développée lors de mes années
            d&apos;expérience en tant que cuisinier.
          </li>
          <li>
            <Strong>Travail d&apos;équipe:</Strong> Expérience dans des projets
            collaboratifs, notamment en utilisant la méthode Scrum.
          </li>
          <li>
            <Strong>Capacité d&apos;analyse:</Strong> Développée tout au long de
            ma formation en développement web.
          </li>
        </ul>

        <H3>⚒️ Outils de développement</H3>
        <ul>
          <li>
            <Strong>Git:</Strong> Utilisation avancée de Git pour la gestion de
            versions et la collaboration efficace au sein d&apos;équipes de
            développement.
          </li>
        </ul>

        <H3>🐳 Déploiement et intégration continue</H3>
        <ul>
          <li>
            <Strong>Docker:</Strong> Conteneurisation d&apos;applications pour
            une portabilité et une gestion des dépendances optimales.
          </li>
        </ul>

        <H3>🔄🔄 Méthodologies de développement</H3>
        <ul>
          <li>
            <Strong>Scrum et Agile:</Strong> Participation à des équipes Scrum
            avec une orientation Agile, favorisant la communication transparente
            et le développement itératif.
          </li>
        </ul>

        <H3>🌐🔒 Autres compétences</H3>
        <ul>
          <li>
            <Strong>WebSockets et RESTful API:</Strong> Mise en œuvre de
            communications en temps réel avec WebSockets et création d&apos;API
            RESTful robustes.
          </li>
          <li>
            <Strong>Sécurité web:</Strong> Connaissance des meilleures pratiques
            de sécurité web, y compris la protection contre les attaques XSS et
            CSRF.
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
