import { postInfoBox } from "../js/tags";


const BLOG_CONTENT = {
    title: "Blog",

    posts: [
        postInfoBox(
            "Test Post 1",
            new Date().toString(),
            "This is the test summary"
        ),
        postInfoBox(
            "This is another cool post",
            new Date().toString(),
            "a new summary here about stuff"
        )
    ]
}

export default BLOG_CONTENT