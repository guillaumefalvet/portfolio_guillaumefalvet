import Link from 'next/link'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
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
    </footer>
  )
}

export default Footer
