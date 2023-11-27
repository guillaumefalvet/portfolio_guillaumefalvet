import Link from 'next/link'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className=" flex flex-col">
      <div className="flex justify-center gap-2 py-3 text-4xl text-white">
        <Link target="_blank" href="https://github.com/guillaumefalvet">
          <AiFillGithub />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/guillaumefalvet/"
        >
          <AiFillLinkedin />
        </Link>
        <Link target="_blank" href="https://twitter.com/pressfguillaume">
          <AiFillTwitterSquare />
        </Link>
      </div>
      <span className=" text-center">Made with ❤️ by myself</span>
      <span className="text-center italic">
        <a
          href="https://github.com/guillaumefalvet/portfolio_guillaumefalvet"
          target="_blank"
        >
          source code here
        </a>
      </span>
    </footer>
  )
}
