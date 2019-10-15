import React from "react"
import InfByUser from "./InfByUser"

export default class InfByUserClassContainer extends React.Component{
     componentWillMount(){
          let id=this.props.match.params.id

          this.props.showDataUserThunkCreator(id)
     }

     componentDidUpdate(prevProps){
          let id=this.props.match.params.id
          let prevId = prevProps.match.params.id

          if (prevId !== id){
               this.props.showDataUserThunkCreator(id)
          }
     }

     createNewDialog = () => {
          let withUserId = this.props.userData.userId
          let withUserName = this.props.userData.name
          let name = this.props.name
          let userId = this.props.userId

          this.props.createNewDialog({withUserId, withUserName, name, userId})
     }

     render(){
          return(
               <InfByUser
                    {...this.props.userData}
                    createNewDialog = {this.createNewDialog}
                    isnotUserProfile = {this.props.userId !== this.props.userData.userId}
               />
          )
     }
}