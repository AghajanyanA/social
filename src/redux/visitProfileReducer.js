const set_data = 'set_data'

const init_state = { 
    data: {}
}

const visitProfileReducer = (state = init_state, action) => {
    switch (action.type) {
       case set_data: {
        return {...state,
            data: action.data
           }

       }
           
        default:
            return state;
    }
}


export const setData = data => {return {type: set_data, data}}

export default visitProfileReducer