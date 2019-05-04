import React from 'react';

import PostInfo from './PostInfo';

const BlogPosts = ({posts}) => {
    const renderPostInfo = (posts) => {
        return posts.map((post, i) => {
            return <PostInfo key={i} post={post} />
        })
    }

    return(
        <div className="blog-posts content-selector-container">
            {renderPostInfo(posts)}
        </div>
    )

}

export default BlogPosts;