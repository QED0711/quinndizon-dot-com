
import React from 'react';

import { 
    postBox,

    paragraph,
    unorderedList,
    orderedList,
    heading,
    image,
    divImage,
    htmlInsert
 } from '../../js/tags';

 export default postBox(
     "Structuring Harmony: An Exploration of Binary, Ternary & Greater Structures",
     "May 11, 2019",
     "An introduction to my theories and use of binary harmony",
     
     heading(1, "Overview"),
     paragraph("There are many ways we can construct harmonic structures."),
     divImage("https://cdn.pixabay.com/photo/2016/04/13/15/04/music-sheet-1327003_960_720.jpg", {backgroundSize: "contain", width: "100%", height: "12em", margin: "0 auto", }),
     orderedList("Designate a binary set", "Map all sequences of 0 to the set size")

 )