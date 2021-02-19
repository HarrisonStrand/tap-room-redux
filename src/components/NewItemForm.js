import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableItemForm from './ReusableItemForm';

function NewItemForm(props) {

	function handleNewItemFormSubmission(event) {
		event.preventDefault();
		props.onNewItemCreation({
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
			<ReusableItemForm
				formSubmissionHandler = {handleNewItemFormSubmission}
				buttonText = 'Add Item'/>
		</div>
    </>
  );
}

NewItemForm.propTypes = {
	onNewItemCreation: PropTypes.func
};

export default NewItemForm;