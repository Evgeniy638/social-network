import React from "react"
import Messages from "./Messages";

export default class MessagesClassContainer extends React.Component{
     constructor(props) {
          super(props);
          this.messagesEnd = React.createRef();
     }

     scrollToBottom = () => {
          this.messagesEnd.current.scrollIntoView({ behavior: "smooth" });
     }

     componentWillMount(){
          let withUserId=this.props.match.params.withUserId

          this.props.getAndShowDialogWithUser(this.props.userId, withUserId)
     }

     componentDidMount() {
          this.scrollToBottom();
     }

     componentDidUpdate() {
          this.scrollToBottom();
     }

     render(){
          return(
               <Messages 
                    {...this.props}
                    messagesEnd = {this.messagesEnd}     
               />
          )
     }
}