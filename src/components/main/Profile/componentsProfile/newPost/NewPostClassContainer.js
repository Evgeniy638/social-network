import React from "react"
import NewPostReduxForm from "./NewPost";

export default class NewPostClassContainer extends React.Component {
     writePostBackEnd =(values) => {
          this.props.postingThunkCreator(
               this.props.userId, this.props.newId, 
               this.props.avatarPhoto, values.textNewPost
          )
     }

     render() {
          return (
               <NewPostReduxForm
                    onSubmit={this.writePostBackEnd}
                    idUrl={this.props.match.params.id}
                    userId={this.props.userId}
               />
          )
     }
}