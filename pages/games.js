import TopSection from "../components/TopSection";
import Head from "next/head";

export default function Games() {
  return (
    <div>
      <Head>
        <title>LitxDev | Games</title>
        <meta
          name="description"
          content="The games page where i add all my games"
        ></meta>
      </Head>
      <TopSection />
      <div
        data-aos="fade-in"
        className="flex flex-col items-center text-center mt-96 text-foreground-100"
      >
        <p className="text-6xl leading-tight">No games yet</p>
      </div>
    </div>
  );
}
