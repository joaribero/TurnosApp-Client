import React, { useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { ADD_CONTACT_DATA, ADD_SOCIALS, ERR_CONTACT_DATA, ERR_LOGIN, ERR_REGISTER, ERR_SOCIALS, GET_USER, LOG_OUT } from '../../types/IndexTypes';
import clientAxios from '../../helpers/axiosHelper';

const AuthState = props => {

    const initialState = {
        user: {},
        role: null,
        authenticated: false,
        message: {
            text: null,
            category: null
        }
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
                    payload: response.data
                }) 
            } 
            if (response) {
                getUser();
            }
        } catch (error) {  
            console.log(error);
        }
    }

    //login con facebook
    const fbLogin = async () => {
        try {
            window.open("http://localhost:4000/auth/facebook","_self");
            getUser();
        } catch (error) {
            console.log(error);
        }
    }

    //login con google
    const googleLogin = async () => {
        try {
            window.open("http://localhost:4000/auth/google","_self");
            getUser();
        } catch (error) {
            console.log(error);
        }
    }

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

    //función para editar redes sociales del usuario
    const editSocials = async (socials) => {
        try {
            const response = await clientAxios.post('/addSocials', socials);
            if (response.data.error) {
                dispatch({
                    type: ERR_SOCIALS,
                    payload: response.data
                })
                return;
            }
            dispatch({
                type:ADD_SOCIALS,
                payload: response.data
            })
            getUser();
            
        } catch (error) {
            console.log(error);
        }
    }

    //funcion para editar los datos de contacto
    const editContactData = async (data) => {

        try {
            const response = await clientAxios.post('/setContactData', data);
            if (response.data.error) {
                dispatch({
                    type: ERR_CONTACT_DATA,
                    payload: response.data
                })
                return;
            }
            dispatch({
                type:ADD_CONTACT_DATA,
                payload: response.data
            })
            getUser();

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
                googleLogin,
                editSocials,
                editContactData
            }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;