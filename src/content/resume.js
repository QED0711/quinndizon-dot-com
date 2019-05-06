
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
            heading(2, "Education"),
            paragraph("My Education"),
            heading(4, "Something else"),
            orderedList("item 1", "item 2")
        ),
    ]

}

export default RESUME_CONTENT;