import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "../Register";
import EditAdress from "../EditAdress";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Register />}></Route>
                <Route path="/cadastro" element={< Register />}></Route>
                <Route path="/editar" element={< EditAdress />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas; 