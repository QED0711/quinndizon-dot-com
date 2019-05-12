
import React from 'react';

import { 
    postBox,

    paragraph,
    unorderedList,
    orderedList,
    heading,
    image,
    htmlInsert
 } from '../../js/tags';

 export default postBox(
     "Introduction to Binary Harmony",
     "May 11, 2019",
     "An introduction to the fundamental concepts of binary harmony",
     
     heading(1, "Overview"),
     paragraph("This is a paragraph", "this is a second sentence in the paragraph"),
 )