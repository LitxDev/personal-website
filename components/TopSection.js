import DesktopNavBar from "./DesktopNavBar"
import MobileNavBar from "./MobileNavBar"
import useMediaQuery from "../hooks/useMediaQuery"

export default function TopSection() {
  const isMobile = useMediaQuery("(max-width: 640px)")
  if (isMobile == true) {
    return <MobileNavBar />
  } else {
    return <DesktopNavBar />
  }
}
