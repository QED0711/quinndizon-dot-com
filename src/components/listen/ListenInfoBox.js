
import React from 'react';
import { Link } from "react-router-dom";

// HELPERS
import { parseTitle } from '../../js/helpers';


const ListenInfoBox = ({ work, setCurrentWork }) => {
    

    return(

        <Link to={`/listen/${parseTitle(work.title)}`} onClick={setCurrentWork(work)} className="content-selector-link">
            <div className="listen-info-box content-card " style={{backgroundImage: `url(${work.imageUrl})`}}>
                <div className="listen-info-box-image-cover content-selector-card">
                    <h3>{work.title}</h3>
                    <h5>{work.subtitle}</h5>
                </div>
            </div>
        </Link>


    )
}


export default ListenInfoBox