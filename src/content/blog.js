import { postInfoBox } from "../js/tags";


const BLOG_CONTENT = {
    title: "Blog",

    posts: [
        postInfoBox(
            "Test Post 1",
            new Date().toString(),
            "This is the test summary"
        )
    ]
}

export default BLOG_CONTENT