import "../styles/globals.css"
import { useEffect } from "react"
import "aos/dist/aos.css"
import AOS from "aos"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import NextNProgress from "nextjs-progressbar"
import SEO from "../next-seo.config"
import { DefaultSeo } from "next-seo"
import { blue } from "tailwindcss/colors"

library.add(fab, fas)

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
      <DefaultSeo {...SEO} />
      <NextNProgress color={blue[500]} height={4} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
