export interface TimelineDataType {
  name: string
  startingTime: string
  description: string
  descriptionList?: string[] | undefined // Optional property
}
// TODO: ADD A DURATION FIELD
export const timelineData: TimelineDataType[] = [
  {
    name: "Titre Professionnel de Développeur Web et Web Mobile, École O'clock",
    startingTime: '2023',
    description: `De Janvier 2023 à Juin 2023`,
    descriptionList: [
      '-> 798 heures intensives',
      '-> 3 mois de Socle: HTML/CSS/JavaScript/Express/PSQL',
      '-> 1 mois de Spécialisation: Backend',
      `-> 1 mois de project: Esport Team`,
    ],
  },
  {
    name: 'Cuisinier: Chef de partie froid',
    startingTime: '2020',
    description: `Poste en tant que chef de partie. Respect des règles d'hygiène, Gestion du stress, communication, travail d'équipe et respect de la hiérarchie`,
  },
  {
    name: 'Responsable Rayon Fruits Legumes SuperU',
    startingTime: '2016',
    description: `Responsable du rayon des fruits et légumes dans un supermarché est chargé de superviser l'approvisionnement, la présentation, et la qualité des produits, tout en assurant une gestion efficace du rayon pour garantir la satisfaction des clients.`,
  },
  {
    name: 'Charpentier Menuisier',
    startingTime: '2013',
    description: `De la réalisation des plans, la fabrication jusqu'au montage des structures bois.`,
  },
  {
    name: 'Bac PRO Technicien Constructeur Bois',
    startingTime: '2013',
    description: `De la créations de structures, d'ossatures et de charpentes en bois. A partir de documents techniques et concepts, travaille en amont dans un atelier, pour préparer la construction de l'ouvrage en respectant les normes liées à la construction bois.`,
  },
  {
    name: 'BEP Technicien Constructeur Bois',
    startingTime: '2010',
    description: '',
  },
]
