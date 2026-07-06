
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento con id "root" non trovato')
}

createRoot(rootElement).render(

    <App />

);

//creato come prima cosa il main.tsx, che è il punto di ingresso dell'applicazione React. 
// In questo file, importiamo il metodo createRoot da react-dom/client per renderizzare l'applicazione React in modo moderno. 
// Importiamo anche il componente principale App dal file App.tsx. 
// Selezioniamo l'elemento root nel DOM e, se non viene trovato, lanciamo un errore. 
// Infine, creiamo il root e renderizziamo l'applicazione React all'interno dell'elemento root.