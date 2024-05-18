import { NavLink } from "react-router-dom"

function HeaderComponent() { 
    return (
        <>
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">Student Management System</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active ">
                                    <NavLink className='nav-link' to = '/students'>Student</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}
export default HeaderComponent