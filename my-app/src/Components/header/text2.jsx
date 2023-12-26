import React, { useState, useEffect } from 'react';

function Text2() {
  const [text, setText] = useState('');
  const initialText = "J'étudie le développement frontend avec l'école d'enseignement en ligne ";
  
  const [link, setLink] = useState('');
  const initialLink = "Open-Classroom";
  const [animateBorder, setAnimateBorder] = useState(false);

  useEffect(() => {
    let index = 0;

    function typeText() {
      if (index < initialText.length) {
        setAnimateBorder(true)
        setText(initialText.substring(0, index + 1));
        index++;
        setTimeout(typeText, 35);
      } else {
        let linkIndex = 0;
        function typeLink() {
          if (linkIndex < initialLink.length) {
            setLink(initialLink.substring(0, linkIndex + 1));
            linkIndex++;
            setTimeout(typeLink, 35);
          }else{
            setAnimateBorder(false);
          }
        }
        setTimeout(typeLink, 35);
      }
    };
    setTimeout(typeText, 2500);
  }, []);

  return (
    <div className='headerContainer'>
      <p className="animatedText">
        {text}
        <a href="https://openclassrooms.com/fr/" className='link'>
          {link}
        </a>
      </p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text2;
