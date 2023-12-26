// Template de la page projet. 
// Chaque projet doit pouvoir afficher les information suivantes : 

function Projet({ project, onPrevClick, onNextClick }) {
  return (
    <div className='project'>
      <h2 className='projectTitle'>{project.title}</h2>
      <div className='projectContainer'>
        <div className='projectInfo'>
          <ul className="projectList">
            {project.missions.map((mission, index) => (
              <li key={index} className="projectMission">
                {mission}
              </li>
            ))}
          </ul>
          <p className="focus">Mots-clés : {project.focus.join(', ')}</p>
        </div>
        <div className='projectImageContainer'>
          {project.image.map((imageUrl, index) => (
            <img className='projectImage' key={index} src={imageUrl} alt={project.name} />
          ))}
        </div>
      </div>
      <div className='projectToolsContainer'>
        <div className='projectTools'>
          <p className="projectWork">{project.languages.join(', ')}</p>
        </div>
        <p className="projectDate">Date du projet : {project.date}</p>
        <a className="projectLink" target="_blank" rel="noreferrer" href={project.link} >GitHub Link</a>
        <div className="projectArrow">
          <button className="arrow" onClick={onPrevClick} aria-label="Previous project" >&lt;</button>
          <button className="arrow" onClick={onNextClick} aria-label="Next project" >&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Projet;
