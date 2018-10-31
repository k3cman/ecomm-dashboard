import React from 'react';

const Card = props => {
  let styles = {
    width: props.width,
    height: props.height
  };
  return (
    <div className="card" style={styles}>
      {props.children}
    </div>
  );
};

export default Card;
