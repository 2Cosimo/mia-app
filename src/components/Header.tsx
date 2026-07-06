type HeaderProps = { 
    appName: string; 
    userName: string; 
    setUserName: (name: string) => void; 
};
export default function Header({ appName, userName, setUserName}: HeaderProps) { 
    
    const handleLogout = () => {
        setUserName(""); 
    }
    return ( 
        <header className="app-header">
            <div className="app-title">{appName}</div> 
            <div className="user-badge"> 
                {userName ? ( 
                
                <> 
                        <span>Benvenuto, {userName}</span> 
                        <button className="logout-button" onClick={handleLogout}> 
                            Logout
                        </button>
                </> 
                ) : ( 
                    <span>Benvenuto, ospite</span>
                )}
            </div> 
        </header> 
    ); 
} 

// In sintesi, questo codice definisce il componente Header che rappresenta l'intestazione della pagina dell'applicazione.
// Il componente Header riceve le proprietà appName, userName e setUserName e le utilizza per visualizzare il nome dell'applicazione e il badge dell'utente. 
// Se l'utente è registrato, viene visualizzato il nome dell'utente e un pulsante di logout che resetta il nome dell'utente a una stringa vuota. 
// Se l'utente non è registrato, viene visualizzato un messaggio di benvenuto generico.