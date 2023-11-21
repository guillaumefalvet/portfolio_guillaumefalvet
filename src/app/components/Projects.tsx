import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { projects } from '@components/ProjectsData'
import Button from './ui/Button'
import { cn } from '@lib/utils'
import { motion } from 'framer-motion'
import { fadeInAnimationVariants } from './Timeline'
type ProjectType = {
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

type TechnologyType = {
  label: string
  image: StaticImageData
}

export default function Projects() {
  return (
    <div className="my-8 sm:mx-12">
      <h3
        id="projects"
        className="py-10 text-center text-4xl font-medium text-mainColor"
      >
        Réalisations
      </h3>
      <div className="flex w-full flex-wrap items-center justify-center gap-6 ">
        {projects.map((project: ProjectType, index) => {
          return (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileInView="animate"
              viewport={{ once: true }}
              key={project.name}
              custom={index}
              className={cn(
                'flex h-[920px] w-96 flex-col justify-between rounded-xl bg-stone-600 p-2 shadow-sm',
                'hover:shadow-2xl hover:shadow-light'
              )}
            >
              <div>
                <Link
                  href={project.github || project.link_frontend || ''}
                  target="_blank"
                >
                  <Image
                    className="h-52 w-full rounded-xl object-cover"
                    width={500}
                    height={500}
                    src={project.link_image}
                    alt={`preview of ${project.name} website`}
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-light">
                      {project.name}
                    </h5>
                  </Link>
                  <p className="text-justify font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div>
                  <div className="mt-5 text-left">
                    {project.group_project ? (
                      <p>Projet de groupe</p>
                    ) : (
                      <p>Projet solo</p>
                    )}
                  </div>
                  {project.technologie_used.length === 1 ? (
                    <p className="text-center">La technologie utilisée: </p>
                  ) : (
                    <p className="text-center">Les technologies utilisées: </p>
                  )}
                  {project.technologie_used.map(
                    (technology: TechnologyType) => (
                      <div
                        key={technology.label}
                        className="mx-auto inline-block"
                      >
                        <Image
                          key={technology.label}
                          className="ml-1 mr-1 h-10"
                          height={35}
                          width={35}
                          src={technology.image}
                          alt={technology.label}
                        />
                      </div>
                    )
                  )}
                </div>
                <div className="mx-auto mt-5 text-center">
                  {project.link_frontend && (
                    <Button url={project.link_frontend}>Front</Button>
                  )}
                  {project.link_backend && (
                    <Button url={project.link_backend}>OPEN API DOCS</Button>
                  )}
                  {project.github_front && (
                    <Button url={project.github_front}>Github Front</Button>
                  )}
                  {project.github_back && (
                    <Button url={project.github_back}>Github Back</Button>
                  )}
                  {project.github && <Button url={project.github}>Code</Button>}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
