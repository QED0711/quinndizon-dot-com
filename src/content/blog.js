import { postBox } from '../js/tags'

/* 
IMPORTANT! 
Make sure to run `node compileMarkdown` if you make any changes to a markdown blog post file. Otherwise, those changes will not be reflected here. 
*/

// BLOG POSTS
// import binaryHarmony from './blogPosts/binaryHarmony';

// Import blog posts here in the format shown below
const matplotlibSubplotsContent = require('./blogPosts/json/matplotlibSubplots.json').content
const audioVisualizer = require('./blogPosts/json/audioVisualizer.json').content

const BLOG_CONTENT = {
    title: "Blog",

    posts: [
        // add postBox for each post, including title, date, and summary
        postBox(
            "Subplots in Matplotlib",
            "July 8, 2019",
            "A guide and tool for planning your plots",
            matplotlibSubplotsContent
        ),
        postBox(
            "Audio Comparison Toolkit",
            "July 26, 2019",
            "A Data Scientist's Apprach ot Visual Audio Comparision",
            audioVisualizer
        ),
    ]
}

export default BLOG_CONTENT