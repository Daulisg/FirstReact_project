import React, { Component } from 'react';

export class Jumbotron extends Component {
  render() {
    return (
      <div className='jumbotron container'>
        <h1 className='display-4'>Hello, React!</h1>
        <p className='lead'>
          This is a quick one page App crated while learning React.
        </p>
        <a
          className='btn btn-primary btn-lg'
          href='https://reactjs.org/'
          target='_blank'
          role='button'
          rel='noopener noreferrer'
        >
          Learn more
        </a>
      </div>
    );
  }
}

export default Jumbotron;
