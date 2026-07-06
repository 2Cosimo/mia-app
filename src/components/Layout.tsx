
import react from "react"; 
import { Outlet } from "react-router-dom"; 
import Header from "./Header"; 
import Footer from "./Footer"; 
import Sidebar from "./Sidebar"; 

type LayoutProps = { 
    appName: string; 
    userName: string; 
    setUserName: (name: string) => void;
};

export default function layout ({appName, userName, setUserName}: LayoutProps) { 

    return(
        <div className="app-shell"> 
            <Header appName={appName} userName={userName} setUserName={setUserName} /> 

            <div className="app-body">
                <Sidebar /> 
                <main className="app-main"> 
                    <Outlet />
                </main> 
            </div> 

           <Footer /> 
        </div>
    ); 
}

// In sintesi, questo codice definisce il componente Layout che rappresenta la struttura della pagina dell'applicazione. 
// Il componente Layout riceve le proprietà appName, userName e setUserName e le passa al componente Header. 
// Il componente Outlet viene utilizzato per renderizzare le rotte figlie all'interno del contenitore principale della pagina. 
// Il componente Sidebar e il componente Footer vengono renderizzati all'interno del contenitore app-body.