import React from 'react';
import PropTypes from 'prop-types';

const ColorItem = props => {
  const { color, value } = props;
  return (
    <span
      className="rounded-circle"
      title={color}
      style={{
        display: 'inline-block',
        height: '1.5rem',
        width: '1.5rem',
        border: '1px solid black',
        margin: '0 0.2rem',
        background: value,
      }}
    ></span>
  );
};

ColorItem.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ColorItem;
