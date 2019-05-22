import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import { parseTitle } from '../../js/helpers';

import reactBadge from '../../media/projects/icons/react.svg';
import jqueryBadge from '../../media/projects/icons/jquery.svg';
import bootstrapBadge from '../../media/projects/icons/bootstrap.svg';
import nodeBadge from '../../media/projects/icons/node.svg';
import electronBadge from '../../media/projects/icons/electron.svg';
import githubBadge from '../../media/projects/icons/github.svg';
import cssBadge from '../../media/projects/icons/css.svg';

const ProjectInfo = ({project}) => {

    const renderFeatures = (features) => {
        return features.map((feature, i) => {
            return <li key={i}>{feature}</li>
        })
    }

    const badgeList = {
        react: reactBadge,
        jquery: jqueryBadge,
        bootstrap: bootstrapBadge,
        node: nodeBadge,
        electron: electronBadge,
        github: githubBadge, 
        css: cssBadge, 
        // electron: electronIcon 
    }

    const renderIconDiv = (techBadges) => {
        console.log(techBadges)
        return techBadges.map((badge, i) => {
            return(
                <div key={i} className="project-tech-badge" style={{backgroundImage: `url(${badgeList[badge]})`}}></div>
            )
        })
    }

    return(      
        
        <Link to={`/projects/${parseTitle(project.title)}`} className="content-selector-link">
            <div className="project-info content-card content-selector-card">
                    <h3 className="project-title">{project.title}</h3>
                    {renderIconDiv(project.techBadges)}
            </div>
        </Link>
    )

}

export default ProjectInfo;