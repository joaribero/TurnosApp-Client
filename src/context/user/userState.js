import React, { useReducer } from 'react';
import UserReducer from './userReducer';
import UserContext from './userContext'
import clientAxios from '../../helpers/axiosHelper';
import { ADD_ROLE, GET_ROLES, GET_USERS } from '../../types/IndexTypes';

const UserState = (props) => {
    
    const initialState = {
        users: [],
        message: {
            text: null,
            category: null
        },
        roles: []
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

    //función para agregar nuevos roles
    const addRole = async (data) => {
        try {
            const response = await clientAxios.post('/addRole', data);
            dispatch({
                type: ADD_ROLE,
                payload: response.data
            })
            getRoles();
        } catch (error) {
            console.log(error);
        }
    }

    const getRoles = async () => {

        try {

            const response = await clientAxios.get('/getRoles');
            dispatch({
                type: GET_ROLES,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    return (  
        <UserContext.Provider value={{
            users: state.users,
            message: state.message,
            roles: state.roles,
            getUsers,
            addRole,
            getRoles
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
 
export default UserState;