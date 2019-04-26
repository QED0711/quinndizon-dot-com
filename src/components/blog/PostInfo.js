import React from 'react';

import { Link } from 'react-router-dom';


// HELPERS
import { parseTitle } from '../../js/helpers';

const PostInfo = ({post}) => {

    const parsePostTitle = (postTitle) => {
        return postTitle.replace(/\s/g, "-").toLowerCase();
    }

    return(
        <Link to={`/blog/${parseTitle(post.title)}`}>
            <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <h5 className="post-date">{post.date}</h5>
                <hr/>
                <p>{post.summary}</p>
            </div>
        </Link>
    )

}

export default PostInfo;