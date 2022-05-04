import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="header">
      <h1 className="title">Math Magicians</h1>
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'notActive')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? 'active' : 'notActive')}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quote"
            className={({ isActive }) => (isActive ? 'active' : 'notActive')}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
