interface PropChildren {
  children: string;
  url: string;
}

export default function Button(props: PropChildren) {
  return (
    <a href={props.url} target="blank">
      <button
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 text-white focus:outline-none bg-feldgrau rounded-full border border-gray-200 hover:bg-moonstone hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {props.children}
      </button>
    </a>
  );
}
