import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopSection() {
  return (
    <nav
      data-aos="fade-in-down"
      className="grid grid-cols-3 font-bold grid-rows-1 justify-items-center text-center text-foreground-100 mt-4"
    >
      <Image src={logo} alt="LXD" width={64} height={64} />

      <ul className="flex space-x-14 text-4xl">
        <li>
          <Link href="/">
            <a className="uppercase hover:text-accent-500 transition-colors duration-200 ease-in-out">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/games">
            <a className="uppercase hover:text-accent-500 transition-colors duration-200 ease-in-out">
              Games
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="uppercase hover:text-accent-500 transition-colors duration-200 ease-in-out">
              About
            </a>
          </Link>
        </li>
      </ul>

      <ul className="flex space-x-14 text-4xl">
        <li>
          <Link href="https://github.com/LitxDev" passHref>
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="cursor-pointer hover:text-accent-500 transition-colors duration-200 ease-in-out"
            />
          </Link>
        </li>
        <li>
          <Link href="https://litxdev.itch.io" passHref>
            <FontAwesomeIcon
              icon={["fab", "itch-io"]}
              className="cursor-pointer hover:text-accent-500 transition-colors duration-200 ease-in-out"
            />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/LitxDev" passHref>
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="cursor-pointer hover:text-accent-500 transition-colors duration-200 ease-in-out"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
