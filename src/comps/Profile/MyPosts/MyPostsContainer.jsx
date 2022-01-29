import { connect } from 'react-redux';
import { handlePostActionCreator, resetProfileTextareaAction, updatePostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => {
    return {
        state: state.profilePage,
        userName: state.header.userName,
        avaURL: state.header.avatarURL,
        currentTextarea: state.profilePage.textareaControl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        textareaChange: text => {
            dispatch(updatePostTextActionCreator(text))
        },
        handlePost: ({currentTextarea, avaURL, userName}) => {
            if (currentTextarea.trim() !== '') {
                dispatch(handlePostActionCreator(userName, avaURL))
            } else { dispatch(resetProfileTextareaAction()) }
        },
        postCompContainer: action => {
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)