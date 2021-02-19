import React from 'react';
import PropTypes from 'prop-types';

function ReusableItemForm(props) {
  const FormStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
    <div className='form' style={FormStyles}>
			<form onSubmit={props.formSubmissionHandler}>
			<label for="category">Choose a Category:</label>
          <select name="category">
            <option value="KEG">KEG</option>
            <option value="SHIRT">SHIRT</option>
            <option value="SIXPACK">SIXPACK</option>
          </select>
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

ReusableItemForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
};

export default ReusableItemForm;