
import React from 'react';
import { resumeItem } from '../js/tags';

import { 
    paragraph,
    unorderedList,
    orderedList,
    image,
    htmlInsert,
    heading
} from '../js/tags';

import {
    headingStyles,
    textUnitStyle,
    indentedSubheadingStyle,
    indentedParagraphStyle,
} from './tagStyles';


const RESUME_CONTENT = {
    title: "Resume",

    items: [
        resumeItem(
            "Experience",
            heading(2, "Experience"),
            paragraph("Classically trained musician, with 8+ years professional experience in music education and arts management. Additional 5+ years experience in programming and web development"),
            
            htmlInsert(<hr/>),

            heading(3, "ONLINE COURSE DESIGNER & WEB DEVELOPER", textUnitStyle),
            heading(5, "January 2019 - Present", textUnitStyle),
            heading(4, "University of Maryland College Park", indentedSubheadingStyle),
            unorderedList(
                "Lead curriculum, assessment, and web developer for the university’s online Music Fundamentals course.",
                "Created a custom web application to allow instructors to design self-assessing materials to help evaluate learning outcomes.",
                "First iteration of the online version of the course saw a nearly 300% increase in enrollment from previous years.",
                textUnitStyle
            ),
           
            heading(3, "UNIVERSITY CLASSROOM MUSIC INSTRUCTOR", {margin: "1em 0 0"}),
            heading(5, "2012 - Present", textUnitStyle),
            heading(4, "University of Louisville (2012-2015) & University of Maryland (2015-present)", indentedSubheadingStyle),
            unorderedList(
                "Instructed and assisted in courses in music theory, aural skills, composition, music technology, and conducting.",
                "Taught up to four courses a semester, with class sizes 10-13 students.",
                "Responsible for designing curriculum and assessment materials for full academic years and working with faculty and administration to meet institutional standards and objectives.",
                textUnitStyle
            ),

            heading(3, "ARTISTIC DIRECTOR", {margin: "1em 0 0"}),
            heading(5, "2017 - 2018", textUnitStyle),
            heading(4, "TEMPO New Music Ensemvle, University of Maryland College Park", indentedSubheadingStyle),
            unorderedList(
                "Planned and executed a six-event season consisting of a varity of concerts and interactive sound installations.",
                "Introduced new strategies for repertoire selection and musician recruitment to ensure that everyone in the organization had ownership over the product.",
                "Helped create a concert series focused on engaging new audience within the local community.",
                textUnitStyle
            ),
            
            
            htmlInsert(<hr/>),
        ),
        
        // ===========================================================================================
        
        resumeItem(
            "Skills and Technologies",
            heading(2, "Skills"),
            
            htmlInsert(<hr/>),

            heading(3, "Soft Skills", textUnitStyle),
            unorderedList(
                "Creative problem solver",
                "Self directed learner",
                "Well organized",
                "Leadership & team experience",
                "Excellent time management",
                "Self starter",
                textUnitStyle
            ),
            
            
            htmlInsert(<hr/>),
            
            
            heading(3, "Music Technologies", textUnitStyle),
            unorderedList(
                "Composition",
                "Conducting",
                "Arranging",
                "Engraving",
                "Recording, mixing & mastering",
                
                textUnitStyle
                ),

                heading(3, "Music & Audio", textUnitStyle),
                heading(5, "Notation Software", {...textUnitStyle, marginLeft: "1em"}),
                unorderedList(
                    "Sibelius",
                    "Dorico",                
                    textUnitStyle
                ),
                heading(5, "Recording Software", {...textUnitStyle, marginLeft: "1em"}),
                unorderedList(
                    "Pro Tools",
                    "Logic",                
                    textUnitStyle
                ),
                heading(5, "Other", {...textUnitStyle, marginLeft: "1em"}),
                unorderedList(
                    "Max MSP",                
                    textUnitStyle
                ),
                
            htmlInsert(<hr/>),
                
            heading(3, "Web Technologies", textUnitStyle),
            
            heading(4, "Javascript", {margin: "1em 0 0"}),
            unorderedList(
                "ECS6",
                "React + Redux",
                "Node",
                "Electron",
                "JQuery",
                textUnitStyle
            ),

            heading(4, "Ruby", {margin: "1em 0 0"}),
            unorderedList(
                "Rails",
                textUnitStyle
            ),
            
            heading(4, "HTML & CSS", {margin: "1em 0 0"}),
            unorderedList(
                "HTML5",
                "CSS3",
                "Bootstrap",
                textUnitStyle
            ),
            
            heading(4, "Databases", {margin: "1em 0 0"}),
            unorderedList(
                "SQL",
                "GraphQL",
                textUnitStyle
            ),
            
            heading(4, "Testing", {margin: "1em 0 0"}),
            unorderedList(
                "Mocha",
                textUnitStyle
            ),

            heading(4, "Version Control", {margin: "1em 0 0"}),
            unorderedList(
                "Git + Github",
                textUnitStyle
            ),
            
            heading(4, "Other", {margin: "1em 0 0"}),
            unorderedList(
                "MVC",
                "Rest",
                textUnitStyle
            ),

                
            
        ),
        
        // ===========================================================================================
        
        resumeItem(
            "Awards & Achievements",
            heading(2, "Awards & Achievements"),

            htmlInsert(<hr/>),

            heading(3, "M-Cubator Grant Recipient for Music Web Application", textUnitStyle),
            heading(5, "2019", indentedSubheadingStyle),
            paragraph(
                "Awarded the maximum funding requested from the University of Maryland School of Music to develop software to help music students study for score identification exams.",
                indentedParagraphStyle
            ),
           
            heading(3, "Grand Prize Winner - Walsum Competition", textUnitStyle),
            heading(5, "2018", indentedSubheadingStyle),
            paragraph(
                "Monetary prize and performance of the winning work, \"Dark Nebula\", by the University of Maryland Wind Orchestra",
                indentedParagraphStyle
            ),

            heading(3, "University of Maryland Flagship Fellow", textUnitStyle),
            heading(5, "2015 - 2019", indentedSubheadingStyle),
            paragraph(
                "Recipient of the distinguished and highly competative Flaghip Fellowship at the University of Maryland - awarded to only 10 incoming doctoral students per year across all disciplines.",
                "Fellowship included full tuition and stipend over four years, and no work duties for two years.",
                indentedParagraphStyle
            ),

            heading(3, "Grand Prize Winner - PARMA International Student Composer Competition", textUnitStyle),
            heading(5, "2012", indentedSubheadingStyle),
            paragraph(
                "Grand Prize in the inaugural composition competition produced by PARMA Recordings. Winning Work, \"Awakening\", recorded and released on the Navona Label.",
                indentedParagraphStyle
            ),

            heading(3, "University of Louisville Bomhard Fellow", textUnitStyle),
            heading(5, "2011 - 2013", indentedSubheadingStyle),
            paragraph(
                "Recipient of the Bomhard Fellowship in composition for showing an aptitude for writing for the human voice.",
                "Fellowship included full tuition plus stipend.",
                indentedParagraphStyle
            ),

        ),

        // ===========================================================================================

        resumeItem(
            "Education",
            heading(2, "Education"),
            
            htmlInsert(<hr/>),

            heading(3, "Data Science Bootcamp", textUnitStyle),
            heading(4, "Flatiron School, Washington D.C.", {...textUnitStyle, fontWeight: 500}),
            paragraph("2019", {margin: '0 0 1em'}),

            heading(3, "Doctorate of Musical Arts - Composition", textUnitStyle),
            heading(4, "University of Maryland, College Park", {...textUnitStyle, fontWeight: 500}),
            paragraph("2015 - 2019", {margin: '0 0 1em'}),
        
            
            heading(3, "Web Development Community Bootcamp", textUnitStyle),
            heading(4, "Flatiron School", {...textUnitStyle, fontWeight: 500}),
            paragraph("2018", {margin: '0 0 1em'}),
            
            heading(3, "Master of Music - Orchestral Conducting", textUnitStyle),
            heading(4, "University of Lousville", {...textUnitStyle, fontWeight: 500}),
            paragraph("2013 - 2015", {margin: '0 0 1em'}),
        
            
            heading(3, "Master of Music - Composition", textUnitStyle),
            heading(4, "University of Lousville", {...textUnitStyle, fontWeight: 500}),
            paragraph("2011 - 2013", {margin: '0 0 1em'}),
        
            
            heading(3, "Bachelors of Music - Theory & Composition", textUnitStyle),
            heading(4, "The College of Wooster", {...textUnitStyle, fontWeight: 500}),
            paragraph("2007 - 2011", {margin: '0 0 1em'}),

        ),
    ]

}

export default RESUME_CONTENT;