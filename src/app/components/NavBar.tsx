import Link from 'next/link';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
export default function NavBar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h2 className="font-samantha text-6xl">guillaume-f</h2>
      <ul className="flex items-center">
        <li>
          <Link
            target="_blank"
            href="https://github.com/guillaumefalvet"
            className="text-xl"
          >
            <AiFillGithub />
          </Link>
        </li>
        <li>
          <Link className="bg-cyan-500 px-2 py-2 rounded-md ml-8" href="#">
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
}
