import Link from 'next/link';
import Image from 'next/image';
import JsonData from '../data/Projects.json';
interface Project {
  name: string;
  my_role: string;
  description: string;
  group_project: boolean;
  other_members: Member[];
  technologie_used: Technology[];
  link_image: string;
  link_frontend?: string;
  link_backend?: string;
  github_front?: string;
  github_back?: string;
  github?: string;
}

interface Member {
  first_name: string;
  last_name: string;
  role: string;
  link: string;
}

interface Technology {
  label: string;
  file_name: string;
}
export default function Projects() {
  return (
    <>
      <h3 className="text-4xl py-2 text-beige-react text-mint-cream text-center font-medium">
        Projets
      </h3>
      <div className="flex flex-wrap justify-center p-10 py-10">
        {JsonData.map((project: Project) => {
          return (
            <div
              key={project.name}
              className="m-2 w-96 xl:[width:35%] rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 bg-van-dyke bg-opacity-50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(82,_178,_207,_0.7)]"
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
                    src={`/${project.link_image}`}
                    alt={`preview of ${project.name} website`}
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {project.name}
                    </h5>
                  </Link>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
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
                        return <p>Projet fait seule</p>;
                      }
                    })()}
                    {project.group_project && (
                      <>
                        <p>Moi: {project.my_role}</p>
                        <ul>
                          {project.other_members.map((member: Member) => (
                            <li key={member.first_name}>
                              <p>
                                {member.role}:{' '}
                                <Link href={member.link} target="blank">
                                  {member.first_name} {member.last_name}
                                </Link>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  <p className=" text-center">Liste des technologies: </p>
                  {project.technologie_used.map((technology: Technology) => (
                    <div
                      key={technology.label}
                      className="inline-block group p-2 mx-auto"
                    >
                      <Image
                        key={technology.label}
                        className="h-10 ml-1 mr-1"
                        height={45}
                        width={45}
                        src={`./${technology.file_name}`}
                        alt={technology.label}
                      />
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-gray-100 absolute opacity-0 text-xl">
                        {technology.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 mx-auto text-center">
                  <p className=" text-center">Liens </p>
                  {project.link_frontend ? (
                    <a href={project.link_frontend} target="blank">
                      <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 text-white focus:outline-none bg-feldgrau rounded-full border border-gray-200 hover:bg-moonstone hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Lien
                      </button>
                    </a>
                  ) : (
                    ''
                  )}
                  {project.link_backend ? (
                    <a href={project.link_backend} target="blank">
                      <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 text-white focus:outline-none bg-feldgrau rounded-full border border-gray-200 hover:bg-moonstone hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Docs API
                      </button>
                    </a>
                  ) : (
                    ''
                  )}
                  {project.github_front ? (
                    <a href={project.github_front} target="blank">
                      <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 text-white focus:outline-none bg-feldgrau rounded-full border border-gray-200 hover:bg-moonstone hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Code
                      </button>
                    </a>
                  ) : (
                    ''
                  )}
                  {project.github_back ? (
                    <a href={project.github_back} target="blank">
                      <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 text-white focus:outline-none bg-feldgrau rounded-full border border-gray-200 hover:bg-moonstone hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Code API
                      </button>
                    </a>
                  ) : (
                    ''
                  )}
                  {project.github ? (
                    <a href={project.github} target="blank">
                      <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 text-white focus:outline-none bg-feldgrau rounded-full border border-gray-200 hover:bg-moonstone hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Code
                      </button>
                    </a>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
