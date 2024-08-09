import React from 'react';
// import { useAuth } from './security/AuthContext';

function FooterComponent (){

    // 어느 컴포넌트에서나 context를 사용
    // const authContext= useContext(AuthContext)

    // const authContext = useAuth();

    // console.log(`Footer Component - ${authContext.number}`)

    return (
        <footer className="Footer">
            <div className='container'>
             Your footer
             </div>
        </footer>
    )
}

export default FooterComponent;