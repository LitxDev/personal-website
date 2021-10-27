import TopSection from "../components/TopSection";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function AboutMe() {
  return (
    <>
      <NextSeo
        title="LitxDev | About"
        description="The about me page where you get to know me"
      />
      <TopSection />
      <div
        data-aos="fade-in"
        className="flex flex-col items-center text-center mt-96 text-foreground-100"
      >
        <p className="text-5xl leading-tight">
          I&apos;m a web developer and an indie game developer <br /> I use{" "}
          <Link href="https://godotengine.org/" passHref>
            <a className="underline text-accent-500">Godot</a>
          </Link>{" "}
          as my game engine
          <br />I like open-source and the Linux community <br /> one of my
          favorite programming languages is{" "}
          <Link href="https://rust-lang.org/" passHref>
            <a className="underline text-accent-500">Rust</a>
          </Link>{" "}
          <br />I like computers in general and exploring new things.
        </p>
      </div>
    </>
  );
}
