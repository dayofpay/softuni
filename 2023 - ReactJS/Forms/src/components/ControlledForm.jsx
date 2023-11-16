import { useState } from "react";

const FORM_KEYS = {
    username : 'username',
    password : 'password',
    age : 'age',
    interests : {
        swimming: 'swimming',
        running : 'running',
    }
}
const FORM_DATA = {
    username : '',
    password : '',
    age : '',
    gender : 'm',
    swimming : false,
    running : false,
}
export default function ControlledForm(){
    const [formValues,setFormValues] = useState(FORM_DATA)
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState('0');
    const [ageError,setAgeError] = useState('');
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

    const onCheckBoxChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.checked);
        setFormValues(state => ({
            ...state,
            [FORM_KEYS.interests[event.target.name]] : event.target.checked,

        }))
    }

    const ageValidator = () => {
        console.log(formValues.age);
        if(formValues.age < 1 || formValues.age > 120){
            setAgeError('Error: Age can not be bellow 0 or over 120');
        }
        else{
            setAgeError('');
        }
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
                <input type="number" onBlur={ageValidator} name={FORM_KEYS.age} id={FORM_KEYS.age} value={formValues.age} onChange={changeHandler} />
            </div>

            {ageError && (
                <p style={{color:'red'}}>{ageError}</p>
            )}
            <div>
                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender">
                <option value='m' selected={FORM_DATA.gender === 'm'}>Male</option>
                <option value='f' selected={FORM_DATA.gender === 'f'}>Female</option>
                </select>
            </div>

            <div>
                <h3>Hobbies</h3>
                <label htmlFor="swimming">Swimming</label>
                <input type="checkbox" name="swimming" id="swimming" checked={formValues['swimming']} onChange={onCheckBoxChange}/>
                <label htmlFor="running">Running</label>
                <input type="checkbox" name="running" id="running" checked={formValues['running']} onChange={onCheckBoxChange}/>
            </div>

            <button type="submit" disabled={ageError}>Login</button>
        </form>
        <button onClick={resetFormHandler}>Reset</button>
        </>
    )
}