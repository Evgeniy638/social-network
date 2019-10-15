import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom"
import LoginClassContainer from "../../components/main/Login/LoginClassContainer";

const withRedirectToLogin = (Component) => {
     return compose(
          connect(mapStateToProps),
          withRouter
     )((props) => {
          if (!props.isLoggedIn && props.location.pathname === "/login") return <LoginClassContainer {...props}/>

          if (props.isLoggedIn && props.location.pathname === "/login") return <Redirect to="/profile" />

          if (!props.isLoggedIn) return <Redirect to="/login" />

          return <Component {...props} />
     })
}

const mapStateToProps = (state) => ({
     isLoggedIn: state.stateLoginUser.isLoggedIn
})

export default withRedirectToLogin