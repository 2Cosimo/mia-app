import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import { RegistrationPage } from "./pages/RegistrationPage";
import ProductsPage from "./pages/ProductsPage";
import "./App.css";

export default function App() { 
  const [userName, setUserName] = useState(""); 

  return (
    <BrowserRouter>
      <Header appName="La mia App" userName={userName} setUserName={setUserName} />

      <div className="app-body">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationPage onRegister={setUserName} />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  );
}


// In sintesi, questo codice definisce il componente principale dell'applicazione, 
// che utilizza React Router per gestire le rotte e il layout dell'applicazione. 
// Il componente Layout viene utilizzato come elemento principale per tutte le rotte, 
// e lo stato userName viene gestito tramite il hook useState.