
const parseTitle = (title) => {
    return title.replace(/\s/g, "-").toLowerCase();
}

const reformatTitle = (title) => {
    return title.replace(/\-/g, " ").toLowerCase();
}

export {
    parseTitle,
    reformatTitle
}