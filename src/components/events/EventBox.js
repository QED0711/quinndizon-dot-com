import React from 'react';

const EventBox = ({ event }) => {

    return(
        <div className="event-box">
            <div className="event-heading">
                <h3>{event.title}</h3>
                <h5>{event.date}</h5>   
                <h5>{event.location}</h5>
            </div>
            <div className="event-description">
                <p>{event.summary}</p>   
            </div>
            <div className="event-image" style={{
                backgroundImage: `url(${event.image})`,
            }}></div>
        </div>
    )

}

export default EventBox;