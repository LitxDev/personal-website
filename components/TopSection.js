import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import logo from "../public/assets/logo.svg"

export default function TopSection() {
  return (
    <nav
      data-aos="fade-in-down"
      className="grid grid-cols-3 grid-rows-1 place-items-center text-center font-bold font-roboto text-foreground-100 p-2"
    >
      <Link href="/">
        <a className="grid self-center w-12 lg:w-12 xl:w-16 2xl:w-24">
          <Image src={logo} alt="LXD" />
        </a>
      </Link>
    </nav>
  )
}
