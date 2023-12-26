import { useEffect, useState } from "react";

function Text5(){
  const [text, setText] = useState('');
  const initialText = "N'hésitez pas à me contacter si vous souhaitez discuter d'opportunités potentielles ou explorer davantage mon travail.";
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

    setTimeout(typeText, 17500); 
  }, []);

  

  return (
    <div className='headerContainer'>
      <p className="animatedText">{text}</p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text5