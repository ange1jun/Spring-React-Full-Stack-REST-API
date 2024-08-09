import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { error } from 'jquery';
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { AuthContext, useAuth } from './security/AuthContext';

function WelcomeComponent (){    
    
    // useParams 객체 생성 후 직접 할당받아 사용
    const {username} = useParams()

    // token 사용을 위한 authContext 객체 선언
    const AuthContext = useAuth()

    // restAPI 호출을 위한 useState 정의
    const [message, setMessage] = useState(null)
    
    function callRestApi(){
        console.log("called")
        
        retrieveHelloWorldPathVariable(username, AuthContext.token)
                .then(response => successfulResponse(response) )
                .catch (error =>errorResponse(error) )
                .finally (() => console.log("clean up"))
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(){
        console.log(error)
    }

    return (
        <div className="Welcome">
            <div>
            <h1> Hi, {username} welcome</h1>
                <div>
                    Manage Your Todos - <Link to="/todos">Go here</Link>
                </div>
                <div>
                    <button className="btn btn-success m-5" onClick={callRestApi}>
                        Call REST API</button>
                </div>
                <div className='text-info'>{message}</div>
            </div>
        </div>
    )
}

export default WelcomeComponent