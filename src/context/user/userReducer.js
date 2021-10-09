import { ADD_ROLE, GET_ROLES, GET_USERS } from "../../types/IndexTypes";

//eslint-disable-next-line
export default (state, action) => {

    switch(action.type) {
        
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        
        case ADD_ROLE:
            return {
                ...state,
                message: {
                    text: action.payload.msg,
                    category: action.payload.category
                }
            }

        case GET_ROLES:
            return {
                ...state,
                roles: action.payload
            }

        default:
            return state;
    }
};
