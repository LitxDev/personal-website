import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function TopSection() {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/6d4f5c8ba9.js"
        crossOrigin="anonymous"
      ></Script>

      <nav className="grid grid-cols-3 grid-rows-1 justify-items-center text-center text-foreground-100 mt-2">
        <h1 className="text-4xl">LitxDev</h1>

        <ul className="flex space-x-14 text-4xl">
          <li>
            <Link href="/">
              <a className="uppercase hover:text-accent-400">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/games">
              <a className="uppercase hover:text-accent-400">Games</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="uppercase hover:text-accent-400">About</a>
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-14 text-4xl">
          <Link href="https://github.com/LitxDev" passHref>
            <i className="fab fa-github cursor-pointer"></i>
          </Link>
          <Link href="https://github.com/LitxDev" passHref>
            <i className="fab fa-itch-io cursor-pointer"></i>
          </Link>
          <Link href="https://github.com/LitxDev" passHref>
            <i className="fas fa-envelope cursor-pointer"></i>
          </Link>
        </ul>
      </nav>
    </>
  );
}
