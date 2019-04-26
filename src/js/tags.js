

const paragraph = (content) => {
    return {
        type: "p",
        content
    }
}

const postInfoBox = (title, date, summary) => {
    return {
        type: "post-info",
        title,
        date,
        summary
    }
}

const projectInfoBox = (title, features, githubLink, websiteLink, desktopImage, mobileImage, demoVideo) => {
    return {
        title,
        features,
        githubLink,
        websiteLink,
        desktopImage,
        mobileImage
    }
}


export {
    paragraph,
    postInfoBox,
    projectInfoBox
}