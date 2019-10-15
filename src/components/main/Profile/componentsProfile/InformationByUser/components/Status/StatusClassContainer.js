import React from "react"
import Status from "./Status";

export default class StatusClassContainer extends React.Component {
     state = {
          editMode: false,
          textStatus: undefined,
     }

     enableEditMode = () => {
          this.setState({
               editMode: true
          })
     }

     disableEditMode = () => {
          this.setState({
               editMode: false
          })
     }

     writeStatus = (newText) => {
          this.setState({
               textStatus: newText
          })
     }

     render() {
          return (
               <Status
                    writeStatus={this.writeStatus}
                    enableEditMode={this.enableEditMode}
                    disableEditMode={this.disableEditMode}
                    textStatus={
                         (this.state.textStatus === undefined)
                              ? this.props.status
                              : this.state.textStatus
                    }
                    editMode={this.state.editMode}
                    saveNewStatus={this.props.saveNewStatus}
                    userId={this.props.userId}
                    id={this.props.match.params.id}

               />
          )
     }
}