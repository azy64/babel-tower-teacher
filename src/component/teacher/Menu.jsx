/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import loginpng from '../../images/loginID.png';

function Menu({ menus }) {
  const user = useSelector((state) => state.login.user);
  return (
    <div className="menu">
      <div className="grid-photo">
        <div className="id">
          <img src={loginpng} alt="logo" width={140} />
        </div>
        <div className="info">
          <h2>
            {user.nom}
            {' '}
            <br />
            {' '}
            { user.prenom }
          </h2>
        </div>
      </div>
      <div style={{ margin: 'auto' }}>
        {menus.map((item) => (
          <NavLink
            to={`${item.url}`}
            key={item.id}
            style={(isActive) => ({
              display: 'inline-block',
              padding: '10px',
              margin: '1rem',
              backgroundColor: '#282c34',
              textDecoration: 'none',
              fontSize: '20px',
              color: isActive ? 'white' : '',
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>

  );
}

Menu.propTypes = {
  menus: PropTypes.array.isRequired,
};
export default Menu;
