import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { projects } from '@components/ProjectsData';
import Button from './Button';
type ProjectType = {
  name: string;
  my_role?: string;
  description: string;
  group_project: boolean;
  technologie_used: TechnologyType[];
  link_image: StaticImageData;
  link_frontend?: string;
  link_backend?: string;
  github_front?: string;
  github_back?: string;
  github?: string;
};

type TechnologyType = {
  label: string;
  image: StaticImageData;
};
export default function Projects() {
  return (
    <>
      <h3 className="text-4xl py-2 text-center font-medium">Projets</h3>
      <div className="flex flex-wrap justify-center p-10 py-10">
        {projects.map((project: ProjectType) => {
          return (
            <div
              key={project.name}
              className="m-2 w-96 xl:[width:35%] rounded-3xl shadow bg-van-dyke bg-opacity-50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(82,_178,_207,_0.7)]"
            >
              <div>
                <Link
                  href={project.github || project.link_frontend || ''}
                  target="_blank"
                >
                  <Image
                    className="rounded-t-3xl w-full h-52 object-cover"
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
                  <p className="font-normal text-justify">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div>
                  <div className="text-left mt-5">
                    {(() => {
                      if (project.group_project) {
                        return <p>Projet de groupe:</p>;
                      } else {
                        return <p>Projet solo</p>;
                      }
                    })()}
                  </div>
                  <p className=" text-center">Liste des technologies: </p>
                  {project.technologie_used.map(
                    (technology: TechnologyType) => (
                      <div
                        key={technology.label}
                        className="inline-block group p-2 mx-auto"
                      >
                        <Image
                          key={technology.label}
                          className="h-10 ml-1 mr-1"
                          height={45}
                          width={45}
                          src={technology.image}
                          alt={technology.label}
                        />
                        <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-gray-100 absolute opacity-0 text-xl">
                          {technology.label}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-5 mx-auto text-center">
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
          );
        })}
      </div>
    </>
  );
}
