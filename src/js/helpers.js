
const parseTitle = (title) => {
    return title.replace(/\s/g, "_").toLowerCase();
}

const reformatTitle = (title) => {
    return title.replace(/\_/g, " ").toLowerCase();
}

export {
    parseTitle,
    reformatTitle
}