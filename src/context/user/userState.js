import React, { useReducer } from 'react';
import UserReducer from './userReducer';
import UserContext from './userContext'
import clientAxios from '../../helpers/axiosHelper';
import { GET_USERS } from '../../types/IndexTypes';

const UserState = (props) => {
    
    const initialState = {
        users: []
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    //función para obtener un listado de todos los usuarios.
    const getUsers = async () => {

        try {
            const response = await clientAxios.get('/users');
            dispatch({
                type: GET_USERS,
                payload: response.data
            })

        } catch (error) {
            console.log(error);
        }
    }
    
    return (  
        <UserContext.Provider value={{
            users: state.users,
            getUsers
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
 
export default UserState;