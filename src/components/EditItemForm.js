import React from "react";
import ReusableItemForm from "./ReusableItemForm";
import PropTypes from 'prop-types';

function EditItemForm (props) {

	const { item } = props;

	function handleEditItemFormSubmission(event) {
		event.preventDefault();
		props.onEditItem({
			category: event.target.category.value,
			name: event.target.name.value,
			brand: event.target.brand.value,
			price: parseInt(event.target.price.value),
			ABV: parseInt(event.target.ABV.value),
			pints: parseInt(event.target.pints.value),
			id: item.id
		});
	}

  const editFormStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
    <div className='editform' style={editFormStyles}>
			<ReusableItemForm
			formSubmissionHandler = {handleEditItemFormSubmission}
			buttonText = 'Update Item' />
		</div>
		</>
	);
}

EditItemForm.propTypes = {
	item: PropTypes.object,
	onEditItem: PropTypes.func
}

export default EditItemForm;