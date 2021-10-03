import React, { useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
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
            console.log(response.data);
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

    const fbLogin = async () => {
        try {
            window.open("http://localhost:4000/auth/facebook","_self");
            getUser();
        } catch (error) {
            console.log(error);
        }
    }

    const googleLogin = async () => {
        try {
            window.open("http://localhost:4000/auth/google","_self");
            getUser();
        } catch (error) {
            console.log(error);
        }
    }

    // TODO: Recibir directamente un objeto con todos los datos necesarios para registrar.
    //funcion para registrar usuarios
    const register = async (newUser) => {
        
        const {username, password, verifiedPassword, email, number, firstName, lastName} = newUser;

        //antes de enviar a registrar controlo que coincidan las contraseñas.
        if (password !== verifiedPassword) {
            dispatch({
                type: ERR_REGISTER,
                payload: "Las contraseñas no coinciden"
            })
            return;
        }
        
        const user = {
            username: username,
            password: password,
            email: email,
            number: number,
            firstName: firstName,
            lastName: lastName
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
            dispatch({
                type: ERR_REGISTER,
                payload: "Unexpected error"
            });
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
                logout,
                fbLogin,
                googleLogin
            }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;