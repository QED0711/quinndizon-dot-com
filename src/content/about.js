import React from 'react';

import { paragraph } from '../js/tags'

const ABOUT_CONTENT = {
    
    title: "About",

    shortBio: {
        tags: [
            paragraph("this is the short bio made from a tag generator")
        ]
    },

    fullBio: {
        tags: [
            paragraph("this is the full bio made from a tag generator"),
            paragraph("this is a second paragraph in the full bio")
        ]
    } 
}

export default ABOUT_CONTENT;