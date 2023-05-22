import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

export default function router() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Layout/>} > 
                    <Route index element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}