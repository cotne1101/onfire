import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
type SocialIconsProps = {};

export default function SocialIcons({}: SocialIconsProps) {
  return (
    <div className="flex items-center gap-3 text-4xl">
      <Link target="_blank" href="https://www.facebook.com/">
        <FaFacebook />
      </Link>
      <Link target="_blank" href="mailto:">
        <MdEmail />
      </Link>
      <Link target="_blank" href="https://www.facebook.com/github.com">
        <FaGithub />
      </Link>
    </div>
  );
}
