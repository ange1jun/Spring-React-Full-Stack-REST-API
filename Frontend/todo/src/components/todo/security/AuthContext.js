import React, { useContext, createContext, useState} from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

// context 생성
export const AuthContext = createContext()

// useContext improve (useContext Hook)
export const useAuth = () => useContext(AuthContext)

// 다른 컴포넌트와 공유하기위한 함수
export function AuthProvider ({ children }) {
    // 인증여부를 위한 useState
    const [isAuthenticated, setAuthenticated] = useState(false)

    // username context
    const [username, setUsername] = useState(null)

    // token context
    const [token, setToken] = useState(null)

    // //login 
    // async function login (username, password) {

    //     // token 생성
    //     const baToken = 'Basic ' + window.btoa( username + ":" + password )

    //     try {

    //         const response = await executeBasicAuthenticationService(baToken)

    //         // login logic
    //         if (response.status === 200) {
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(
                
    //                 (config) => {
    //                     console.log('intercepting and adding token')
    //                     config.headers.Authorization = baToken
    //                     return config
    //                 }

    //             )

    //             return true 
    //         } else {
    //             logout()
    //             return false 
    //         }
    //     } catch(error) {
    //         logout()
    //         return false 
    //     }
    // } 

    //login 
    async function login (username, password) {

        // // token 생성
        // const baToken = 'Basic ' + window.btoa( username + ":" + password )

        try {

            const response = await executeJwtAuthenticationService(username, password)

            // login logic
            if (response.status === 200) {
                
                const jwtToken = 'Bearer ' + response.data.token
                
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                
                    (config) => {
                        console.log('intercepting and adding token')
                        config.headers.Authorization = jwtToken
                        return config
                    }

                )

                return true 
            } else {
                logout()
                return false 
            }
        } catch(error) {
            logout()
            return false 
        }
    } 

    //logout
    function logout(){
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    // AuthContext.Provider 사용해 인증 관련 데이터 제공
        return (
            <AuthContext.Provider value= {{isAuthenticated, login, logout, username, token}}>
                {children}
            </AuthContext.Provider>
    )
}

export default AuthProvider;
