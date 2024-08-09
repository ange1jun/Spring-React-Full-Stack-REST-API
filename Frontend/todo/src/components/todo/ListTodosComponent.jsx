import React, { useEffect, useState } from 'react';
import { retrieveAllTodoUserApi, deleteTodoApi, checkTodoApi } from './api/TodoApiService';
import { useAuth } from './security/AuthContext';
import { useNavigate } from 'react-router-dom';


function ListTodosComponent (){

    //today, targetDate 객체 정의
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    // username context 사용을위한 함수객체 
    const userContext = useAuth();
    const username = userContext.username

    // 특정 id의 todo를 매핑하기위한 useNavigate() 사용
    const navigate = useNavigate();

    // REST API 가져오기위한 useState() 객체
    const [todos, setTodos] = useState([])

    // 삭제 알림을 위한 useState() 객체
    const [message, setMessage] = useState(null)


    //리스트 하드코딩
    // const todos = [
    //                 // {id:1 , description:'Learn AWS Service', done:false, targetDate:targetDate},
    //                 // {id:2 , description:'Learn Google Cloud Platform', done:false, targetDate:targetDate},
    //                 // {id:3 , description:'Learn Azure Service', done:false, targetDate:targetDate},
    //                 // {id:4 , description:'Learn Naver Cloud Service', done:false, targetDate:targetDate}
    //                 ]   


    // REST API에서 가져오기위한 useEffect, refreshTodos 함수 정의
    useEffect (() => refreshTodos(), [] )

    // todo 가져오기위한 함수
    function refreshTodos() {

        retrieveAllTodoUserApi(username)
        .then(response => {
        // console.log(response)
            setTodos(response.data)
            }
        )
        .catch(error => console.log(error))
    
    }

    // Delete 함수 (특정 번호와 매핑)
    function deleteTodo(id) {
        console.log("delete!"+id)

        deleteTodoApi(username,id)
        .then(

                () => {
                    setMessage(`Delete of todo with ID=${id} succesful!`)
                    refreshTodos()
                }
        )
        .catch(error => console.log(error))
    }

    // Update 함수 (특정 번호와 매핑)
    function updateTodo(id) {
        console.log("update!"+id)
    // id 함수가 들어가기 때문에 백틱 사용
        navigate(`/todos/${id}`)
    }

    function addTodo(id) {
        navigate(`/todos/-1`)
    }

    return (
        <div className="container">
            <h1> Things you wnat to do </h1>
            {message && <div className='alert alert-warning'>{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map (
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done ? 'Done!' : 'Not Yet..'}</td>
                                        {/* <td>{todo.done.toString()}</td> */}
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td> <button className="btn btn-danger m-1" 
                                                onClick={() => deleteTodo(todo.id)}>Delete </button></td>
                                        <td> <button className="btn btn-success m-1" 
                                                onClick={() => updateTodo(todo.id)}>Update </button></td>
                                    </tr>
                                    
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='btn btn-success m-3' onClick={addTodo}> Create New Todo </div>
        </div>
    )
}

export default ListTodosComponent