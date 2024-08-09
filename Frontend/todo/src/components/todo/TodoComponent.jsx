import { useNavigate, useParams } from "react-router-dom"
import { retreieveTodoApi, updateTodoApi, createTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'

function TodoComponent() {

    // id를 사용하기위한 useParams 사용
    const {id} = useParams();

    // description, targetDate 편집을위한 useState 사용
    const [description,setDescription] = useState('')
    const [targetDate,setTargetDate] = useState('')

    // username 사용하기위한 useAuth 사용
    const authContext = useAuth();
    const username = authContext.username

    // update submit후 돌아가기위한 useNavigate() 사용
    const navigate = useNavigate();

    // useEffect 훅을 사용하여 id가 변경될 때마다 retreieveTodo 함수 호출
    useEffect (
        () => retreieveTodo(),
        [id]
    )

    // todo 가져오는 함수 
    function retreieveTodo(){
        if(id != -1){
        retreieveTodoApi(username,id)
            .then(response =>{
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
            })
            .catch(error => console.log(error))
    }
}
 
    function onSubmit(values) {
        console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: values.done
        }
        console.log(todo) 

        if(id == -1){
            createTodoApi(username, todo)
                .then(response => {
                    navigate('/todos')
                })
                .catch(error => console.log(error))
        } else
            updateTodoApi(username, id, todo)
                .then(response => {
                    navigate('/todos')
                })
                .catch(error => console.log(error))
    
    }

    function validate(values) {
        let errors = { };

        if(values.description.length<5) {
            errors.description = 'Enter at least 5 characters!'
        }

        if(!values.targetDate || values.targetDate=='' || !moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter Date'
        }
        
        console.log(values)
        return errors;
    }

    return (
        <div className="container">
            <h1>Enter Todo details</h1>
            <div>
                <Formik initialValues={{description, targetDate}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}>
                {
                    (props) => (
                        <Form>
                            <ErrorMessage name="description"
                                          component="div"
                                          className="alert alert-warning">
                            </ErrorMessage>

                            <ErrorMessage name="targetDate"
                                          component="div"
                                          className="alert alert-warning">
                            </ErrorMessage>


                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description" />
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Targeting Date</label>
                                <Field type="date" className="form-control" name="targetDate" />
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Done</label>
                                <Field as="select" className="form-control" name="done">
                                    <option value="">-- Select --</option>
                                    <option value="true">Done</option>
                                    <option value="false">Not Yet</option>
                                </Field>
                            </fieldset>

                            <button className="btn btn-success m-5" type="submit" >Save</button>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>

    )
}


export default TodoComponent