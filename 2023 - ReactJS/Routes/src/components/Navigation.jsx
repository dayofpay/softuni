import { Link, NavLink } from "react-router-dom"


export default function Navigation(){
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SoftUni | Routes Lecture</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
            <Link to='/about' className="nav-link" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
            <Link to='/swapi' className="nav-link" aria-current="page">Swapi</Link>
        </li>
        <li className="nav-item">
            <Link to='/pricing' className="nav-link" aria-current="page">Pricing</Link>
        </li> */}

<li className="nav-item">
            <NavLink to='/' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/about' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/swapi' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page">Swapi</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/pricing' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} aria-current="page">Pricing</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/swapi'>Swapi</Link> */}
    </>
    )
}