import React from 'react';

import ListenInfoBox from './ListenInfoBox';

const ListenBoxes = ({works, setCurrentWork}) => {

    const renderListenBoxes = (works) => {
        return works.map((work, i) => {
            return <ListenInfoBox key={i} work={work} setCurrentWork={setCurrentWork}/>
        })
    }   

    return(
        <div className="listen-boxes content-selector-container">
            {renderListenBoxes(works)}
        </div>
    )
}

export default ListenBoxes