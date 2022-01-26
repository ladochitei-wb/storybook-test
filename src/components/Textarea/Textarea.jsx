import React from "react";
import PropTypes from 'prop-types';

import classes from './Textarea.module.css';

const Textarea = (props) => {
	return (
		<div className={classes.control}>
			<label htmlFor={props.id}>{props.label}</label>
			<textarea id={props.id} rows="5" {...props.args} data-testid={props.id} />
		</div>
	);
};

export default Textarea;

Textarea.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string
};