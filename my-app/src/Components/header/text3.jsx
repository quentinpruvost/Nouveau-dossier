import React, { useState, useEffect } from 'react';

function Text3() {
  const [text, setText] = useState('');
  const initialText = "Au cours de mes études, j'ai travaillé sur certains projets impliquant : Html, Css, JavaScript, Sass, React et Redux.";
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

    setTimeout(typeText, 6500); 
  }, []);

  

  return (
    <div className='headerContainer'>
      <p className="animatedText">{text}</p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text3;
