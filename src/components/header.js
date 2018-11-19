import React from 'react';
import { Link } from '@reach/router';

const bottomStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0
};

export default () => (
  <header className="container border-bottom">
    <div className="row">
      <div className="col-4">
        <h1>React</h1>
      </div>
      <div className="col-8">
        <div style={bottomStyle} className="pb-2 pr-3">
          <span>
            <Link to="/">Home</Link> | <Link to="about">About</Link>
          </span>
        </div>
      </div>
    </div>
  </header>
);
