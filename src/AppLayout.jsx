import { useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Nav } from "./Components/NavBar/Nav.jsx";
import { Footer } from "./Components/FooterBar/Footer.jsx";
import { Loading } from "./Components/Loading/Loading.jsx";
export function AppLayout() {

  let navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}