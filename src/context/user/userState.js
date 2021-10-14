import React, { useReducer } from 'react';
import UserReducer from './userReducer';
import UserContext from './userContext'
import clientAxios from '../../helpers/axiosHelper';
import { ADD_ROLE, ADD_STATE, ERR_ROLE, ERR_STATE, ERR_USERS, GET_ROLES, GET_STATES, GET_USERS } from '../../types/IndexTypes';

const UserState = (props) => {
    
    const initialState = {
        users: [],
        message: {
            text: null,
            category: null
        },
        roles: [],
        states: []
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    //función para obtener un listado de todos los usuarios.
    const getUsers = async () => {

        try {
            const response = await clientAxios.get('/users');
            if (response.data.error) {
                dispatch({
                    type: ERR_USERS,
                    payload: response.data
                })
            } else {
                dispatch({
                    type: GET_USERS,
                    payload: response.data
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    //función para agregar nuevos roles
    const addRole = async (data) => {
        try {
            const response = await clientAxios.post('/addRole', data);
            if (!response.data.error) {
                dispatch({
                    type: ADD_ROLE,
                    payload: response.data
                })
                getRoles();
            } else {
                dispatch({
                    type: ERR_ROLE,
                    payload: response.data
                })
            }      
        } catch (error) {
            console.log(error);
        }
    }

    //obtener roles
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

    //función para agregar nuevos estados de usuario.
    const addUserState = async (data) => {
        try {
            const response = await clientAxios.post('/addUserState', data);
            if (!response.data.error) {
                dispatch({
                    type: ADD_STATE,
                    payload: response.data
                })
                getUserStates();
            } else {
                dispatch({
                    type: ERR_STATE,
                    payload: response.data
                })
            }          
        } catch (error) {
            console.log(error);
        }
    }

    //obtener estados del usuario
    const getUserStates = async () => {
        try {
            const response = await clientAxios.get('/getUserStates');
            dispatch({
                type: GET_STATES,
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
            states: state.states,
            getUsers,
            addRole,
            getRoles,
            getUserStates,
            addUserState
        }}>
            {props.children}
        </UserContext.Provider>
    );
}
 
export default UserState;