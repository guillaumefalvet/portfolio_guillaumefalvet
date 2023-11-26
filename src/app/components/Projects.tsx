import Link from 'next/link'
import Image from 'next/image'
import { projects, ProjectType, TechnologyType } from '@components/ProjectsData'
import Button from './ui/Button'
import { twClsxMerge } from '@lib/utils'
import { motion } from 'framer-motion'
import H3 from './ui/H3'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.01 * index,
    },
  }),
}
export default function Projects() {
  return (
    <div className="my-8 sm:mx-12">
      <H3 id="projects">Réalisations</H3>
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
              className={twClsxMerge(
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
                  <div className="flex flex-row items-center justify-center gap-2">
                    {project.technologie_used.map(
                      (technology: TechnologyType) => (
                        <Image
                          key={technology.label}
                          className=""
                          height={35}
                          width={35}
                          src={technology.image}
                          alt={technology.label}
                        />
                      )
                    )}
                  </div>
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
