import React from 'react';

const DangerosityBar = ({ level }) => {
  return (
    <div className="wrapper_dangerosity">
      <p>Dangerosity:</p>
      <div className="dangerosity-bar">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`dangerosity-segment ${index < level ? 'filled' : 'empty'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DangerosityBar;