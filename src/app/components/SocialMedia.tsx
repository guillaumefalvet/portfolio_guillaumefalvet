import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import Link from 'next/link';
export default function SocialMedia() {
  return (
    <div className="text-4xl flex justify-center gap-2 py-3 text-gray-600">
      <Link target="_blank" href="https://github.com/guillaumefalvet">
        <AiFillGithub />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/guillaumefalvet/">
        <AiFillLinkedin />
      </Link>
      <Link target="_blank" href="https://twitter.com/pressfguillaume">
        <AiFillTwitterSquare />
      </Link>
    </div>
  );
}
