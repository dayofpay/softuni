import { useState } from "react";

const FORM_KEYS = {
    username : 'username',
    password : 'password',
    age : 'age',
}
export default function ControlledForm(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState('0');
    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const resetFormHandler = () => {
        setUsername('');
        setPassword('');
        setAge('');
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(Number(event.target.value));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(age);
        resetFormHandler();
    }

    return(
        <>
        <form onSubmit={submitHandler} method="POST">
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name={FORM_KEYS.username} id={FORM_KEYS.username} value={username} onChange={usernameChangeHandler}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name={FORM_KEYS.password} id={FORM_KEYS.password} value={password} onChange={passwordChangeHandler} />
            </div>

            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" name={FORM_KEYS.age} id={FORM_KEYS.age} value={age} onChange={ageChangeHandler} />
            </div>

            <button type="submit">Login</button>
        </form>
        <button onClick={resetFormHandler}>Reset</button>
        </>
    )
}