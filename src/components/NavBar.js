import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    // <div style={{ textAlign: 'right', borderBottom: '2px solid black', paddingBottom: '1px', marginBottom: '1px' }}>
    <div className='App-nav'>
      <NavLink
        className="App-nav"
        style={{
          display: 'inline-block',
          textAlign: 'right',
          marginLeft: '500px',
          textDecoration: 'none'
        }}
        activeStyle={{ color: '#86B404' }}
        to="/about"
        >
          About
        </NavLink>

      <NavLink
        className="App-nav"
        exact
        style={{
          display: 'inline-block',
          textAlign: 'right',
          textDecoration: 'none'
        }}
        activeStyle={{ color: '#86B404' }}
        to="/budget"
      >
        My Budget
      </NavLink>

      <NavLink
        className="App-nav"
        style={{
          display: 'inline-block',
          textAlign: 'right',
          textDecoration: 'none'
        }}
        activeStyle={{ color: '#86B404' }}
        to="/budget/expenses"
      >
        Expenses
      </NavLink>

      <NavLink
        className="App-nav"
        style={{
          display: 'inline-block',
          textAlign: 'right',
          textDecoration: 'none'
        }}
        activeStyle={{ color: '#86B404' }}
        to="/budget/income"
      >
        Income
      </NavLink>

        <NavLink
          className="App-nav"
          style={{
            display: 'inline-block',
            textAlign: 'right',
            textDecoration: 'none'
          }}
          activeStyle={{ color: '#86B404' }}
          to="/budget/edit"
        >
          Setup
        </NavLink>

    </div>
  );
}

export default NavBar;
