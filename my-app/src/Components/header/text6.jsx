import { useState, useEffect } from "react"

function Text6(){
  const [text, setText] = useState('');
  const initialText = "Merci pour votre visite";
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
        setAnimateBorder(true)
      }
    };

    setTimeout(typeText, 23000); 
  }, []);

  

  return (
    <div className='headerContainer'>
      <p className="animatedText">{text}</p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text6