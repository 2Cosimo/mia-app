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

