import React from 'react';
import PropTypes from 'prop-types';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => {
	return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
};

Cell.propTypes = {
	type: PropTypes.number.isRequired
};

export default Cell;
