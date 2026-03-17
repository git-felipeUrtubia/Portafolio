import { NavBar } from "../general/NavBar"
import { Footer } from "../general/Footer"
import { Outlet } from "react-router-dom"


export const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}