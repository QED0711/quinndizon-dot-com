
import React from 'react'
import { 
    projectInfoBox,
    paragraph,
    unorderedList,
    orderedList,
    heading,
    image,
    htmlInsert
} from '../js/tags'


import mtportalDesktop from '../media/projects/mtportal/desktop.JPG'
import mtportalTablet from '../media/projects/mtportal/tablet.JPG'
import mtportalMobile from '../media/projects/mtportal/mobile.JPG'

import scorestudyDesktop from '../media/projects/scorestudy/desktop.JPG'
import scorestudyTablet from '../media/projects/scorestudy/tablet.JPG'
import scorestudyMobile from '../media/projects/scorestudy/mobile.JPG'

const PROJECTS_CONTENT = {

    title: "Projects",

    projects: [

        projectInfoBox(
            "Music Theory Portal",
            [
                heading(2, "Music Theory Portal", {textAlign: 'center'}), 
                heading(5, "2019", {textAlign: 'center', margin: 0}), 
                paragraph("A music theory assignment creation and grading tool for use in traditional and fliped classroom theory courses.", "Designed originally for the University of Maryland, School of Music, but freely available for all music theory students and instructors."),
                htmlInsert(<hr/>),
                heading(3, "Technologies"),
                unorderedList("React", "Noteflight Client API", "gh-pages"),
                htmlInsert(<hr/>),
                heading(3, "About"),
                unorderedList(
                    "Front-end application that allows instructors to turn any Noteflight score into a self grading music theory assignment",
                    "Instructors can share specially generated links to their assignments with an unlimited number of assignments allowed",
                    "Generates and decodes unique encrypted tokens that students and instructors can use to verify assignment completion",
                    "100% free to use and no signup required",
                    "Recommended use in the desktop due to Noteflight interface, but scales to tablet and mobile formats as well",
                    "Currently used in music theory courses at the University of Maryland, College Park"
                ),
            ],
            "https://github.com/QED0711/music-fundamentals-basic",
            "http://musictheoryportal.com",
            mtportalDesktop,
            mtportalTablet,
            mtportalMobile,
            "Video"
        ),

        // ==========================================================================================================

        projectInfoBox(
            "Score Study Application",
            [
                heading(2, "Score Study Appliction", {textAlign: 'center'}), 
                heading(5, "2017", {textAlign: 'center', margin: 0}), 
                paragraph(
                    "A fullstack study tool and web scraping app built to help music students study for score identification exams.", 
                    "I originally designed the application as a study tool for myself and my colleagues to help us study for the doctoral comprehensive exams at UMD.",
                    "In 2019, it received a M-Cubator grant award from the UMD School of Music to update the functionality to allow user accounts, and user sourced rankings of study materials.",
                    "Updated version to be posted Fall of 2019."
                ),
                htmlInsert(<hr/>),
                heading(3, "Technologies"),
                unorderedList("Bootstrap", "JQuery + Ajax", "gh-pages"),
                htmlInsert(<hr/>),
                heading(3, "About"),
                unorderedList(
                    "A fullstack application that allows users to designate composers, time periods, and genres of music theory would like to study.",
                    "Currates targeted study examples from more than twenty-thousand scores scraped from online databases like IMSLP.org",
                    "Free for all users",
                    "Currently used by students and faculty in two courses at UMD"
                ),
            ],
            "https://github.com/QED0711/scorestudy",
            "https://qed0711.github.io/scorestudy/",
            scorestudyDesktop,
            scorestudyTablet,
            scorestudyMobile,
            "Video"
        ),

        // ==========================================================================================================

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
       
        // ==========================================================================================================
       
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

        // ==========================================================================================================

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
    ]

}

export default PROJECTS_CONTENT