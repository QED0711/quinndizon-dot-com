import React, { Component } from 'react';
import { TitleBox } from '../elements/stateless';

// CONTENT
import PROJECTS_CONTENT from '../../content/projects';

// COMPONENTS
import ProjectBoxes from './ProjectBoxes';


class ProjectsContainer extends Component {
    render(){
        const { match } = this.props
        return(
            <div className="projects-container content-container">
                <TitleBox title={PROJECTS_CONTENT.title} />

                <ProjectBoxes projects={PROJECTS_CONTENT.projects} />
            </div>
        )
    }
}

export default ProjectsContainer;