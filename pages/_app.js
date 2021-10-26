import "../styles/globals.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import NextNProgress from "nextjs-progressbar";
import { blue } from "tailwindcss/colors";
import { isMobile } from "../hooks/useDeviceDetect";
import Mobile from "./mobile";

library.add(fab);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 0,
      duration: 400,
    });
  }, []);

  return (
    <>
      <NextNProgress color={blue[500]} height={4} />
      {isMobile ? <Mobile /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
