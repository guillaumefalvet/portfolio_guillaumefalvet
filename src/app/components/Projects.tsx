import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { projects } from '@components/ProjectsData'
import Button from './ui/Button'
import { cn } from '@lib/utils'
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
    <div className="my-8">
      <h3
        id="projects"
        className="text-accents py-2 text-center text-4xl font-medium"
      >
        Projets
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {projects.map((project: ProjectType) => {
          return (
            <div
              key={project.name}
              className={cn(
                'bg-main m-2 flex min-w-fit flex-col justify-between rounded-3xl shadow-xl',
                'hover:shadow-orange'
              )}
            >
              <div>
                <Link
                  href={project.github || project.link_frontend || ''}
                  target="_blank"
                >
                  <Image
                    className="h-52 w-full rounded-t-3xl object-cover"
                    width={500}
                    height={500}
                    src={project.link_image}
                    alt={`preview of ${project.name} website`}
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">
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
                  <p className=" text-center">Liste des technologies: </p>
                  {project.technologie_used.map(
                    (technology: TechnologyType) => (
                      <div
                        key={technology.label}
                        className="group mx-auto inline-block p-2"
                      >
                        <Image
                          key={technology.label}
                          className="ml-1 mr-1 h-10"
                          height={45}
                          width={45}
                          src={technology.image}
                          alt={technology.label}
                        />
                        <span className="absolute bg-gray-800 text-xl  text-gray-100 opacity-0 transition-opacity group-hover:opacity-100">
                          {technology.label}
                        </span>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
