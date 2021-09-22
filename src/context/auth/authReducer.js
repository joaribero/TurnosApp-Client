import { ERR_LOGIN, ERR_REGISTER, GET_USER, LOG_OUT } from "../../types/IndexTypes";


export default (state, action) => {
    switch (action.type) {

        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                message: null
            }
        
        case ERR_REGISTER:    
        case ERR_LOGIN:
            return {
                ...state,
                user: null,
                authenticated: false,
                message: action.payload
            }
        
        case LOG_OUT:
            return {
                ...state,
                user: null,
                authenticated: false
            }    

        default:
            return state;
    }
}