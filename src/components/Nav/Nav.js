import React, { Component } from 'react';
import avatar from '../../data/ski-avatar.png'
import snowflake from '../../data/snowflake.png'
import logo from '../../data/DDR-logo.png'
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <nav className='nav-bar'>
        <img className='logo-img' src={ logo } alt='DDR logo' />
        <h3 className='welcome-msg'>Welcome interpolate Name! Thanks for choose DDR for your Radical Adventure</h3>
        <div className='user-display'>
          <h3 className='user-info'>Marcus Kleveland</h3>
          <h3 className='user-info'>SwedeshSkiTeam@sendit.com</h3>
        </div>
        <img className='avatar-img user-info' src={ avatar } alt='winter avatar with beanie and goggles' />
        <h3 className='user-info'>Logout</h3>
        <img className='snowflake user-info' src={ snowflake } alt='snowflake favorite icon' />
      </nav>
    )
  }
}

export default Nav;