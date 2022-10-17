import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    return (
        <>
        <div className="nav+header">
            <nav className="navigation">
            <ul className="nav-ul">
            <Link to="/">Search VODs</Link>
            <Link to="/submit">Submit VODs</Link>
            <Link to="/about">About/Contact</Link>
            </ul>
    </nav><div className="header1">One More Once</div>
    </div>
    </>
    
    )

}