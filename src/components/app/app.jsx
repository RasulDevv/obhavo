import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/mainLayout";
import HomePage from "../../pages/home";
import NotFoundPage from "../../pages/not-found";
import ContentPage from "../../pages/content";
import "./app.css";


const App = () => {
    return (
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/:slug" element={<ContentPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
           </Routes>
        </BrowserRouter>
    )
}

export default App
