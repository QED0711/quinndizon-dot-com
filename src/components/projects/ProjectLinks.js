import React from 'react';

const ProjectLinks = ({ project }) => {

    return(
        <div className="project-links">
            {project.githubLink && <a href={project.githubLink} target="_blank">Github Project</a>}
            {project.websiteLink && <a href={project.websiteLink} target="_blank">Website</a>}
        </div>
    )

}

export default ProjectLinks;