import React from 'react';

// COMPONENTS
import { listenInfoBox } from '../js/tags'



const LISTEN_CONTENT = {

    title: "Listen",

    works : [
        listenInfoBox(
            "First Work",
            "subtitle",
            "123",
            '456',
            "789",
        ),
        listenInfoBox(
            "Second Work",
            "some other subtitle",
            "123",
            '456',
            "789",
        ),
    ]

}

export default LISTEN_CONTENT