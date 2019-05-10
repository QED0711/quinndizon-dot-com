import React from 'react';

import { paragraph, htmlInsert, image } from '../js/tags'

const ABOUT_CONTENT = {
    
    title: "About",

    shortBio: {
        tags: [
            image("https://www.musicnotes.com/images2/pro/sheet-music-pile.jpg", "sheet music pile"),
            paragraph("this is the short bio made from a tag generator"),
            htmlInsert(<p>
                <em>This is <strong>customized</strong> inserted html</em>
            </p>),
        ]
    },

    fullBio: {
        tags: [
            paragraph("this is the full bio made from a tag generator"),
            paragraph("this is a second paragraph in the full bio"),
            
        ]
    } 
}

export default ABOUT_CONTENT;