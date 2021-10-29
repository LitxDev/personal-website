import TopSection from "../components/TopSection"
import { NextSeo } from "next-seo"

export default function Games() {
  return (
    <div>
      <NextSeo title="LitxDev | Games" description="The games page where I share all my games" />

      <TopSection />

      <div
        data-aos="fade-in"
        className="flex flex-col items-center text-center mt-96 text-foreground-100"
      >
        <p className="text-6xl leading-tight">No games yet</p>
      </div>
    </div>
  )
}
