export default function HomePage() {
    return (
    <section className="card-home-page"> 
        <div className="home-hero"> 
            <div>
                <h2>Benvenuto nel nostro E-Commerce tech</h2>
                <p>Scopri i nostri prodotti</p>
            </div> 
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" 
                    alt="Tecnologia e dispositivi moderni" 
                    className="home-image" /> 
                    
        </div> 
        <div className="home-grid"> 
            <article className="home-card"> 
                <h3>Esperienza semplice</h3>
                <p>Registrati in pochi secondi e accedi rapidamente ai nostri prodotti.</p>
            </article> 
            <article className="home-card"> 
                <h3>Prodotti aggiornati</h3>
                <p>Trovi sempre novità tecnologiche, accessori e soluzioni smart.</p>
            </article> 
            <article className="home-card">
                <h3>Spedizione veloce</h3>
                <p>Spedizioni in 24h</p>
            </article>
        </div> 

    </section> 
    ); 
} 
