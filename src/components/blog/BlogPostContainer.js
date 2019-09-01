
import React from 'react';

import BLOG_CONTENT from '../../content/blog';

import { reformatTitle } from '../../js/helpers'

import renderContent from '../../js/renderConent';

import ReactMarkdown from 'react-markdown';

const BlogPostContainer = ({ match }) => {
    console.log(BLOG_CONTENT)
    const post = BLOG_CONTENT.posts.filter(post => post.title.toLowerCase() === reformatTitle(match.params.post))[0]
    
    const test = '# Hello World\nThis is some text\n***\n'
    console.log(post)
    return(
        <div className="blog-post-container content-container">
            <h1 style={{textAlign: 'center'}}>{post.title}</h1>
            <hr/>
            {/* {renderContent(post)} */}
            <ReactMarkdown source={post.markdown} escapeHtml={false}/>
        </div>
    )
}

export default BlogPostContainer;