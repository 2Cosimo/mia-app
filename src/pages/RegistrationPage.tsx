import { useState } from "react";
import { type SubmitEventHandler } from "react";

type RegistrationPageProps = { 
  onRegister: (name: string) => void; 
};

export function RegistrationPage({onRegister}: RegistrationPageProps) { 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [errors, setErrors] = useState<{ [key: string]: string }>({}); 
    const validate = () => { 
    const newErrors: { [key: string]: string } = {}; 

    if (!firstName.trim()) newErrors.firstName = "Il nome è obbligatorio"; 
    if (!lastName.trim()) newErrors.lastName = "Il cognome è obbligatorio"; 
    if (!email.trim()) newErrors.email = "L'email è obbligatoria"; 
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Formato email non valido"; 
    if (!password.trim()) newErrors.password = "La password è obbligatoria"; 
    else if (password.length < 6) newErrors.password = "La password deve avere almeno 6 caratteri"; 

    setErrors(newErrors); 
    return Object.keys(newErrors).length === 0; 
    }

const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => { 
  event.preventDefault();

  if (!validate()) return; 

  onRegister(firstName.trim());
  setFirstName(""); 
  setLastName(""); 
  setEmail(""); 
  setPassword(""); 
};

return ( 
    <section className="card">
        <h2>Registrazione utente</h2> 
        <form className="form" onSubmit={handleSubmit}> 
            <label> 
                Nome
                <input value={firstName} onChange={(event) => setFirstName(event.target.value)} /> 
                {errors.firstName && <span className="error">{errors.firstName}</span>} 
            </label>

            <label> 
                Cognome
                <input value={lastName} onChange={(event) => setLastName(event.target.value)} /> 
                {errors.lastName && <span className="error">{errors.lastName}</span>} 
                
            </label>

            <label> 
                Email
                <input placeholder="example@email.it" type="email" value={email} onChange={(event) => setEmail(event.target.value)} /> 
                {errors.email && <span className="error">{errors.email}</span>} 
            </label>

            <label> 
                Password
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /> 
                {errors.password && <span className="error">{errors.password}</span>} 
            </label>

            <button type="submit">Registrati</button> 
        </form> 
    </section>
); 

};
