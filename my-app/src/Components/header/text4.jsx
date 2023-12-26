import { useState, useEffect } from "react";

function Text4(){
  const [text, setText] = useState('');
  const initialText = "J'ai hâte d'élargir mes compétences, d'explorer de nouvelles technologies et de travailler sur des nouveaux projets.";
  const [animateBorder, setAnimateBorder] = useState(false);


  useEffect(() => {
    let index = 0;

    function typeText(){
      if (index < initialText.length) {
        setAnimateBorder(true)
        setText(initialText.substring(0, index + 1));
        index++;
        setTimeout(typeText, 35);
      }else{
        setAnimateBorder(false)
      }
    };

    setTimeout(typeText, 12000); 
  }, []);

  

  return (
    <div className='headerContainer'>
      <p className="animatedText">{text}</p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text4