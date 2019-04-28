import React from 'react';

const renderTags = ({tags}) => {
    return tags.map((tag, i) => {
        switch(tag.type){
            case("p"):
                return <p className="content-paragraph" key={i}>{tag.content}</p>
        }
    })
}


const TitleBox = ({title}) => {
    return(
        <div className="title-box">
            <h2>{title}</h2>
        </div>
    )
}

const ResumeButton = ({ text, setResumeItem }) => {
    const handleClick = () => {
        return setResumeItem(text)
    }
    return(
        <button className="resume-button" onClick={handleClick}>
            <h3>{text}</h3>
        </button>
    )
}



export {
    renderTags,
    TitleBox,
    ResumeButton
}