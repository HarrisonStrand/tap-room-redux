import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {

	function handleNewKegFormSubmission(event) {
		event.preventDefault();
		props.onNewKegCreation({
			name: event.target.name.value.toUpperCase(),
			brand: event.target.brand.value,
			price: parseInt(event.target.price.value),
			ABV: parseInt(event.target.ABV.value),
			pints: parseInt(event.target.pints.value),
			id: v4()
		})
	}

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
					placeholder='Name'/>
        <input
          type='text'
          name='brand'
					placeholder='Brand'/>
        <input
          type='number'
          name='price'
					placeholder='Price'/>
        <input
          type='number'
          name='ABV'
					placeholder='ABV%'/>
        <input
          type='number'
          name='pints'
					placeholder='Pints'/>
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
	onNewKegCreation: PropTypes.func
};

export default NewKegForm;