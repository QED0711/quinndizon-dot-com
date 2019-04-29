
import React from 'react'

const renderContent = ({tags}) => {
    return tags.map((tag, i) => {
        const { content } = tag
        switch(tag.type){
            case("p"):
                return <p className="content content-paragraph" key={i}>{content}</p>
            case('ul'):
                return(
                    <ul className="content content-list">
                        {content.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                )
            case("ol"):
                return(
                    <ol className="content content-list">
                        {content.map((item, index) => <li key={index}>{item}</li>)}
                    </ol>
                )
            case("image"):
                return(
                    <img src={content} alt="" className="content content-image"/>
                )
            case("h1"):
                return <h1 className="content content-heading-1">{content}</h1>
            case("h2"):
                return <h2 className="content content-heading-2">{content}</h2>
            case("h3"):
                return <h3 className="content content-heading-3">{content}</h3>
            case("h4"):
                return <h4 className="content content-heading-4">{content}</h4>
            case("h5"):
                return <h5 className="content content-heading-5">{content}</h5>
            case("h6"):
                return <h6 className="content content-heading-6">{content}</h6>
        }
    })
}

export default renderContent