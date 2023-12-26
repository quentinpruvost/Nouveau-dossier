import { useRef, useState } from "react";

// Librairie JS pour le formulaire de contact
import emailjs from '@emailjs/browser';
// Je ne suis pas un robot vérification
import ReCAPTCHA from 'react-google-recaptcha';

//Expression Regex pour vérifier le format de l'email 
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function Form() {
  // Permet d'accéder aux valeurs des champs du form
  const form = useRef();
  // Ajout des messages d'informations pour l'utilisateur
  const [message, setMessage] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    // établie les identifiants nécessaire pour l'envoye du form. Stocké dans fichier .env
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    // Récupère la valeur du champs de l'email et du captcha
    const email = form.current.user_email.value;
    const recaptchaValue = form.current["g-recaptcha-response"].value;

    // Vérifie le format de l'email avec le Regex et informe l'utilisateur
    if (!emailPattern.test(email)) {
      setMessage("Veuillez entrer une adresse email valide.");
      return;
    }
    // Vérifie que le captcha à été coché sinon informe l'utilisateur
    if(!recaptchaValue){
      setMessage('Veuillez cocher la case "Je ne suis pas un robot".');
      return;
    }
    // Envoye le form avec les identifiants 
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setMessage('Le message a bien été envoyé !');
        form.current.reset();
      })
      .catch((error) => {
        setMessage("Un problème est survenu lors de l'envoi du message.");
        console.error(error);
      });
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Me contacter</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formDetails">
          <div className="formNameContainer">
            <label htmlFor="user_name">Nom : </label>
            <input className="formName" type="text" name="user_name" required aria-label="Nom" />
          </div>
          <div className="formEmailContainer">
            <label htmlFor="user_email">Adresse mail : </label>
            <input className="formEmail" type="email" name="user_email" required aria-label="Adresse mail" />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message : </label>
          <textarea maxLength="700" className="formText" placeholder="Votre message ici ... " name="message" required aria-label="Message" />
        </div>
        <p className="formMessage">{message}</p>

        <ReCAPTCHA 
          sitekey="6LcUbusoAAAAAAkkCx1ZzQ3E7QsorBnlUjSU7stU"
          className="formCaptcha"
          role="button"
          aria-label="I am not a robot, verification"
        />
        <input className="formSubmit" type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Form;
