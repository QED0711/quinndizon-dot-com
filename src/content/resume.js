
import { resumeItem } from '../js/tags';

import { 
    paragraph,
    unorderedList,
    orderedList,
    image,
    heading
} from '../js/tags';

const RESUME_CONTENT = {
    title: "Resume",

    items: [
        resumeItem(
            "Experience",
            heading(3, "Experience"),
            paragraph("a paragraph about my exerience"),
            heading(5, "a smaller heading"),
            unorderedList("thing 1", "thing 2")
        ),
        resumeItem(
            "Skills",
            heading(3, "Skills"),
            paragraph("Here is a skills introduction"),
            heading(5, "first skill"),
            orderedList("item 1", "item 2")
        ),
    ]

}

export default RESUME_CONTENT;