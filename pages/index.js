import TopSection from "../components/TopSection";
import Link from "next/link";
import Mobile from "./mobile";
import useDeviceDetect from "../hooks/useDeviceDetect";

export default function Home() {
  const { isMobile } = useDeviceDetect();
  return isMobile ? (
    <Mobile />
  ) : (
    <div>
      <TopSection />
      <div
        data-aos="fade-in"
        className="flex flex-col items-center text-center mt-96 text-foreground-100 space-y-10"
      >
        <p className="text-5xl leading-tight">
          I&apos;m a young web developer and indie game developer <br /> I
          mostly use{" "}
          <Link href="https://godotengine.org/" passHref>
            <a className="underline text-accent-500">Godot</a>
          </Link>{" "}
          for games <br /> and I like open-source and the Linux community.
        </p>
        <Link href="/about">
          <a className="bg-accent-500 rounded-full shadow uppercase p-2 text-2xl hover:bg-accent-400 hover:shadow-xl transition-colors transition-shadow duration-200 ease-in-out">
            Learn more
          </a>
        </Link>
      </div>
    </div>
  );
}
