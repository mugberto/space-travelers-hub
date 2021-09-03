import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ logo, routes }) => (
  <header>
    <div className="brand-logo">
      <img src={logo} alt="logo" height="40" width="40" />
      <span>Space Travelers&apos; Hub</span>
    </div>
    <nav>
      <ul className="nav-links">
        {routes.map(({ name, path }) => (
          <li key={path} className="nav-link">
            <NavLink className="nav-link" activeClassName="active" exact to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
