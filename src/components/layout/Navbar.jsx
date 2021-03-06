import React, { Fragment, Component } from 'react';
import Jumbotron from './Jumbotron'

class Navbar extends Component {
  static defaultProps = {
    title: `React App`
  };

  render() {
    return (
      <Fragment>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a
            className='navbar-brand'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {this.props.title}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a
                  className='nav-link'
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Dropdown
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a
                    className='dropdown-item'
                    href='https://reactjs.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Courses
                  </a>
                  <a
                    className='dropdown-item'
                    href='https://getbootstrap.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Bootstrap
                  </a>
                  <div className='dropdown-divider'></div>
                  <a
                    className='dropdown-item'
                    href='https://reactjs.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Something else here
                  </a>
                </div>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link disabled'
                  href='https://reactjs.org/'
                  tabIndex='-1'
                  aria-disabled='true'
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button
                className='btn btn-outline-success my-2 my-sm-0'
                type='submit'
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <Jumbotron/>
      </Fragment>
    );
  }
}

export default Navbar;
