import React from 'react';
import Posts from "../Posts/Posts";

const Post = ({post, GetPost}) => {
    const {id, title} = post;


    return(
        <div>
            <div>id - {id}</div>
            <div>title - {title}</div>
            <button onClick= {()=>GetPost(post)}>Post info</button>
        </div>
    )





    /*const {id, name} = value;*/

    /*return (
        <div>
            <div>
                <div>Id - {id}</div>
                <div>Title - {name}</div>
                <button onClick={()=> {
                   lift(value)
                }
                }>about post</button>
            </div>

        </div>
    );*/
};

export default Post;