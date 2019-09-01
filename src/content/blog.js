import { postBox } from '../js/tags'

// BLOG POSTS
// import binaryHarmony from './blogPosts/binaryHarmony';

// Import blog posts here in the format shown below
const testContent = require('./blogPosts/json/TEST.json').content
const newTestContent = require('./blogPosts/json/newTest.json').content


const BLOG_CONTENT = {
    title: "Blog",

    posts: [
        // add postBox for each post, including title, date, and summary
        postBox(
            "TEST",
            "DATE",
            "SUMMARY",
            testContent
        ),

        postBox(
            "new test",
            "Date",
            "summary",
            newTestContent
        )
    ]
}

export default BLOG_CONTENT