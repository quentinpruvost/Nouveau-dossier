//import 

//components
import Nav from "../../Components/nav/nav"
import Intro from "../../Components/intro/intro"

// Composant page d'accueil
function Home(){


  return(
    <div className='homepage'>
      <Nav />
      <div>
        <Intro />
      </div>
    </div>
  )
}

export default Home

