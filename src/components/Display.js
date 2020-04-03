import React from 'react';
import PropTypes from 'prop-types';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gaveOver, text }) => {
	return <StyledDisplay>{text}</StyledDisplay>;
};

Display.propTypes = {};

export default Display;
