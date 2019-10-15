import React from "react"
import MyHeader from "./MyHeader"
import s from "./styleHeader.module.css"

export default class HeaderClassContainer extends React.Component {
     constructor(props) {
          super(props);
          this.menu = React.createRef();
          this.style = s
     }

     componentWillUnmount() {
          document.removeEventListener('click', this.menuClickOutside);
     }

     componentWillMount() {
          document.addEventListener('click', this.menuClickOutside);
     }

     menuClickOutside = (e) => {
          if (this.state.displayMenu &&
               e.target.className !== this.style.avatar &&
               e.target.parentNode.className !== this.style.userName &&
               e.target.parentNode.className !== this.style.menu) {
                    this.closeMenu()
          }
     }

     closeMenu = () => {
          this.toggleDisplayMenu(false)
     }

     state = {
          displayMenu: false
     }

     toggleDisplayMenu = (isMenuMode) => {
          this.setState(() => {
               return {
                    displayMenu: isMenuMode
               }
          })
     }

     openMenu = () => {
          this.toggleDisplayMenu(true)
     }

     confirmDeleteProfileShow = () => {
          this.closeMenu()
          this.props.confirmDeleteProfileShow()
     }

     logout = () => {
          this.closeMenu()
          this.props.logout()
     }

     render() {
          return (
               <MyHeader
                    userName={this.props.userName}
                    userId={this.props.userId}
                    logout={this.logout}
                    isLoggedIn={this.props.isLoggedIn}
                    displayMenu={this.state.displayMenu}
                    openMenu={this.openMenu}
                    confirmDeleteProfileShow={this.confirmDeleteProfileShow}
                    isConfirmDeleteProfile={this.props.confirmDeleteProfile}
                    menu={this.menu}
                    avatarImg={this.props.avatarImg}
                    closeMenu={this.closeMenu}
               />
          )
     }
}
