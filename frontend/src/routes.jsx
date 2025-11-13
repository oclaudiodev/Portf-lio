import { BrowserRouter,Routes,Route } from "react-router";
import Principal from "./pages/principal";import Adm from "./pages/adm";
import Inicio from "./pages/inicio";
import {ToastContainer} from 'react-toastify'


 export default function Navegar(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Principal/>}/>
                <Route path="/adm" element ={<Adm/>}/>
                <Route path="/inicio" element ={<Inicio/>}/>
            </Routes>
            <ToastContainer
            position="top-right"
            autoClose={2100}
            themes ="colored"
            />
        </BrowserRouter>
    )
 }

