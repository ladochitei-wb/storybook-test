import React, { useRef } from "react";
import PropTypes from "prop-types";
import classes from "./EventForm.module.css";

import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

const EventForm = (props) => {
	const titleInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const submitFormHandler = (event) => {
		event.preventDefault();
		const title = titleInputRef.current.value;
		const address = addressInputRef.current.value;
		const description = descriptionInputRef.current.value;
		const data = {
			title,
			address,
			description
		};
		props.submitEvent(data);
	};

	return (
		<form className={classes.form} onSubmit={submitFormHandler}>
			<Input id="title" label="Event title" inputType="text" args={{ref: titleInputRef}} />
			<Input id="address" label="Address" inputType="text" args={{ref: addressInputRef}} />
			<Textarea id="description" label="Description" args={{ref: descriptionInputRef}} />
			<div className={classes.actions}>
				<button>Create event</button>
			</div>
		</form>
	)
};

export default EventForm;

EventForm.propTypes = {
	/**
	 * Function that makes the ajax request in order to create a new event
	 */
	submitEvent: PropTypes.func
};