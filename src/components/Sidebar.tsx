import {NavLink} from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar"> 
            <nav className="sidebar-nav"> 
                <NavLink to="/home" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink> 
                
                <NavLink to="/registration" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>Registrazione</NavLink> 
                
                <NavLink to="/products" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>Prodotti</NavLink>
                
                </nav> 
        </aside> 
    ); 
} 

// In sintesi, questo codice definisce il componente Sidebar che rappresenta la barra laterale dell'applicazione. 
// Il componente Sidebar utilizza il componente NavLink di React Router 
// per creare i link di navigazione per le pagine Home, Registrazione e Prodotti. 
// La classe active viene applicata al link attivo per evidenziare la pagina corrente.

