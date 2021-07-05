import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '@/router/routes';

const AppHeaderBar: FC = ({ children, ...rest }) => (
  <div {...rest} className="header-bar">
    <ul className="menu-main">
      <li>
        <NavLink activeClassName="active" exact to={routes.home.path}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to={routes.about.path}>
          About
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AppHeaderBar;
