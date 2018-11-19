import React from 'react';

export default () => {
  const date = new Date();
  return (
    <footer className="container border-top pt-3">
      <div className="row">
        <div className="col-12">
          <p className="text-center font-weight-light small">
            React {React.version} - {date.toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  );
};
