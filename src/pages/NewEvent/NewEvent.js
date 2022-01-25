import React from "react";
import EventForm from "../../components/EventForm/EventForm";

const NewEvent = () => {
	const submitEvent = (data) => {
		console.log(data);
	};
	return (
		<section>
			<h2>Create new event</h2>
			<EventForm submitEvent={submitEvent} />
		</section>
	);
};

export default NewEvent;