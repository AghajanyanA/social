import axios from 'axios';
import {setData} from '../visitProfileReducer';

export const loadUserData = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {
            withCredentials: true})
        dispatch(setData(res.data))
    } catch (err) {
        console.log(err)
    }
} 