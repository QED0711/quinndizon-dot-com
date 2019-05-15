
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
            "Skills",
            heading(2, "Skills"),
            paragraph("Here is a skills introduction"),
            heading(4, "first skill"),
            orderedList("item 1", "item 2")
        ),
        resumeItem(
            "Technologies",
            heading(2, "Technologies"),
            paragraph("I know these technologies"),
            heading(4, "first technologies"),
            orderedList("item 1", "item 2")
        ),
        resumeItem(
            "Education",
            heading(1, "Education"),
            
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