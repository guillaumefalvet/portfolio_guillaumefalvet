import Link from 'next/link';
import JsonData from '../data/Projects.json';

export default function Projects() {
  return (
    <>
      <h3 className="text-4xl py-2 text-beige-react text-mint-cream text-center font-medium">
        Projects
      </h3>
      <div className="flex flex-wrap justify-center p-10 py-10">
        {JsonData.map((project) => {
          return (
            <div
              key={project.name}
              className="m-2 w-96 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 bg-van-dyke bg-opacity-50 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(82,_178,_207,_0.7)]"
            >
              <div>
                <Link
                  href={project.github || project.link_frontend || ''}
                  target="_blank"
                >
                  <img
                    className="rounded-t-3xl w-full h-52"
                    src={`./${project.link_image}`}
                    alt={`preview of ${project.name} website`}
                  />
                </Link>
                <div className="p-5">
                  <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {project.name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="text-left mt-5">
                    {(() => {
                      if (project.group_project) {
                        return <div>Projet de groupe</div>;
                      } else {
                        return <div>Projet solo</div>;
                      }
                    })()}
                    {project.group_project && (
                      <>
                        <p>Mon Rôle: {project.my_role}</p>
                        <ul>
                          {project.other_members.map((member) => (
                            <li key={member.first_name}>
                              <p>
                                {member.role}:{' '}
                                <a href={member.link} target="blank">
                                  {member.first_name} {member.last_name}
                                </a>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 mt-5">
                <div>
                  <p className=" text-center">Liste des technologies: </p>
                  {project.technologie_used.map((language) => (
                    <div
                      key={language.label}
                      className="inline-block group p-2 mx-auto"
                    >
                      <img
                        key={language.label}
                        className="h-10 ml-1 mr-1"
                        src={`./${language.file_name}`}
                        alt={language.label}
                      />
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800  text-gray-100 absolute opacity-0 text-xl">
                        {language.label}
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
                        link
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
                        docs api
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
                        code
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
                        code api
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
                        code
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
