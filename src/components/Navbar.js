import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return <ul>
    <li>
      <NavLink to="/" className={(navdata)=>navdata.isActive?'active':'non-active'}>Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
  </ul>
}
export default Navbar