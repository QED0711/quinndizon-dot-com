
import React from 'react';

// TAG IMPORTS

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

// TAG STYLE IMPORTS

import {
    imageTagStyle
} from '../tagStyles';

// MEDIA IMAGE IMPORTS

import lpcisExample from './lpcis_example.png'

// CONTENT

export default postBox(
     "N Harmony | Part 1",
     "May 11, 2019",
     "An introduction to my theories and use of N Harmonic Structures",
     
    heading(2, "Overview"),
    paragraph("In this post, I will introduce the concepts of Limited Pitch-Class Interval Sequences, and discuss how and why I developed this approach to harmonic organization."),  
    paragraph("Note: this post assumes some basic knowledge of musical set-theory. "),
    
    
    paragraph(
        "When I compose, music is about drama.",
        "Though drama can take many forms in music, and be affected by many different elements (rhythm, melody, etc.), I typically find myself obsessing over how the drama will play out harmonically.",
    ),
    paragraph(
        "But harmony in the modern era can be a bit of a double-edged sword.",
        "Since we no longer live in a period where there is a set of expected harmonic norms, and each piece must define its own harmonic boundaries, managing the vast array of harmonic possibilities can be a herculean task.",
        "To assist myself in addressing these challenges, I developed the concepts contained in the article."
    ),
    
    htmlInsert(<hr/>),
    
    heading(2, "Terminology"),
    paragraph(
        "Before we dive in head first, some basic terminology:"
    ),
    
    htmlInsert(<em><p><strong>Inteval Set: </strong>A user defined set of unordered pitch-class intervals (PCIs 1-11).</p></em>),
    paragraph("Example: the set, {2,3,5} contains PCIs 2, 3, and 5.", "These need not be in sorted order, but I will often show them in this way.", {marginLeft: "1em"}),
    
    htmlInsert(<em><p><strong>Limited Pitch-Class Interval Sequence (LPCIS): </strong>An ordered sequence of pitch classes in which each dyadic adjacency forms one of the pitch-class intervals of an interval set.</p></em>),
    paragraph("Example:", {marginLeft: "1em"}),
    image(lpcisExample, "LPCIS <4 6 9 0 2>", imageTagStyle),
    htmlInsert(<em><p><strong>N Harmony: </strong>A set class associated with a LIPCS</p></em>),
    paragraph("Example: ", "The SC, 5-34[02469] is associated with the LIPCS shown above.", {marginLeft: "1em"}),
    
    htmlInsert(
        <p>
            For the term, N Harmony, the N refers to the size of the interval set used to generate the associated LPCIS.
            So the SC from above can be more specifically described as a <em>Binary Harmony</em>, where the term binary is derived from the interval set that contains only two intervals, 2 and 3.
        </p>
    ),

    paragraph(
    ),
    paragraph("Further expanding on this N labeling scheme, we can label interval sets and LPCISs as binary, ternary, quaternary, etc., depending on the number of pitch-class intervals used in their construction."),

    htmlInsert(
        <em>
            <p><strong>N Harmonic Network: </strong>A collection of set classes all connected by their relationship to a single interval set.</p>
        </em>
    ),

    htmlInsert(<hr/>),

    heading(2, "So What's the Big Deal?"),

    paragraph(
        "At the end of the day, N Harmony is just another avenue into set theory.",
        "We are, after all, working with pitch-class sets and set classes once the LPCISs have been formed.",
        "What N Harmony provides is an alternative method for mapping relationships within and among pitch-class sets.",
    ),

    paragraph(
        "As you might logically assume, a single set-class may be associated with more than one LPCISs.",
    )

    // codeGist({id: "911e00f20e7328c0a892a75fc6dcaec0"}),


)