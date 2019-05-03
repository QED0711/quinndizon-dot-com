import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import { parseTitle } from '../../js/helpers';

const ProjectInfo = ({project}) => {

    const renderFeatures = (features) => {
        return features.map((feature, i) => {
            return <li key={i}>{feature}</li>
        })
    }


    return(      
        
        <div className="project-info content-card content-selector-card">
            <Link to={`/projects/${parseTitle(project.title)}`} >

                    <h3 className="project-title">{project.title}</h3>
                    
                    <div className="project-icons">
                    </div>

            </Link>
            <div className="project-links">
                {project.githubLink && <a href={project.githubLink} target="_blank">Github Repository</a> }
                {project.websiteLink && <a href={project.websiteLink} target="_blank">Website</a> }
            </div>
        </div>
    )

}

export default ProjectInfo;