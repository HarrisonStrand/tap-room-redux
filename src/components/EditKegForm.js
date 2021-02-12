import React from "react";
import ReusableKegForm from "./ReusableKegForm";
import PropTypes from 'prop-types';

function EditKegForm (props) {

	const { keg } = props;

	function handleEditKegFormSubmission(event) {
		event.preventDefault();
		props.onEditKeg({
			name: event.target.name.value,
			brand: event.target.brand.value,
			price: parseInt(event.target.price.value),
			ABV: parseInt(event.target.ABV.value),
			pints: parseInt(event.target.pints.value),
			id: keg.id
		});
	}

	return (
		<>
			<ReusableKegForm
			formSubmissionHandler = {handleEditKegFormSubmission}
			buttonText = 'Update Keg' />
		</>
	);
}

EditKegForm.propTypes = {
	keg: PropTypes.object,
	onEditKeg: PropTypes.func
}