import React from 'react';

const EventBox = ({ event }) => {

    return(
        <div className="event-box">
            <h3>{event.title}</h3>
            <h5>{event.date}</h5>   
            <h5>{event.location}</h5>
            <p>{event.summary}</p>   
            <div className="event-image" style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: 100,
                width: 100
            }}></div>
        </div>
    )

}

export default EventBox;