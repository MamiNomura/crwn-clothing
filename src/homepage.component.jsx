import React from 'react';
import './homepage.styles.scss';

export const Homepage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HATS</h1>
          <span className='subtitle'>HATS</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKETS</h1>
          <span className='subtitle'>JACKETS</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>PANTS</h1>
          <span className='subtitle'>PANTS</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMEN</h1>
          <span className='subtitle'>WOMEN</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>MEN</h1>
          <span className='subtitle'>MEN</span>
        </div>
      </div>
    </div>
  </div>
);
