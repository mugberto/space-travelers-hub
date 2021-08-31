import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ logo, routes }) => (
  <header>
    <div className="brand-logo">
      <img src={logo} alt="logo" height="100" width="100" />
    </div>
    <nav>
      <ul>
        {routes.map(({ name, path }) => (
          <li key={path} className="nav-link">
            <NavLink exact to={path}>{name}</NavLink>
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
