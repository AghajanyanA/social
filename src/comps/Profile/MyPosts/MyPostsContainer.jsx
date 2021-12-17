import { connect } from 'react-redux';
import { handlePostActionCreator, resetProfileTextareaAction, updatePostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = state => {
    return {
        state: state.profilePage,
        userName: state.header.userName,
        avaURL: state.header.avatarURL,
        currentTextarea: state.profilePage.textareaControl
    }
}

let mapDispatchToProps = dispatch => {
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

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer