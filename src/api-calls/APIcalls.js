import axios from "axios"

export const usersAPI = {
    getUsersAPICall(pageSize = 10, currentPage = 1) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "dc06b04a-d34e-4fd1-9f28-3af884f969df"
            }
        }).then(res => res.data)
    }
}
export const followAPI = {
    unfollowUserApiCall(id) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "dc06b04a-d34e-4fd1-9f28-3af884f969df"
            }
        });
    },
    followUserApiCall(id) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
            withCredentials: true,
            headers: {
                "API-KEY": "dc06b04a-d34e-4fd1-9f28-3af884f969df"
            }
        });
    }
};

export const authAPI = {
    authMe() {
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
            headers: {
                "API-KEY": "dc06b04a-d34e-4fd1-9f28-3af884f969df"
            }
        });
    },
    getUserPhoto(id) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "dc06b04a-d34e-4fd1-9f28-3af884f969df"
            }
        });
    },
    loginAPI(email, password, remember) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login?email=${email}&password=${password}&rememberMe=${remember}`, null, {
            withCredentials: true,
            headers: {
                "API-KEY": "dc06b04a-d34e-4fd1-9f28-3af884f969df"
            }
        })
    },
    logoutAPI() {
        return axios.delete('https://social-network.samuraijs.com/api/1.0/auth/login', {
            withCredentials: true,
            headers: {
                "API-KEY": "dc06b04a-d34e-4fd1-9f28-3af884f969df"
            }
        })
    }
}


export const statusAPI = {
    setStatus(status) {
        return axios.put('https://social-network.samuraijs.com/api/1.0/profile/status', {
            withCredentials: true,
            status,
            headers: {
                'Authorization': 'Bearer dc06b04a-d34e-4fd1-9f28-3af884f969df',
                'API-KEY': 'dc06b04a-d34e-4fd1-9f28-3af884f969df',
                'Content-Type': 'application/json'
            }
        })
    },
    getStatus(id) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "dc06b04a-d34e-4fd1-9f28-3af884f969df"
            }
        })
    }
}