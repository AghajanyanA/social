import { connect } from 'react-redux';
import { clearTextareaActionCreator, msgTextareaActionCreator, sendPMActionCreator } from '../../redux/messagesReducer';
import Messages from './Messages';


const mapStateToProps = (state) => {
    return {
        state: state.messagePage
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnChange: (text) => {
            dispatch(msgTextareaActionCreator(text))
        },
        handleSendPM: () => {
            dispatch(sendPMActionCreator())
        },
        handleElseSendPM: () => {
            dispatch(clearTextareaActionCreator())
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer