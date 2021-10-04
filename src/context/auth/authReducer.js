import { ADD_SOCIALS, ERR_LOGIN, ERR_REGISTER, ERR_SOCIALS, GET_USER, LOG_OUT } from "../../types/IndexTypes";

//eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {

        case GET_USER:
            console.log(action.payload);
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                message: {
                    text: null,
                    category: null
                }
            }
        
        case ERR_SOCIALS:
        case ERR_REGISTER:    
        case ERR_LOGIN:
            return {
                ...state,
                user: null,
                authenticated: false,
                message: {
                    text: action.payload.error,
                    category: action.payload.category
                }
            }
        
        case ADD_SOCIALS:
            return {
                ...state,
                message: {
                    text: action.payload.msg,
                    category: action.payload.category
                }
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