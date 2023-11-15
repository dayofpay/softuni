export default function UnControlledForm(){
    return(
        <>
        <h1>Uncontroller form</h1>

        <form action="http://localhost:3030/jsonstore/members" method="POST">
            <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
            </div>
            <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
        </>
    )
}