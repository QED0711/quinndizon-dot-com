

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


export {
    paragraph,
    postInfoBox
}