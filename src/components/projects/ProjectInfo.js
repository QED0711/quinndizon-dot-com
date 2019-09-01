import React from 'react';
import { Link } from 'react-router-dom';

import { parseTitle } from '../../js/helpers';

import reactBadge from '../../media/projects/icons/react.svg';
import jqueryBadge from '../../media/projects/icons/jquery.svg';
import bootstrapBadge from '../../media/projects/icons/bootstrap.svg';
import nodeBadge from '../../media/projects/icons/node.svg';
import electronBadge from '../../media/projects/icons/electron.svg';
import githubBadge from '../../media/projects/icons/github.svg';
import cssBadge from '../../media/projects/icons/css.svg';
import rubyBadge from '../../media/projects/icons/ruby.svg';
import railsBadge from '../../media/projects/icons/rails.svg';
import herokuBadge from '../../media/projects/icons/heroku.svg';
import pythonBadge from '../../media/projects/icons/python.svg';
import sklearnBadge from '../../media/projects/icons/sklearn.svg';
import flaskBadge from '../../media/projects/icons/flask.svg';

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
        ruby: rubyBadge, 
        rails: railsBadge, 
        heroku: herokuBadge, 
        python: pythonBadge,
        sklearn: sklearnBadge,
        flask: flaskBadge,
    }

    const renderIconDiv = (techBadges) => {
        return techBadges.map((badge, i) => {
            return(
                <div key={i} className="project-tech-badge" style={{backgroundImage: `url(${badgeList[badge]})`}}></div>
            )
        })
    }

    return(      
        
        <Link to={`/projects/${parseTitle(project.title)}`} className="content-selector-link">
            <div className="project-info content-card content-selector-card">
                    <h2 className="project-title">{project.title}</h2>
                    {renderIconDiv(project.techBadges)}
            </div>
        </Link>
    )

}

export default ProjectInfo;