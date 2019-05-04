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
        
        <Link to={`/projects/${parseTitle(project.title)}`} >
            <div className="project-info content-card content-selector-card">
                    <h3 className="project-title">{project.title}</h3>
            </div>
        </Link>
    )

}

export default ProjectInfo;