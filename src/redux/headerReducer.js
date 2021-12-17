let init_state = {
    userName: 'Gagik',
    userLastName: 'Tsarukyan',
    avatarURL: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg',
}


let headerReducer = (state = init_state, action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
}

export default headerReducer