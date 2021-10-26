import "../styles/globals.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

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

  return <Component {...pageProps} />;
}

export default MyApp;
