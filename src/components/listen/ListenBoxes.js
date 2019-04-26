import React from 'react';

import ListenInfoBox from './ListenInfoBox';

const ListenBoxes = ({works}) => {

    const renderListenBoxes = (works) => {
        return works.map((work, i) => {
            return <ListenInfoBox key={i} work={work} />
        })
    }   

    return(
        <div className="listen-boxes">
            {renderListenBoxes(works)}
        </div>
    )
}

export default ListenBoxes