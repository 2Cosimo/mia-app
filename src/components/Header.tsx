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
