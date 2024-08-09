import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function HeaderComponent (){
    // 어느 컴포넌트에서나 context를 사용    
    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated

    function logout () {
        authContext.logout()
    }

    // console.log("Header - isAuthenticated", isAuthenticated);
    // console.log(HeaderComponent.className)

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a 
                            className="navbar-brand ms-2 fs-2 fw-bold text-black" 
                            href="https://github.com/ange1jun" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            ange1jun
                        </a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {isAuthenticated && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/welcome/${username}">Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/todos">
                                                Todo
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            {!isAuthenticated ? (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout" onClick={logout}>
                                        Logout
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent