import React, {useState} from 'react';
import { TitleBox } from '../elements/stateless';
import { reformatTitle } from '../../js/helpers';

// CONTENT
import PROJECTS_CONTENT from '../../content/projects';

// COMPONENTS
import ProjectBoxes from './ProjectBoxes';
import ProjectCardContainer from './ProjectCardContainer';


const ProjectsContainer = ({ match }) => {
    const { projects } = PROJECTS_CONTENT;

    let [currentProject, setCurrentProject] = useState(null);

    if(match.params.project && !currentProject){
        currentProject = projects.filter(project => reformatTitle(match.params.project) === project.title.toLowerCase())[0];
    }

    console.log(currentProject)
    return(
        <div className="projects-container content-container">
            <TitleBox title={PROJECTS_CONTENT.title} />

            <ProjectBoxes projects={projects} />
            {
                currentProject
                &&
                <ProjectCardContainer currentProject={currentProject}/>
            }
        </div>
    )
    
}

export default ProjectsContainer;