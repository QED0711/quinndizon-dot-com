import React from 'react';

import { paragraph, htmlInsert, image } from '../js/tags'

const ABOUT_CONTENT = {
    
    title: "About",

    shortBio: {
        tags: [
            paragraph("Quinn Dizon is a classically trained musician with nearly a decade of professional experience in arts management, audio recording and editing, and music education. He holds two masters degrees – composition and orchestral conducting – and a doctorate in music composition. He currently lives and works near Washington D.C."),
            paragraph("Above all else, Quinn loves to create. In addition to his musical activities, he is a passionate and experienced programmer and data scientist. Combining his many interests, Quinn has authored multiple music and education web applications that are currently used in university level courses. "),
        ]
    },

    fullBio: {
        tags: [
            paragraph("Quinn Dizon is a composer, conductor, programmer, and data scientist from Santa Rosa, California. His work as a composer has earned him recognition in the United States and Europe. Quinn’s achievements cover a wide range of awards and performances, and he has completed several commissions for a myriad of special occasions and events. Among his achievements are Grand Prize in the PARMA International Student Composer Competition for his work, Awakening, and first place in the University of Maryland College Park Walsum Competition for Dark Nebula."),
            paragraph("Quinn holds a Bachelors of Music in Composition from the College of Wooster, and both a Masters in Composition and a Masters in Orchestral Conducting from the University of Louisville. He currently resides in the Washington D.C. area, where he recently completed a doctorate in composition at the University of Maryland College Park."),
            paragraph("As another avenue for his creative output, Quinn is also a passionate programmer, web developer, and data scientist. Much of his work in this field combines his passion for music and education with his fascination with technology. Among his creations are several sound installations, music composition tools, and web applications used in college level music theory classrooms."),
            htmlInsert(<hr/>),
            paragraph("In recent years, Quinn has worked as a conductor and Artistic Director in a number of ensembles and professional music organizations. In this capacity, he has consistently been a strong supporter for the performance of new music. Between 2013-2015, he served as a conductor with the then Louisville based contemporary opera company, Thompson Street Opera Company. When he arrived at the University of Maryland College Park, he immediately stepped into a leadership role in the student led TEMPO New Music Ensemble. From 2015-2017, Quinn performed in TEMPO as a clarinetist and conductor, and served on the board of directors. For the 2017-2018 season, he became the Artistic Director. Under his guidance, TEMPO was able to produce six performance events during the season, including two interactive sound installations that Quinn personally designed. With TEMPO already established as a new music ensemble in the area, Quinn worked with other students and musicians to create a new music concert series at a local performance venue, MilkBoy ArtHouse. This new series provided UMD student composers with the opportunity to have their music performed for new audiences outside the university. The inaugural concert was a success, and this concert series remains a part of TEMPO’s regular season schedule."),
            paragraph("In addition to his work as a professional musician, Quinn is a passionate music educator. He has taught composition and conducting courses for young musicians, aged 8-12, as well as college level courses in music theory, aural skills, composition, conducting, and music technology. In 2018, Quinn was awarded an Outstanding Graduate Assistant Award from the University of Maryland at College Park. This award recognized him as a top graduate teaching assistant in the school of music, and among the top two percent of teaching assistants across all disciplines on campus."),
            
        ]
    } 
}

export default ABOUT_CONTENT;