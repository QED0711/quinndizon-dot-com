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




export {
    TitleBox,
    renderTags
}