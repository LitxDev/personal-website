import TopSection from "../components/TopSection"
import Link from "next/link"
import { NextSeo } from "next-seo"

export default function Home() {
  return (
    <>
      <NextSeo title="LitxDev | Home" description="The homepage" />

      <TopSection />
      <div
        data-aos="fade-in"
        className="flex flex-col items-center text-center font-lato mt-96 text-foreground-100 space-y-12"
      >
        <p className="text-1xl leading-tight md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl">
          I&apos;m a young web developer and indie game developer <br /> I mostly use{" "}
          <Link href="https://godotengine.org/" passHref>
            <a className="underline text-accent-500" target="_blank" rel="noopener">
              Godot
            </a>
          </Link>{" "}
          for games <br /> and I like open-source and the Linux community.
        </p>
        <Link href="/about">
          <a className="bg-accent-500 rounded-full shadow uppercase p-2 text-sm hover:bg-accent-400 hover:shadow-xl transition-colors transition-shadow duration-200 ease-in-out md:text-1xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:p-4">
            About me
          </a>
        </Link>
      </div>
    </>
  )
}
