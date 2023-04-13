import React, {useState} from 'react';
import Post from "../Post/Post";
import App from "../../App";

const Posts = ({lift}) => {

    let[Posts, GetPosts] = useState([])
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(AllPosts => {
            GetPosts(AllPosts)
        })

    return (
        <div>
            {
                Posts.map(value =>
                     <Post value={value} lift={lift}/>
                    )
            }
        </div>
    );
};

export default Posts;