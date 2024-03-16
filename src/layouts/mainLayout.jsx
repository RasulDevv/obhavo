import { Outlet } from "react-router"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import NavbarOfCities from "../components/navbarOfCities/navbar"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <NavbarOfCities />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
