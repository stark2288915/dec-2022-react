import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import App from "../../App";

const Posts = () => {
    let [posts, GetPosts] = useState([]);
    let [post, GetPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => GetPosts(value));
    },[] )

        return(
            <div>
                <div>
                    <div>userId - {post.userId}</div>
                    <div>id - {post.id}</div>
                    <div>name - {post.title}</div>
                    <div>body - {post.body}</div>
                </div>
                {
                    posts.map(post => <Post post={post} GetPost={GetPost}/>)
                }


            </div>
        );







    /*let[Posts, GetPosts] = useState([])
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => {
            GetPosts(value)
        })

    return (
        <div>
            {
                Posts.map(value =>
                     <Post value={value} lift={lift}/>
                    )
            }
        </div>
    );*/
};

export default Posts;