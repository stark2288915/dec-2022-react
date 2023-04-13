import React from 'react';
import Posts from "../Posts/Posts";

const Post = ({value, lift}) => {

    return (
        <div>
            <div>
                <div>Id - {value.id}</div>
                <div>Title - {value.name}</div>
                <button onClick={()=> {
                   lift(value)
                }
                }>about post</button>
            </div>

        </div>
    );
};

export default Post;