import React from 'react';

const PostDetail = ({post}) => {
    return (
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetail;