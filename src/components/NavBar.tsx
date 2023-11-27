import { twClsxMerge } from '@lib/utils'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <nav className="mx-auto mb-12 flex justify-between py-2 text-white md:w-3/4">
      <h1 className="font-samantha text-5xl  sm:text-7xl">Falvet Guillaume</h1>

      {/* Mobile burger icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=" right-4 top-4
           text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <ul
        className={twClsxMerge(
          'items-center gap-4 md:flex',
          menuOpen ? 'absolute right-2 top-12 flex flex-col' : 'hidden'
        )}
      >
        <li>
          <Link
            target="_blank"
            href="https://github.com/guillaumefalvet"
            className="text-2xl"
          >
            <AiFillGithub />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className="text-2xl"
            href="https://www.linkedin.com/in/guillaumefalvet/"
          >
            <AiFillLinkedin />
          </Link>
        </li>
        <li>
          <Link
            className="text-xl text-mainColor"
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            PROJETS
          </Link>
        </li>
        <li>
          <Link className="text-xl" href="./cv_falvet_guillaume.pdf">
            CV
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
