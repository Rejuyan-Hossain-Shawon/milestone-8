import React from 'react';
import "./SingleComment.css"

const SingleComment = (props) => {
    return (
        <div className="single-comment">
            <h2>Title:{props.post.title}</h2>
            <p>{props.post.body}</p>
        </div>
    );
};

export default SingleComment;