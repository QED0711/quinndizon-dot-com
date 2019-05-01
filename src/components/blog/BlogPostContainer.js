
import React from 'react';

import BLOG_CONTENT from '../../content/blog';

import { reformatTitle } from '../../js/helpers'

import renderContent from '../../js/renderConent';

const BlogPostContainer = ({ match }) => {
    console.log(match.params.post)
    console.log(BLOG_CONTENT)
    const post = BLOG_CONTENT.posts.filter(post => post.title.toLowerCase() === reformatTitle(match.params.post))[0]
    console.log(post)
    return(
        <div className="blog-post-container content-container">
            {renderContent(post)}
        </div>
    )
}

export default BlogPostContainer;