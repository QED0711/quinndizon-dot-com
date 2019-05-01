import { 
    postBox,
    paragraph,
    heading,
    image,
    unorderedList,
    orderedList
} from "../js/tags";


const BLOG_CONTENT = {
    title: "Blog",

    posts: [
        postBox(
            "Test Post 1",
            new Date().toString(),
            "This is the test summary",
            heading(3, "Test Post 1"),
            paragraph("This is a sample paragraph"),
            orderedList("Here are the topics I will cover"),
        ),
        postBox(
            "This is another cool post",
            new Date().toString(),
            "a new summary here about stuff"
        )
    ]
}

export default BLOG_CONTENT