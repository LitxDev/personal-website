import { useMediaQuery } from "react-responsive"
import DesktopNavBar from "./DesktopNavBar"
import MobileNavBar from "./MobileNavBar"

export default function TopSection() {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  })
  if (isMobile == true) {
    return <MobileNavBar />
  } else {
    return <DesktopNavBar />
  }
}
