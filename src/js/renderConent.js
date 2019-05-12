
import React from 'react'

const renderContent = ({tags}) => {
    return tags.map((tag, i) => {
        const { content } = tag        
        switch(tag.type){
            case("p"):
                return <p className="content content-paragraph" key={i}>{content.join(" ")}</p>
            case('ul'):
                return(
                    <ul key={i} className="content content-list">
                        {content.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                )
            case("ol"):
                return(
                    <ol key={i} className="content content-list">
                        {content.map((item, index) => <li key={index}>{item}</li>)}
                    </ol>
                )
            case("image"):
                return(
                    <img key={i} src={content} alt={tag.alt} className="content content-image"/>
                )
            case("div-image"):
                    return(
                        <div style={{                            
                            backgroundImage: `url(${content})`,
                            backgroundRepeat: "no-repeat",
                            ...tag.settings
                        }}></div>
                    )
            case("h1"):
                return <h1 key={i} className="content content-heading-1">{content}</h1>
            case("h2"):
                return <h2 key={i} className="content content-heading-2">{content}</h2>
            case("h3"):
                return <h3 key={i} className="content content-heading-3">{content}</h3>
            case("h4"):
                return <h4 key={i} className="content content-heading-4">{content}</h4>
            case("h5"):
                return <h5 key={i} className="content content-heading-5">{content}</h5>
            case("h6"):
                return <h6 key={i} className="content content-heading-6">{content}</h6>
            case("html"):
                    return content
        }
    })
}

export default renderContent