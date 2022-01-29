import axios from "axios"

export const usersAPI = {
    getUsersAPICall(pageSize = 10, currentPage = 1) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, {
            withCredentials: true
        }).then(res => res.data)
    }
}
export const followAPI = {
    unfollowUserApiCall(id) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "66886f45-5d4f-459c-ae5d-65635548e47d"
            }
        })
    },
    followUserApiCall(id) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
            withCredentials: true,
            headers: {
                "API-KEY": "66886f45-5d4f-459c-ae5d-65635548e47d"
            }
        })
    }
}

export const authAPI = {
    authMe() {
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
    },
    getUserPhoto(id) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {withCredentials: true})
    }
}
