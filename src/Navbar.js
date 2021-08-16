import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>SteveBecmpe React Portfolio</h1>
            <div className="links">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/projects" exact>Projects</NavLink>
                {/* <a href="/about">About</a> */}
            </div>
        </nav>
      );
}
 
export default Navbar;
