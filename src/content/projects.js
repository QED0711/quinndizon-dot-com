
import { 
    projectInfoBox,
    paragraph,
    unorderedList,
    orderedList,
    heading,
    image
} from '../js/tags'


const PROJECTS_CONTENT = {

    title: "Projects",

    projects: [
        projectInfoBox(
            "Personal Website",
            [
                heading(3, "Personal Website"),
                paragraph("This is a paragraph about this project"),
                unorderedList("Here is an list item", "here is another"),
            ],
            "https://github.com",
            "http://mywebsite",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            "Video"
        ),
        projectInfoBox(
            "Other Project",
            [
                heading(2, "This is a heading"), 
                orderedList("This is an ordered list item", "and another"),
            ],
            "https://github.com",
            "http://mywebsite",
            "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6xpS0jFxik7ugje7/videoblocks-hi-tech-user-interface-head-up-display-with-digital-floating-information-for-background-computer-desktop-screen-display_h-k0x5hfm_thumbnail-full01.png",
            "tablet image",
            "Mobile Image",
            "Video"
        ),
    ]

}

export default PROJECTS_CONTENT