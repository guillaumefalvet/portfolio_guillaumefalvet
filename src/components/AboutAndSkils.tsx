import H4 from './ui/H4'
import { motion } from 'framer-motion'
import Strong from './ui/Strong'
import H3 from './ui/H3'

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
        <H3>À Propos</H3>

        <H4>🚀 Mon Parcours Professionnel et Ma Passion</H4>
        <p>
          Mon parcours professionnel a évolué de manière diversifiée, mais ma
          passion pour le numérique et le développement a persisté comme une
          constante inspiratrice. Pour moi, le développement n&apos;est pas
          seulement une compétence technique, c&apos;est aussi un moyen
          d&apos;expression.
        </p>

        <H4>💡 Découverte de ma Voie à travers Python et O&apos;Clock</H4>
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

        <H4>🎯 Frontend et Backend</H4>
        <p>
          Durant la formation, j&apos;ai développé un intérêt particulier pour
          les défis liés à la création de backend. Cependant, en tant que
          diplômé Fullstack, j&apos;ai également acquis une solide base en
          frontend, notamment avec ReactJS, que je continue d&apos;approfondir
          de manière autodidacte à travers des projets et des formations en
          ligne.
        </p>

        <H4>🏆 Réussite chez O&apos;Clock</H4>
        <p>
          Avec mon travaille durant ma formation, j&apos;ai obtenu avec succès
          mon titre professionnel de DWWM chez O&apos;Clock, avec les
          encouragements du jury pour la suite de ma carrière. Animé par le
          désir de compléter ma formation par une expérience pratique, je suis
          disponible afin de mettre en application mes connaissances et
          contribuer activement à des projets concrets.
        </p>
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex max-w-4xl flex-col text-justify"
      >
        <H3>Compétences</H3>
        <H4>🚀 Langages de programmation</H4>
        <ul>
          <li>
            <Strong>Javascript:</Strong> Utilisation de Javascript et Typescript
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

        <H4>🗃️ Bases de données</H4>
        <ul>
          <li>
            <Strong>PostgreSQL & MongoDB:</Strong> Utilisation de SGBD
            relationnelles et NoSQL.
          </li>
        </ul>

        <H4>🎨 Technologies web</H4>
        <ul>
          <li>
            <Strong>HTML, CSS:</Strong> Création de mises en page responsives et
            esthétiques.
          </li>
        </ul>

        <H4>🔨🤝🧠 Compétences transverses</H4>
        <ul>
          <li>
            <Strong>Sens des responsablitié: </Strong> Tout au long de mon
            parcours professionnel, j&apos;ai développé un solide sens des
            responsabilités en garantissant le respect des normes, la
            satisfaction des clients, et une gestion efficace des tâches, que ce
            soit en cuisine, en gestion de rayon, ou en tant que
            charpentier-menuisier..
          </li>
          <li>
            <Strong>L&apos;anglais</Strong> Ma compétence en anglais en tant que
            langue maternelle constitue une compétence transverse précieuse qui
            facilite la communication fluide et l&apos;engagement efficace dans
            des projets de développement à l&apos;échelle internationale.
          </li>
          <li>
            <Strong>Travail d&apos;équipe:</Strong> Expérience dans des projets
            collaboratifs, notamment en utilisant la méthode Scrum.
          </li>
        </ul>

        <H4>⚒️ Outils de développement</H4>
        <ul>
          <li>
            <Strong>Git:</Strong> Utilisation avancée de Git pour la gestion de
            versions et la collaboration efficace au sein d&apos;équipes de
            développement.
          </li>
        </ul>

        <H4>🐳 Déploiement et intégration continue</H4>
        <ul>
          <li>
            <Strong>Docker:</Strong> Conteneurisation d&apos;applications pour
            une portabilité et une gestion des dépendances optimales.
          </li>
        </ul>

        <H4>🔄🔄 Méthodologies de développement</H4>
        <ul>
          <li>
            <Strong>Scrum et Agile:</Strong> Participation à des équipes Scrum
            avec une orientation Agile, favorisant la communication transparente
            et le développement itératif.
          </li>
        </ul>

        <H4>🌐🔒 Autres compétences</H4>
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
