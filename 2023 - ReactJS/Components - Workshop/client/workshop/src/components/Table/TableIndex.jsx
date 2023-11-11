import { useEffect,useState } from "react";
import Head from "./Head"
import User from "./User"
export default function Table(){

    const [users,setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users/').then(response => response.json()).then(
            data => {
                const result = Object.values(data);
                setUser(result);
            }
        )
    },[])
    return (
        <>
        <div className="table-wrapper">
        <table className="table">
            <Head/>
            <tbody>
            {users.map((user,index) =>
             <User id={user._id} firstName={user.firstName} lastName={user.lastName} email={user.email} phoneNumber={user.phoneNumber} createdAt={user.createdAt} key={index}/>)}
            </tbody>
            
        </table>
        </div>
        <button className="btn-add btn">Add new user</button>
        </>
    )
}