import React from "react"
import Users from "./Users";

export default class UsersClassContainer extends React.Component {
     componentWillMount() {
          this.getNewUsers(undefined)
     }

     getNewUsers = (newPage) => {
          if (this.props.currentPage === newPage || newPage < 1 || newPage > this.props.numberOfPages) return false

          if (newPage === undefined) newPage = this.props.currentPage

          this.props.getUsersThunkCreator(this.props.pageSize, newPage, this.props.userId)
     }

     componentWillUnmount() {
          this.props.deleteDataAboutUSers()
     }

     render() {
          return (
               <Users
                    disabledButtons={this.props.disabledButtons}
                    isFetching={this.props.isFetching}
                    getNewUsers={this.getNewUsers}
                    currentPage={this.props.currentPage}
                    numberOfPages={this.props.numberOfPages}
                    users={this.props.users}
                    followThunkCreator={this.props.followThunkCreator}
                    unfollowThunkCreator={this.props.unfollowThunkCreator}
                    userId={this.props.userId}
                    following={this.props.following}
                    isLoggedIn={this.props.isLoggedIn}
               />
          )
     }
}