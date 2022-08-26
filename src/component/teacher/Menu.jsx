/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Menu({ menus }) {
  return (
    <div>
      {menus.map((item) => (
        <NavLink
          to={`${item.url}`}
          key={item.id}
          style={(isActive) => ({
            display: 'block',
            margin: '1rem 0',
            color: isActive ? 'red' : '',
          })}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

Menu.propTypes = {
  menus: PropTypes.array.isRequired,
};
export default Menu;
