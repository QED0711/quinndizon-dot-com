
import React from 'react';

import { 
    postBox,

    paragraph,
    unorderedList,
    orderedList,
    heading,
    image,
    divImage,
    htmlInsert,
    codeGist
} from '../../js/tags';


 export default postBox(
     "Structuring Harmony: An Exploration of Binary, Ternary & Greater Structures",
     "May 11, 2019",
     "An introduction to my theories and use of binary harmony",
     
     heading(1, "Overview"),
     paragraph(
        "I have always been fascinated with the ways music and technology can be combined.",
        "As a composer, I am particulary interesting in see how technology can be used to augment the process working with and conceiving of musical materials.",
        "To this end, my recent work with Limited Pitch-Class Interval Sequences (LIPCS), and in particular, binary harmony, has yielded interesting results." 
      ),
      paragraph(
          "In this post, which I hope will be the first of a few posts on this topic, will cover the basics of these theories I developed to handle binary, ternary, and quaternary LPCISs."
      ),
      heading(2, "TL;DR (or musical set theory isn't my bag)"),
      paragraph(
          'The abridged version for those who haven\'t studied non-tonal theory is this.',
          'We can think of collections of pitches in terms of what pitch classes they contain (A,C,D, etc.).',
          "We can also think about them in terms of how those pitch classes are related to each other (intervals - the sapce between two pitches/pitch classes).",
          "When we put pitch-classes in a specified order",
      ),
      htmlInsert(<hr/>),
      heading(2, "What is a LIPCS"),
      paragraph(
          "A LIPCS - Limited Pitch Class Interval Sequence - is a way to think about ordering chains of pitch-class intervals.",
          'The term, "Limited" comes in when we predetermine which pitch-class intervals we use in our orderings.',
      ),
      paragraph(
          'Let\'s consider an example where we choose two PCIs, 2 and 3, represented as a set, (2,3).',
          'We can think of this as a binary set'
      ),
     heading(2, "Modeling Harmonic Possibilitiese with LIPCSs"),
     image("https://cdn.pixabay.com/photo/2016/04/13/15/04/music-sheet-1327003_960_720.jpg", "music image", {width: "100%", maxWidth: "500px", display: "block", margin: "0 auto"}),
     codeGist({id: "911e00f20e7328c0a892a75fc6dcaec0"}),
     orderedList("Designate a binary set", "Map all sequences of 0 to the set size")

 )