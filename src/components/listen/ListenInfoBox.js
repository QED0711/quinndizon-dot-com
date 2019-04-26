
import React from 'react';
import { Link } from "react-router-dom";

// HELPERS
import { parseTitle } from '../../js/helpers';


const ListenInfoBox = ({ work, setCurrentWork }) => {
    

    return(

        <Link to={`/listen/${parseTitle(work.title)}`} className="listen-info-box">
            <h3>{work.title}</h3>
            <h5>{work.subtitle}</h5>
        </Link>


    )
}


export default ListenInfoBox