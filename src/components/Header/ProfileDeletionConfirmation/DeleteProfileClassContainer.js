import React from "react"
import DeleteProfile from "./DeleteProfile"

export default class DeleteProfileClassContainer extends React.Component {
     constructor(props) {
          super(props);
          this.wrapConfirmDeleteProfile = React.createRef();
     }

     deleteProfile = () => {
          this.props.deleteProfile(this.props.userId)
     }

     componentWillUnmount() {
          document.removeEventListener('click', this.handleClickOutside, false);
     }

     componentWillMount() {
          document.addEventListener('click', this.handleClickOutside, false);
     }

     handleClickOutside = (event) => {
          if (this.wrapConfirmDeleteProfile.current.className === event.target.className) {
               this.props.confirmDeleteProfileHide()
          }
     }

     render() {
          return (
               <DeleteProfile
                    deleteProfile={this.deleteProfile}
                    confirmDeleteProfileHide={this.props.confirmDeleteProfileHide}
                    handleClickOutside={this.handleClickOutside}
                    wrapConfirmDeleteProfile={this.wrapConfirmDeleteProfile}
               />
          )
     }
}