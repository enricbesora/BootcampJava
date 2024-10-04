import React from 'react';

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="row">
      <div className="col s12 center-align">
        <button className="btn" onClick={onClick}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default LoadMoreButton;
