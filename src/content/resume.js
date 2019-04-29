
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

    items: {
        skills : {
            tags: [
                heading(3, "Skills"),
                paragraph("Here is a skills introduction"),
                heading(5, "first skill"),
                unorderedList(["item 1", "item 2"])
            ]
        } 
    } 
        
        
        
            
        
        
    
}

export default RESUME_CONTENT;