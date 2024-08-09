import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

function LoginComponent (){

    // useState 객체 선언 및 초기 값, 변경함수 설정
    const [username, setUsername] = useState('ange1jun')
    const [password, setPassword] = useState('')

    // useState 객체 선언 및 초기 값, 변경함수 설정 (인증)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    // useNavigate Hook 사용
    const navigate = useNavigate()

    const authContext = useAuth()

    // 콘솔창에 로그띄우고, 입력값을 저장 (ID)
    function handleUsername(event) {
        setUsername(event.target.value);
    }

    // 콘솔창에 로그띄우고, 입력값을 저장 (PW)
    function handlePassword(event) {
        setPassword(event.target.value);
    }

    // submit 핸들러 함수
    async function handleSubmit(e) {
        e.preventDefault();
        if (await authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }

    }

    // // 삼항 연산자 사용해 일치하면 실행 불일치시 null 리턴
    // function SuccessMessageComponent(){
    //     return showSuccessMessage ? <div className='successMessage'>Authenticated Success.</div> : null;
    // }
    
    // // 삼항 연산자 사용해 일치하면 실행 불일치시 null 리턴
    // function FailedMessageComponent(){
    //     return showErrorMessage ? <div className='errorMessage'>Authenticated failed. Please check your credential !!!!</div> : null;
    // }

    return (
        <div className="Login">
            <h1> Please Log-in to use the service </h1>
            {showErrorMessage && <div className='errorMessage'>Authenticated failed. Please check your credential !!!!</div>}
            <form onSubmit={handleSubmit}>
            <div className="LoginForm">
                <div>
                <label>Username: </label>
                <input type="text" name="username" value={username} onChange={handleUsername}/>
                </div>
                <div>
                <label>Password: </label>
                <input type="password" name="password" value={password} onChange={handlePassword} />
                </div>
            </div>
            <div>
                <button type="submit" name="login" className="btn btn-outline-dark btn-lg" onClick={handleSubmit}>login</button>
            </div>
            </form>
        </div>
    )
}

export default LoginComponent