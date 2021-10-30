import Link from "next/link"
import Image from "next/image"
import logo from "../public/assets/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function MobileNavBar() {
  const [icon, setIcon] = useState(["fas", "bars"])
  const [visibility, setVisibility] = useState("hidden")
  const [toggle, setToggle] = useState(false)
  const onClick = (e) => {
    e.preventDefault()

    setToggle(!toggle)

    if (toggle === false) {
      setVisibility("hidden")
      setIcon(["fas", "bars"])
    } else {
      setVisibility("flex")
      setIcon(["fas", "times"])
    }
  }
  return (
    <nav
      data-aos="fade-in-down"
      className="grid grid-cols-1 grid-rows-1 bg-background-800 p-2 space-y-8 xs:space-y-6 place-items-center text-center font-bold font-roboto text-foreground-100"
    >
      <ul className="flex flex-row space-x-64 items-center place-items-center xs:space-x-56 text-xl">
        <li>
          <Link href="/">
            <a className="flex w-10">
              <Image src={logo} alt="LXD" />
            </a>
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={icon} onClick={onClick} />
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
