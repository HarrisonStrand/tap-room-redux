import React from "react";
import ReusableKegForm from "./ReusableKegForm";
import PropTypes from 'prop-types';

function EditKegForm (props) {

	const { keg } = props;

	function handleEditKegFormSubmission(event) {
		event.preventDefault();
		props.onEditKeg({
			category: event.target.category.value,
			name: event.target.name.value,
			brand: event.target.brand.value,
			price: parseInt(event.target.price.value),
			ABV: parseInt(event.target.ABV.value),
			pints: parseInt(event.target.pints.value),
			id: keg.id
		});
	}

  const editFormStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
    <div className='editform' style={editFormStyles}>
			<ReusableKegForm
			formSubmissionHandler = {handleEditKegFormSubmission}
			buttonText = 'Update Keg' />
		</div>
		</>
	);
}

EditKegForm.propTypes = {
	keg: PropTypes.object,
	onEditKeg: PropTypes.func
}

export default EditKegForm;