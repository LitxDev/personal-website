import TopSection from "../components/TopSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <TopSection />
      <div className="flex flex-col items-center text-center mt-96 text-foreground-100 space-y-10">
        <p className="text-4xl">
          Im a young web developer and indie game developer <br /> I mostly use
          godot for games <br /> and I like open source and the linux community
        </p>
        <Link href="/about">
          <a className="bg-accent-400 rounded-full shadow-xl uppercase p-2 text-2xl">
            Learn more
          </a>
        </Link>
      </div>
    </div>
  );
}
