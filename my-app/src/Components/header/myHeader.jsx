import Text1 from './text1';
import Text2 from './text2';
import Text3 from './text3';
import Text4 from './text4';
import Text5 from './text5';
import Text6 from './text6';

// Rassemble toutes mes phrases 
function MyHeader() {
  
  return (
    <div className='myHeaderContainer' >
      <Text1 className='sentence' />
      <Text2 className='sentence' />
      <Text3 className='sentence' />
      <Text4 className='sentence' />
      <Text5 className='sentence' />
      <Text6 className='sentence' />
    </div>
  );
}

export default MyHeader;
