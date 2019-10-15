import Post from "./Post/Post";
import React from "react";

const Posts =(props) => {
     return(
          <div>
               {props.posts.map( item=> 
                    <Post 
                         key={item.id}
                         message={item.message} 
                         countLikes={item.countLikes}
                         avatarPhoto={item.avatarPhoto}
                         isLiked = {item.isLiked}
                         isLoggedIn = {props.isLoggedIn}
                         likePost = { () => {props.likePost(item.id)}}
                    />)
               }
          </div>
     )
}

export default Posts