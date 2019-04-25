import React, { Component } from 'react';
import { TitleBox } from '../elements/stateless';

// CONTENT
import PROJECTS_CONTENT from '../../content/projects';

class ProjectsContainer extends Component {
    render(){
        return(
            <div className="projects-container">
                <TitleBox title={PROJECTS_CONTENT.title} />
            </div>
        )
    }
}

export default ProjectsContainer;