import "../styles/globals.css"
import { useEffect } from "react"
import "aos/dist/aos.css"
import AOS from "aos"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import NextNProgress from "nextjs-progressbar"
import SEO from "../next-seo.config"
import { DefaultSeo } from "next-seo"
import { blue } from "tailwindcss/colors"

library.add(fab)

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 0,
      duration: 400,
    })
  }, [])

  return (
    <>
      {/* <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      /> */}

      <DefaultSeo {...SEO} />
      <NextNProgress color={blue[500]} height={4} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
