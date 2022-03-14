import axios from 'axios';
import {setData, setStatus} from '../visitProfileReducer';
import { statusAPI } from "../../api-calls/APIcalls"

export const loadUserData = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {
            withCredentials: true})
        dispatch(setData(res.data))
        
        const status = await statusAPI.getStatus(id)
        dispatch(setStatus(status.data))
    } catch (err) {
        console.log(err)
    }
} 