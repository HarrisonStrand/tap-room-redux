import React from 'react';
import PropTypes from 'prop-types';

function ReusableKegForm(props) {
  const FormStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
    <div className='form' style={FormStyles}>
			<form onSubmit={props.formSubmissionHandler}>
				<input
					type='text'
					name='name'
					placeholder='Name'/>
					<br></br>
				<input
					type='text'
					name='brand'
					placeholder='Brand'/>
					<br></br>
				<input
					type='number'
					min='0'
					name='price'
					placeholder='Price'/>
					<br></br>
				<input
					type='number'
					min='0'
					name='ABV'
					placeholder='ABV%'/>
					<br></br>
				<input
					type='number'
					min='0'
					name='pints'
					placeholder='Pints'/>
					<br></br>
				<button className='btn btn-info'type='submit'>{props.buttonText}</button>
			</form>
		</div>
		</>
	);
}

ReusableKegForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
};

export default ReusableKegForm;