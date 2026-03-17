import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { SobreMi } from "../pages/SobreMi";
import { MainLayout } from "../layouts/MainLayout";



export const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>

                    <Route path="/" element={<Navigate to="/inicio" replace />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/sobre-mi" element={<SobreMi />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 