import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
export default function Footer() {
  return (
    <div className="text-4xl flex justify-center gap-2 py-3 text-gray-600">
      <AiFillGithub />
      <AiFillLinkedin />
      <AiFillTwitterSquare />
    </div>
  );
}
