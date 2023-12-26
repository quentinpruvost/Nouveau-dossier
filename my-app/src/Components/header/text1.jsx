import React, { useState, useEffect } from 'react';
// Contrôl l'animation d'une phrase
function Text1() {
  // état pour stocker le text
  const [text, setText] = useState('');
  // Phrase à afficher
  const initialText = "Bienvenue sur mon portfolio !";
  // Initie la bordure à false 
  const [animateBorder, setAnimateBorder] = useState(false);

  useEffect(() => {
    // initie l'index pour controler l'avancé lettre par lettre 
    let index = 0;

    function typeText(){
      // animation s'effectue si l'index est inférieur au nombre de lettre dans la phrase
      if (index < initialText.length) {
        // l'effet de bordure s'active avec le scss
        setAnimateBorder(true)
        // Ajoute une lettre à la fois de la phrase dans le useState
        setText(initialText.substring(0, index + 1));
        // Ajout 1 à l'index
        index++;
        // Contrôle le délai entre chaque lettre
        setTimeout(typeText, 35);
      }else{
        // Une fois la phrase remplis l'animation s'arrête 
        setAnimateBorder(false)
      }
    };
    // Contrôle le délai de déclenchement de l'animation
    setTimeout(typeText, 1000); 
  }, []);

  return (
    <div className='headerContainer'>
      <p className="animatedText">{text}</p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text1;
