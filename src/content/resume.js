
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
    textUnitStyle
} from './tagStyles';


const RESUME_CONTENT = {
    title: "Resume",

    items: [
        resumeItem(
            "Experience",
            heading(2, "Experience"),
            paragraph("A classically trained musician with professional experience in education, arts management, and web development."),
            htmlInsert(<hr/>),
            heading(4, "Web Developer & Online Course Designer"),
            heading(5, "University of Maryland, College Park"),
            unorderedList(
                "Lead course designer for the univerity's online music fundamentals course.",
                "Wrote a custom web application to allow instructors to easliy create and grade music assignments",
                "First run of the course saw more than a 300% increase in enrollment from previous years."
            ),
            htmlInsert(<hr/>),
        ),
        
        
        resumeItem(
            "Skills and Technologies",
            heading(2, "Skills"),
            
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
        
        
        
        resumeItem(
            "Education",
            heading(2, "Education"),
            
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