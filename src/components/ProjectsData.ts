// Technologies icon
import nodejsImage from '@assets/nodejs-original.svg'
import nestjsImage from '@assets/nestjs-plain.svg'
import typescriptImage from '@assets/typescript-original.svg'
import postgresqlImage from '@assets/postgresql-original.svg'
import typeormImage from '@assets/typeorm-seeklogo.com.svg'
import dockerImage from '@assets/docker-svgrepo-com.svg'
import reactImage from '@assets/react-original.svg'
import sassImage from '@assets/sass-original.svg'
import nextjsImage from '@assets/nextjs-original.svg'
import expressImage from '@assets/express-original.svg'
import javascriptImage from '@assets/javascript-original.svg'
import eslintImage from '@assets/eslint-original.svg'
import sequelizeImage from '@assets/sequelize-original.svg'
import sortableJSImage from '@assets/sortable.svg'
import viteImage from '@assets/vite.svg'
import pythonImage from '@assets/python-original.svg'
import taskManagementAppImage from '@assets/nestjs.png'
import victoryZoneImage from '@assets/victoryzone.png'
import kanbanImage from '@assets/kanban.png'
import downloadFolderImage from '@assets/logs.png'
import tailwindxssImage from '@assets/tailwindcss-plain.svg'
import placeHolderImage from '@assets/placeholder.png'
import { StaticImageData } from 'next/image'
export type ProjectType = {
  name: string
  my_role?: string
  description: string
  group_project: boolean
  technologie_used: TechnologyType[]
  link_image: StaticImageData
  link_frontend?: string
  link_backend?: string
  github_front?: string
  github_back?: string
  github?: string
}

export type TechnologyType = {
  label: string
  image: StaticImageData
}

export const projects: ProjectType[] = [
  {
    name: 'Frontend: Portfolio',
    description:
      "Mon portfolio propose une présentation de mes compétences, projets et expériences. Grâce à l'utilisation de technologies telles que React et Framer Motion, la navigation est fluide. Le design est amélioré avec Tailwind CSS, assurant à la fois la flexibilité et la cohérence visuelle.",
    group_project: false,
    technologie_used: [
      { label: 'React', image: reactImage },
      { label: 'TypeScript', image: typescriptImage },
      { label: 'TailwindCss', image: tailwindxssImage },
      { label: 'NextJS', image: nextjsImage },
      { label: 'EsLint', image: eslintImage },
    ],
    link_image: placeHolderImage,
    link_frontend: '/',
    github: 'https://github.com/guillaumefalvet/portfolio_guillaumefalvet',
  },
  {
    name: 'Backend: Task Management App List',
    description:
      "Il s'agit d'une application de gestion de tâches simple construite avec NestJS, un framework Node.js. Elle vous permet de gérer et d'organiser efficacement des tâches. La première fonctionnalité de cette application vous permet de créer, lire, mettre à jour et supprimer des tâches en toute simplicité. De plus, elle offre une couche d'authentification et d'autorisation des utilisateurs pour garantir la sécurité des données. Les mots de passe sont hachés de manière sécurisée, et l'application prend en charge l'enregistrement et la connexion des utilisateurs",
    group_project: false,
    technologie_used: [
      { label: 'NodeJS', image: nodejsImage },
      { label: 'NestJS', image: nestjsImage },
      { label: 'TypeScript', image: typescriptImage },
      { label: 'PostgreSQL', image: postgresqlImage },
      { label: 'TypeOrm', image: typeormImage },
      { label: 'Docker', image: dockerImage },
    ],
    link_image: taskManagementAppImage,
    link_backend:
      'https://task-management-app-nestjs-production.up.railway.app/api',
    github: 'https://github.com/guillaumefalvet/task-management-app-nestjs',
  },
  {
    name: 'Fullstack: Esport Team',
    my_role: 'Lead Backend / Git Master',
    description:
      "Application de gestion de contenu pour une équipe Esport fictif, il offre une présentation détaillée d'une équipe d'esport, des actualités, des profils des membres, une fonctionnalité de recrutement et un calendrier des événements. Dashboard admin pour gérer les contenus liés aux articles, à l'équipe, aux joueurs et aux événements.",
    group_project: true,
    technologie_used: [
      { label: 'React', image: reactImage },
      { label: 'TypeScript', image: typescriptImage },
      { label: 'Sass', image: sassImage },
      { label: 'NextJS', image: nextjsImage },
      { label: 'Express', image: expressImage },
      { label: 'JavaScript', image: javascriptImage },
      { label: 'PostgreSQL', image: postgresqlImage },
      { label: 'EsLint', image: eslintImage },
    ],
    link_image: victoryZoneImage,
    link_frontend: 'https://www.victoryzone.team/',
    link_backend:
      'https://esport-website-backend-production.up.railway.app/api-docs/',
    github_front: 'https://github.com/QuentinJoanon/VictoryZone-Front',
    github_back: 'https://github.com/guillaumefalvet/esport-website-backend',
  },
  {
    name: 'Fullstack: Trello-like list',
    description:
      "Durant ma formation j'ai développé une application web en utilisant Express, Cors et Sequelize, basée sur le concept de Trello. Son backend gère les opérations essentielles, tandis que le front-end offre une interface utilisateur statique conviviale. Les utilisateurs peuvent organiser leurs tâches de manière fluide et intuitive, en suivant leur progression à travers des colonnes personnalisables. L'application facilite la gestion et la visualisation des projets grâce à son approche Kanban simplifiée.",
    group_project: false,
    technologie_used: [
      { label: 'NodeJS', image: nodejsImage },
      { label: 'Express', image: expressImage },
      { label: 'JavaScript', image: javascriptImage },
      { label: 'PostgreSQL', image: postgresqlImage },
      { label: 'Sequelize', image: sequelizeImage },
      { label: 'SortableJS', image: sortableJSImage },
      { label: 'Vite', image: viteImage },
    ],
    link_image: kanbanImage,
    link_frontend: 'https://kanban-list-production.up.railway.app/',
    github_front:
      'https://github.com/guillaumefalvet/app-taskmanagement-list-express-vanillajs',
  },
  {
    name: 'Software: Download Folder organizer',
    description:
      "Petit logiciel d'Automatisation pour trier et organiser des dossiers. L'application range les fichiers dans un dossier spécifique selon leur extension",
    group_project: false,
    technologie_used: [{ label: 'Python', image: pythonImage }],
    link_image: downloadFolderImage,
    github:
      'https://github.com/guillaumefalvet/sort_and_organize_download_folder',
  },
]
