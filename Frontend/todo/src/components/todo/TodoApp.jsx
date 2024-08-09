import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
// import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent';
import TodoComponent from './TodoComponent'
import AuthProvider, { useAuth } from './security/AuthContext';


import './TodoApp.css'


function AuthenticatedRoute( {children} ) {
        const authContext = useAuth()

        if(authContext.isAuthenticated){
            return children;
        } else{
            
        return <Navigate to="/" />;
        }
}

function TodoApp (){
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        {/* 기본 경로 */}
                        <Route path="/" element={<LoginComponent />} />

                        {/* 로그인 페이지 */}
                        <Route path="/login" element={<LoginComponent />} />
                        
                        {/* 인증 필요 페이지 */}
                        <Route 
                            path="/welcome/:username" 
                            element={
                                <AuthenticatedRoute>
                                    <WelcomeComponent />
                                </AuthenticatedRoute>
                            } 
                        />

                        <Route 
                            path="/todos" 
                            element={
                                <AuthenticatedRoute>
                                    <ListTodosComponent />
                                </AuthenticatedRoute>
                            } 
                        />

                        <Route 
                            path="/todos/:id" 
                            element={
                                <AuthenticatedRoute>
                                    <TodoComponent />
                                </AuthenticatedRoute>
                            } 
                        />

                        <Route 
                            path="/logout" 
                            element={
                                <AuthenticatedRoute>
                                    <LogoutComponent />
                                </AuthenticatedRoute>
                            } 
                        />
                        
                        {/* 에러 페이지 */}
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    {/* <FooterComponent /> */}
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

export default TodoApp;
