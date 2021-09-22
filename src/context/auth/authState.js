import React, {useEffect, useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import { ERR_LOGIN, ERR_REGISTER, GET_USER, LOG_OUT } from '../../types/IndexTypes';
import clientAxios from '../../helpers/axiosHelper';

const AuthState = props => {

    const initialState = {
        user: {},
        role: null,
        authenticated: false,
        message: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);


    //obtengo el usuario logueado.
    const getUser = async () => {
        
        try {
            const response = await clientAxios.get('/user');
            if (response) {
                dispatch({
                    type: GET_USER,
                    payload: response.data
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    //cuando el usuario se loguea.
    const login = async (loginUsername, loginPassword) => {
        
        const user  = {
            username: loginUsername,
            password: loginPassword
        }

        try {
            const response = await clientAxios.post('/login',user);
            if (response.data.error) {
                dispatch({
                    type: ERR_LOGIN,
                    payload: response.data.error
                }) 
            } 
            if (response) {
                getUser();
            }
        } catch (error) {  
            console.log(error);
        }
    }

    // TODO: Recibir directamente un objeto con todos los datos necesarios para registrar.
    //funcion para registrar usuarios
    const register = async (registerUsername, registerPassword) => {
        
        const user = {
            username: registerUsername,
            password: registerPassword
        };

        try {
            const response = await clientAxios.post('/register', user);
            if (response.data.error) {
                dispatch({
                    type: ERR_REGISTER,
                    payload: response.data.error
                }) 
            } 
            if (response) {
                getUser();
            }
        } catch (error) {
            console.log(error);
        }            
    };

    //función para desloguearse
    const logout = async () => {
        try {
            await clientAxios.get('/logout');

            dispatch({
                type: LOG_OUT
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider 
            value={{
                user: state.user,
                role: state.role,
                authenticated: state.authenticated,
                message: state.message,
                getUser,
                login,
                register,
                logout
            }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;