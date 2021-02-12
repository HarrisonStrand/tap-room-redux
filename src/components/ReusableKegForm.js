import React from 'react';
import PropTypes from 'prop-types';

function ReusableKegForm(props) {
	return (
		<>
			<form onSubmit={props.formSubmissionHandler}>
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
					min='0'
					name='price'
					placeholder='Price'/>
				<input
					type='number'
					min='0'
					name='ABV'
					placeholder='ABV%'/>
				<input
					type='number'
					min='0'
					max='124'
					name='pints'
					placeholder='Pints'/>
				<button type='submit'>{props.buttonText}</button>
			</form>
		</>
	);
}

ReusableKegForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
};

export default ReusableKegForm;