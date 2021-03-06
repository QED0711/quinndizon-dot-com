
import React from 'react'

import Gist from 'react-gist';

const renderContent = ({tags}) => {
    return tags.map((tag, i) => {
        const { content } = tag        
        switch(tag.type){
            case("p"):
                return <p className="content content-paragraph" key={i} style={tag.settings}>{content.join(" ")}</p>
            case('ul'):
                return(
                    <ul key={i} className="content content-list" style={tag.settings}>
                        {content.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                )
            case("ol"):
                return(
                    <ol key={i} className="content content-list" style={tag.settings}>
                        {content.map((item, index) => <li key={index}>{item}</li>)}
                    </ol>
                )
            case("image"):
                return(
                    <img key={i} src={content} alt={tag.alt} className="content content-image" style={tag.settings}/>
                )
            case("div-image"):
                    return(
                        <div style={{...tag.settings}}>
                            <div style={{backgroundImage: `url(${content})`, backgroundSize: tag.settings.backgroundSize || "contain", backgroundRepeat: "no-repeat", height: "100%", width: tag.settings.width || "100%"}}></div>
                        </div>
                    )
            case("h1"):
                return <h1 key={i} className="content content-heading-1" style={tag.settings}>{content}</h1>
            case("h2"):
                return <h2 key={i} className="content content-heading-2" style={tag.settings}>{content}</h2>
            case("h3"):
                return <h3 key={i} className="content content-heading-3" style={tag.settings}>{content}</h3>
            case("h4"):
                return <h4 key={i} className="content content-heading-4" style={tag.settings}>{content}</h4>
            case("h5"):
                return <h5 key={i} className="content content-heading-5" style={tag.settings}>{content}</h5>
            case("h6"):
                return <h6 key={i} className="content content-heading-6" style={tag.settings}>{content}</h6>
            case("html"):
                return content
            case("gist"):
                return <Gist id={content.id} file={content.file}/>
        }
    })
}

export default renderContent