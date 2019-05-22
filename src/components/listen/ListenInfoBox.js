
import React from 'react';
import { Link } from "react-router-dom";

// HELPERS
import { parseTitle } from '../../js/helpers';


const ListenInfoBox = ({ work, setCurrentWork }) => {
    

    return(

        <Link to={`/listen/${parseTitle(work.title)}`} onClick={setCurrentWork(work)} className="content-selector-link">
            <div className="listen-info-box content-card " style={{backgroundImage: `url(${work.imageUrl})`}}>
                <div className="listen-info-box-image-cover content-selector-card">
                    <h2>{work.title}</h2>
                    <h4>{work.subtitle}</h4>
                </div>
            </div>
        </Link>


    )
}


export default ListenInfoBox