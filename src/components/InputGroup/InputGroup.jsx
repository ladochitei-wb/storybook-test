import React from "react";
import PropTypes from 'prop-types';
import classes from './InputGroup.module.css';

const InputGroup = (props) => {
	return (
		<div className={classes.control}>
			<label htmlFor={props.id}>{props.label}</label>
			<input type={props.inputType} id={props.id} data-testid={props.id} {...props.args} />
		</div>
	);
};

export default InputGroup;

InputGroup.propTypes = {
	/**
	 * The id of the input, used also for label tag
	 */
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	inputType: PropTypes.string
};