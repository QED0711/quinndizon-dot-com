
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
                heading(2, "Personal Website", {textAlign: 'center'}),
                paragraph("This is a paragraph about this project", "This is a second sentence about this project"),
                unorderedList("Here is an list item", "here is another"),
            ],
            null,
            "http://quinndizon.com",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            "Video"
        ),
        projectInfoBox(
            "Other Project",
            [
                heading(2, "This is a heading", {textAlign: 'center'}), 
                orderedList("This is an ordered list item", "and another"),
            ],
            "https://github.com",
            "http://mywebsite",
            "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6xpS0jFxik7ugje7/videoblocks-hi-tech-user-interface-head-up-display-with-digital-floating-information-for-background-computer-desktop-screen-display_h-k0x5hfm_thumbnail-full01.png",
            "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6xpS0jFxik7ugje7/videoblocks-hi-tech-user-interface-head-up-display-with-digital-floating-information-for-background-computer-desktop-screen-display_h-k0x5hfm_thumbnail-full01.png",
            null,
            // "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6xpS0jFxik7ugje7/videoblocks-hi-tech-user-interface-head-up-display-with-digital-floating-information-for-background-computer-desktop-screen-display_h-k0x5hfm_thumbnail-full01.png",
            "Video"
        ),
        projectInfoBox(
            "Git Checklist",
            [
                heading(2, "Git Checklist", {textAlign: 'center'}), 
                orderedList("An electron desktop application to help users manage track and manage incremental changes in their git workflow", "provides a simple UI to checkoff tasks and commit them to the current branch"),
            ],
            "https://github.com",
            null,
            "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6xpS0jFxik7ugje7/videoblocks-hi-tech-user-interface-head-up-display-with-digital-floating-information-for-background-computer-desktop-screen-display_h-k0x5hfm_thumbnail-full01.png",
            null,
            null,
            // "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6xpS0jFxik7ugje7/videoblocks-hi-tech-user-interface-head-up-display-with-digital-floating-information-for-background-computer-desktop-screen-display_h-k0x5hfm_thumbnail-full01.png",
            "Video"
        ),
        projectInfoBox(
            "CSS Compiler",
            [
                heading(2, "CSS Compiler", {textAlign: 'center'}), 
                orderedList("A CSS component designer toolkit built in electron", "provides a simple UI to checkoff tasks and commit them to the current branch"),
            ],
            "https://github.com",
            null,
            "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6xpS0jFxik7ugje7/videoblocks-hi-tech-user-interface-head-up-display-with-digital-floating-information-for-background-computer-desktop-screen-display_h-k0x5hfm_thumbnail-full01.png",
            null,
            null,
            // "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6xpS0jFxik7ugje7/videoblocks-hi-tech-user-interface-head-up-display-with-digital-floating-information-for-background-computer-desktop-screen-display_h-k0x5hfm_thumbnail-full01.png",
            "Video"
        ),
    ]

}

export default PROJECTS_CONTENT