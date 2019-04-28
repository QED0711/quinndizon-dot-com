import React, { useState } from 'react';
import { parseTitle, reformatTitle } from '../../js/helpers';

// CONTENT
import LISTEN_CONTENT from '../../content/listen';

// COMPONENTS
import { TitleBox } from '../elements/stateless';
import ListenBoxes from './ListenBoxes';
import SelectedWork from './SelectedWork'


const ListenContainer = ({ match }) => {

    let [currentWork, setCurrentWork] = useState(null);
    
    if(!match.params.work){
        currentWork = null;
    } else {
        currentWork = LISTEN_CONTENT.works.filter(work => work.title.toLowerCase() === reformatTitle(match.params.work))[0]
    }
    console.log(currentWork);
    return(
        <div className="listen-container content-container">
            <TitleBox title={LISTEN_CONTENT.title} />

            <ListenBoxes works={LISTEN_CONTENT.works} setCurrentWork={setCurrentWork}/>

            {
                currentWork
                &&
                <SelectedWork work={currentWork} />
            }
        </div>
    )
}

export default ListenContainer;