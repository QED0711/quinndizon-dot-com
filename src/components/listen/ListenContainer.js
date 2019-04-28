import React, { useState } from 'react';
import { parseTitle } from '../../js/helpers';

// CONTENT
import LISTEN_CONTENT from '../../content/listen';

// COMPONENTS
import { TitleBox } from '../elements/stateless';
import ListenBoxes from './ListenBoxes';
import SelectedWork from './SelectedWork'

const ListenContainer = ({ match }) => {

    let [currentWork, setCurrentWork] = useState(null);
    
    // if(match.params.work){
    //     const selectedTitle = match.params.work.replace(/\-/g, " ");
    //     if(currentWork){
    //         if(selectedTitle !== currentWork.title.toLowerCase()){
    //             for(let i = 0; i < LISTEN_CONTENT.works.length; i++){
    //                 let work = LISTEN_CONTENT.works[i]
    //                 if(parseTitle(work.title) === match.params.work){
    //                     setCurrentWork(work)
    //                 }
    //             }
    //         }
    //     }
    // }

    console.log(match)
    console.log(currentWork)
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