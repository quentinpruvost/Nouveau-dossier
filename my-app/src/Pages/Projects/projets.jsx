import Nav from '../../Components/nav/nav'
import Projet from '../../Components/projet/projet'
// Récupère le data des projets stocké dans mon json
import ProjectData from '../../projets.json';

import { useState } from 'react';

// Composant page Projet 
function Projets(){
  // Initie l'index des id à 1 
  const [currentProjectId, setCurrentProjectId] = useState(1);
  // Nombre total des projets
  const totalProjects = ProjectData.projects.length
  // Récupère le projet correspondant à l'index de l'id dans le useState currentProjectId
  const project = ProjectData.projects.find((project) => project.id === currentProjectId);
  
  // Ajoute le contôle du bouton pour reculer d'un projet à l'autre.
  const handlePrevClick = () => {
    // Si le projet est le premier alors envoye au dernier projet
    if (currentProjectId === 1) {
      setCurrentProjectId(totalProjects);
    // sinon enléve 1 au useState currentProjectId
    } else {
      setCurrentProjectId(currentProjectId - 1);
    }
  };
  // Ajoute le contôle du bouton pour avancer d'un projet à l'autre.
  const handleNextClick = () => {
    // Si le projet est le dernier alors envoye au premier
    if (currentProjectId === totalProjects) {
      setCurrentProjectId(1);
    // Sinon ajoute 1 au useState currentProjectId
    } else {
      setCurrentProjectId(currentProjectId + 1);
    }
  };

  return(
    <div className='projetPage'>
      <Nav />
      {project && (
        <Projet
          project={project}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      )}
    </div>
  )
}

export default Projets