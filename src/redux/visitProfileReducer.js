const set_data = 'set_data'
const set_status = 'set_status'

const init_state = { 
    data: {},
    status: ''
}

const visitProfileReducer = (state = init_state, action) => {
    switch (action.type) {
       case set_data: {
        return {...state,
            data: action.data
           }
        }
        case set_status: {
            return {
                ...state, 
                status: action.status
            }
        
       }
           
        default:
            return state;
    }
}


export const setData = data => {return {type: set_data, data}}
export const setStatus = status => {return {type : set_status, status}}

export default visitProfileReducer