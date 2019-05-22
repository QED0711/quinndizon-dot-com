
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

import cssComponentManagerDesktop from '../media/projects/cssComponentManager/Desktop.JPG'
import cssGitChecklistDesktop from '../media/projects/git-checklist/desktop.png'

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
                heading(3, "Features"),
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
            null,
            ['react', "github"],
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
                heading(3, "Features"),
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
            "Video",
            ['node', 'jquery', 'bootstrap', 'github']
        ),

        // ==========================================================================================================

        projectInfoBox(
            "CSS Component Manager",
            [
                heading(2, "CSS Component Manger", {textAlign: 'center'}), 
                heading(5, "2019", {textAlign: 'center', margin: 0}), 
                paragraph(
                    "An electron desktop application that allows users to create and manage large libraries of css styles, and compile them down to single files for deployment"
                ),
                htmlInsert(<hr/>),
                heading(3, "Technologies"),
                unorderedList("JS + Electron"),
                htmlInsert(<hr/>),
                heading(3, "Features"),
                unorderedList(
                    "Desktop application built using Electron, HTML, and Javascript",
                    "The application helps to better modularize the css component creation process by allowing user to break up their code into dedicated projects",
                    "Within each project, users can write HTML and CSS code for specific components, and see the results displayed in real time in a dummy window",
                    "When users are finished writing their components, they can compile the CSS code to a single file on their machine, and deploy it in any other project",
                ),
            ],
            "https://github.com/QED0711/css-component-creator",
            null,
            cssComponentManagerDesktop,
            null,
            null,
            "Video",
            ["electron", 'css']
        ),

        // ==========================================================================================================
        
        projectInfoBox(
            "Git Checklist",
            [
                heading(2, "Git Checklist", {textAlign: 'center'}), 
                heading(5, "2019", {textAlign: 'center', margin: 0}), 
                paragraph(
                    "An electron desktop application to help users plan and manage their git workflow from a simple UI. Helps to encourage simple task completion and regular commits."
                ),
                htmlInsert(<hr/>),
                heading(3, "Technologies"),
                unorderedList("JS + Electron"),
                htmlInsert(<hr/>),
                heading(3, "Features"),
                unorderedList(
                    "Users can point the application to any git initialized project. If there is no .gitchecklist file present, it will create one.",
                    "In a project's .gitchecklist file, users can store and track the completion of project goals",
                    "In the UI, users can checkoff completed tasks and have commits automatically generated for each completed itam"
                ),
            ],
            "https://github.com/QED0711/git-checklist",
            null,
            cssGitChecklistDesktop,
            null,
            null,
            "Video",
            ["electron", 'github']
        ),

        // ==========================================================================================================

        // projectInfoBox(
        //     "Personal Website",
        //     [
        //         heading(2, "Personal Website", {textAlign: 'center'}),
        //         paragraph("This is a paragraph about this project", "This is a second sentence about this project"),
        //         unorderedList("Here is an list item", "here is another"),
        //     ],
        //     null,
        //     "http://quinndizon.com",
        //     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        //     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        //     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        //     "Video"
        // ),
    ]

}

export default PROJECTS_CONTENT