import { useState } from "react";

const FORM_KEYS = {
    username : 'username',
    password : 'password',
    age : 'age',
}
const FORM_DATA = {
    username : '',
    password : '',
    age : '',
    gender : 'm',
}
export default function ControlledForm(){
    const [formValues,setFormValues] = useState(FORM_DATA)
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState('0');
    const changeHandler = (event) => {
        setFormValues(state => ({
            ...state,
            [event.target.name] : event.target.value,
        }))
    }
    // const usernameChangeHandler = (event) => {
    //     setUsername(event.target.value);
    // }

    const resetFormHandler = () => {
        // setUsername('');
        // setPassword('');
        // setAge('');

        setFormValues(
        {['username'] : ''
        ,['password'] : ''
        ,['age'] : ''});
    }

    // const passwordChangeHandler = (event) => {
    //     setPassword(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setAge(Number(event.target.value));
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    }

    return(
        <>
        <form onSubmit={submitHandler} method="POST">
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name={FORM_KEYS.username} id={FORM_KEYS.username} value={formValues.username} onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name={FORM_KEYS.password} id={FORM_KEYS.password} value={formValues.password} onChange={changeHandler} />
            </div>

            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" name={FORM_KEYS.age} id={FORM_KEYS.age} value={formValues.age} onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender">
                <option value='m' selected={FORM_DATA.gender === 'm'}>Male</option>
                <option value='f' selected={FORM_DATA.gender === 'f'}>Female</option>
                </select>
            </div>

            <button type="submit">Login</button>
        </form>
        <button onClick={resetFormHandler}>Reset</button>
        </>
    )
}