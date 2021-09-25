import React, { useEffect, useState } from 'react';
import SingleComment from '../Comment/SingleComment';

import "./Comments.css"

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])


    return (
        <div>
            <h2>Total Post {comments.length}</h2>
            <div className="comments">

                {
                    comments.map(comment => <SingleComment key={comment.id} post={comment}></SingleComment>)
                }
            </div>

        </div>

    );
};

export default Comments;