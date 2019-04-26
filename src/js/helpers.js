
const parseTitle = (title) => {
    return title.replace(/\s/g, "-").toLowerCase();
}

export {
    parseTitle
}