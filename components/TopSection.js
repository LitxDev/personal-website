import Link from "next/link"
import Image from "next/image"
import logo from "../public/assets/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"

export default function TopSection() {
  const [icon, setIcon] = useState(["fas", "bars"])
  const [visibility, setVisibility] = useState("hidden")
  const [toggle, setToggle] = useState(false)
  const [backgroundOpacity, setBackgroundOpacity] = useState("bg-opacity-0")

  const onClick = () => {
    setToggle(!toggle)

    if (toggle === false) {
      setVisibility("hidden")
      setIcon(["fas", "bars"])
      setBackgroundOpacity("bg-opacity-0")
    } else {
      setVisibility("flex")
      setIcon(["fas", "times"])
      setBackgroundOpacity("bg-opacity-100")
    }
  }

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })
  if (isDesktop) {
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
  } else {
    return (
      <nav
        data-aos="fade-in-down"
        className={`grid grid-cols-1 grid-rows-1 bg-background-800 p-2 space-y-8 xs:space-y-6 place-items-center text-center font-bold font-roboto text-foreground-100`}
      >
        <ul className="flex space-x-64 xs:space-x-56">
          <li>
            <Link href="/">
              <a className="block w-10">
                <Image src={logo} alt="LXD" />
              </a>
            </Link>
          </li>
          <li>
            <button onClick={onClick}>
              <FontAwesomeIcon icon={icon} className="w-10 h-10" />
            </button>
          </li>
        </ul>

        <ul className={`${visibility} flex-col space-y-6 text-2xl xs:space-y-4 xs:text-xl`}>
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

        <ul className={`${visibility} flex-row space-x-8 text-2xl xs:space-x-6 xs:text-xl`}>
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
}
