import React from 'react';

const ProjectInfo = ({project}) => {

    const renderFeatures = (features) => {
        return features.map((feature, i) => {
            return <li key={i}>{feature}</li>
        })
    }

    return(
        <div className="project-info">
        
            <h3 className="project-title">{project.title}</h3>
            
            <div className="project-icons">
                {/* {project.desktopImage && <DesktopIcon />} */}
                {/* {project.desktopImage && <MobileIcon />} */}
            </div>
            
            <div className="project-features">
                <ul>
                    {renderFeatures(project.features)}
                </ul>
            </div>

            <div className="project-links">
                {project.githubLink && <a href={project.githubLink} target="_blank">Github Repository</a> }
                {project.websiteLink && <a href={project.websiteLink} target="_blank">Website</a> }
            </div>
        </div>
    )

}

export default ProjectInfo;