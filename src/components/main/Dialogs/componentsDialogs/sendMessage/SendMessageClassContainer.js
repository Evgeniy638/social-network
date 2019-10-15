import React from 'react'
import SendMessageReduxForm from './SendMessage';
import apiDialogs from '../../../../../api/apiDialogs';

export default class SendMessageClassContainer extends React.Component {
     state = {
          isDeleteThisProfile: false
     }

     componentWillMount(){
          let withUserId = this.props.match.params.withUserId

          this.getIsDeleteThisProfile(withUserId)
     }

     componentDidUpdate(prevProps){
          let id=this.props.match.params.withUserId
          let prevId = prevProps.match.params.withUserId

          if (prevId !== id){
               this.getIsDeleteThisProfile(id)
          }
     }

     getIsDeleteThisProfile = (withUserId) => {
          apiDialogs.getIsDeleteThisProfile(withUserId).then(response => {
               this.setState((state) => {
                    return {isDeleteThisProfile: response}
               })
          })
     }

     writeAndShowNewMessage = values => {
          let withUserId = this.props.match.params.withUserId

          let message = {
               userId: this.props.userId,
               text: values.textareaMessage
          }
          
          this.props.writeAndShowNewMessage( this.props.userId, withUserId, message)
     }
     render() {
          return <SendMessageReduxForm 
               isDeleteThisProfile={this.state.isDeleteThisProfile}
               onSubmit={this.writeAndShowNewMessage} 
          />
     }
}