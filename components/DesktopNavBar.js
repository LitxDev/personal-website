import Link from "next/link"
import Image from "next/image"
import logo from "../public/assets/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function DesktopNavBar() {
  return (
    <nav
      data-aos="fade-in-down"
      className="grid grid-cols-3 grid-rows-1 z-20 place-items-center text-center font-bold font-roboto text-foreground-100 p-2"
    >
      <Link href="/">
        <a className="grid self-center md:w-12 lg:w-12 xl:w-16 2xl:w-24">
          <Image src={logo} alt="LXD" />
        </a>
      </Link>
      <ul className="flex md:text-2xl md:space-x-6 lg:space-x-10 lg:text-3xl xl:space-x-14 xl:text-4xl 2xl:text-space-x-18 2xl:text-5xl">
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

      <ul className="flex md:text-2xl md:space-x-6 lg:space-x-10 lg:text-3xl xl:space-x-14 xl:text-4xl 2xl:space-x-18 2xl:text-5xl">
        <li>
          <Link href="https://github.com/LitxDev" passHref>
            <a target="_blank" rel="noopener" aria-label="github">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="cursor-pointer hover:text-accent-500 transition-colors duration-200 ease-in-out"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://litxdev.itch.io" passHref>
            <a target="_blank" rel="noopener" aria-label="itch-io">
              <FontAwesomeIcon
                icon={["fab", "itch-io"]}
                className="cursor-pointer hover:text-accent-500 transition-colors duration-200 ease-in-out"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/LitxDev" passHref>
            <a target="_blank" rel="noopener" aria-label="twitter">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="cursor-pointer hover:text-accent-500 transition-colors duration-200 ease-in-out"
              />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
