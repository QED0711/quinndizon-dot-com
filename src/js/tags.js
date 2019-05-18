import React from 'react';

const extractSettings = (content) => {
    let settings;
    let lastIndex = content.length - 1
    
    if(typeof content[lastIndex] === "object"){
        settings = content[lastIndex];
        content = content.slice(0, content.length - 1)
    } else {
        settings = {};
    }
    return {settings, content}
}

const paragraph = (...contentArr) => {
    const { settings, content } = extractSettings(contentArr);
    return {
        type: "p",
        content,
        settings
    }
}

const unorderedList = (...contentArr) => {
    const { settings, content } = extractSettings(contentArr);
    return {
        type: "ul",
        content,
        settings
    }
}

const orderedList = (...contentArr) => {
    const { settings, content } = extractSettings(contentArr);
    return {
        type: "ol",
        content,
        settings
    }
}

const image = (content, alt, settings) => {
    return {
        type: "image",
        content,
        alt,
        settings
    }
}

const divImage = (content, settings) => {
    return{
        type: "div-image",
        content,
        settings
    }
}

const heading = (size, content, settings) => {
    return {
        type: `h${size}`,
        content,
        settings
    }
}

const htmlInsert = (content) => {
    return {
        type: "html",
        content
    }
}  

const codeGist = (content) => {
    return {
        type: "gist",
        content
    }
}









// OBJECT TAG RENDERERS


const postBox = (title, date, summary, ...content) => {
    return {
        title,
        date,
        summary,
        tags: content
    }
}

const listenInfoBox = (title, subtitle, imageUrl, scoreSrc, scTrackId) => {
    return {
        title, 
        subtitle,
        imageUrl,
        score: scoreFrame(scoreSrc),
        soundCloud : soundcloudFrame(scTrackId)
    }
}

const soundcloudFrame = (trackId) => {
    return(
        <iframe width="100%" height="auto" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&amp;color=%23EAE4D5&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=true&amp;visual=false&amp;show_artwork=false`}></iframe>
    )
}

const scoreFrame = (src) => {
    return(
        <iframe src={src} className="score-frame"></iframe>
    )
}

const projectInfoBox = (title, tags, githubLink = null, websiteLink = null, laptopImage = null, tabletImage = null, mobileImage = null, demoVideo = null) => {
    return {
        title,
        tags,
        githubLink,
        websiteLink,
        laptopImage,
        tabletImage,
        mobileImage,
        demoVideo
    }
}

const eventInfoBox = (title, date, location, summary, image) => {
    return {
        title, 
        date,
        location,
        summary,
        image
    }
}

const resumeItem = (name, ...tags) => {
    return {
        name,
        tags
    }
} 


export {
    paragraph,
    unorderedList,
    orderedList,
    image,
    divImage,
    heading,
    htmlInsert,
    codeGist,

    postBox,
    listenInfoBox,
    projectInfoBox,
    eventInfoBox,
    resumeItem
}