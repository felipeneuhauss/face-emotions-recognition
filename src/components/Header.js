import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: 'Task Tracker App'
}

Header.propTypes = {
  title: [PropTypes.string, PropTypes.isRequired]
}

export default Header;
