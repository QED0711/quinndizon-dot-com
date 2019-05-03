import React from 'react';
import { maxHeaderSize } from 'http';

const paragraph = (...content) => {
    return {
        type: "p",
        content
    }
}

const unorderedList = (...content) => {
    return {
        type: "ul",
        content
    }
}

const orderedList = (...content) => {
    return {
        type: "ol",
        content
    }
}

const image = (content, alt) => {
    return {
        type: "image",
        content,
        alt
    }
}

const heading = (size, content) => {
    return {
        type: `h${size}`,
        content
    }
}

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
        <iframe width="100%" height="auto" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&amp;color=%23fad8bf&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=true&amp;visual=false&amp;show_artwork=false`}></iframe>
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
    heading,

    postBox,
    listenInfoBox,
    projectInfoBox,
    eventInfoBox,
    resumeItem
}