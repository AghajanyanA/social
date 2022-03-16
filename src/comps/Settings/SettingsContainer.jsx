import React from "react";
import { connect } from "react-redux";
import { changeAppTheme } from "../../redux/settingsReducer";
import Settings from "./Settings";

const SettingsContainer = (props) => {


    return <Settings {...props} />
}

const mstp = state => {
    return {
        currentTheme: state.settings.theme
    }
}

const mdtp = dispatch => {
    return {
        changeTheme: theme => dispatch(changeAppTheme(theme))
    }
}

export default connect(mstp, mdtp)(SettingsContainer)