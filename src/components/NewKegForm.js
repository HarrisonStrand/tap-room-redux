import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableKegForm from './ReusableKegForm';

function NewKegForm(props) {

	function handleNewKegFormSubmission(event) {
		event.preventDefault();
		props.onNewKegCreation({
			category: event.target.category.value,
			name: event.target.name.value.toUpperCase(),
			brand: event.target.brand.value,
			price: parseInt(event.target.price.value),
			ABV: parseInt(event.target.ABV.value),
			pints: parseInt(event.target.pints.value),
			id: v4()
		})
	}

  const newFormStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
    <div className='newform' style={newFormStyles}>
			<ReusableKegForm
				formSubmissionHandler = {handleNewKegFormSubmission}
				buttonText = 'Add Keg'/>
		</div>
    </>
  );
}

NewKegForm.propTypes = {
	onNewKegCreation: PropTypes.func
};

export default NewKegForm;