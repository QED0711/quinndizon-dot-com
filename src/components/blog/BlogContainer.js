import React, { Component } from 'react';

import BLOG_CONTENT from '../../content/blog';
import { TitleBox } from '../elements/stateless';


// COMPONENTS
import BlogPosts from './BlogPosts';

class BlogContainer extends Component {
    render(){
        return(
            <div className="blog-container content-container">
                <TitleBox title={BLOG_CONTENT.title} />

                <BlogPosts posts={BLOG_CONTENT.posts} />
            </div>
        )
    }
}

export default BlogContainer;