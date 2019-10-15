import React from "react"
import Posts from "./Posts";

export default class PostsClassComtainer extends React.Component{
     componentWillMount(){
          this.props.getUserPostsThunkCreator(this.props.match.params.id)
     }

     componentDidUpdate(prevProps){
          let id=this.props.match.params.id
          let prevId = prevProps.match.params.id

          if (prevId !== id){
               this.props.getUserPostsThunkCreator(id)
          }
     }

     likePost = (idPost) => {
          let userId = this.props.userId
          let idUserPost = this.props.match.params.id

          this.props.likePost(userId, idUserPost, idPost)
     }

     render(){
          return(
               <Posts
                    posts={this.props.posts}
                    likePost={this.likePost}
                    isLoggedIn = {this.props.isLoggedIn}
               />
          )
     }
}