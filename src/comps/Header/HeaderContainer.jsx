import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { establishAuthMe } from "../../redux/actions/users";

function HeaderContainer(props) {

    useEffect(() => {
        props.getAuthMeData()
        //eslint-disable-next-line
    }, [])

    return <Header {...props} />
}

const mapStateToProps = state => {
    return {
        login: state.authMe.login,
        avatar: state.header.avatar,
        isLogged: state.authMe.isLoggedIn,
        uid: state.authMe.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAuthMeData: () => {
            dispatch(establishAuthMe)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)