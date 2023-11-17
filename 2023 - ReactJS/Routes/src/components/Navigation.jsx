import { Link } from "react-router-dom"
import About from "./About"

export default function Navigation(){
    return (
    <>
        <h1>Navigation</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </>
    )
}