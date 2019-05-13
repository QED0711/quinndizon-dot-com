
import React from 'react';

import BLOG_CONTENT from '../../content/blog';

import { reformatTitle } from '../../js/helpers'

import renderContent from '../../js/renderConent';

const BlogPostContainer = ({ match }) => {

    const post = BLOG_CONTENT.posts.filter(post => post.title.toLowerCase() === reformatTitle(match.params.post))[0]
    
    return(
        <div className="blog-post-container content-container">
            <h1 style={{textAlign: 'center'}}>{post.title}</h1>
            <hr/>
            {renderContent(post)}
        </div>
    )
}

export default BlogPostContainer;