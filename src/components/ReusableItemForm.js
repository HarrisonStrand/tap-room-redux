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
				<select name="category">
					<option value="CHOOSE">Choose A Category</option>
					<option value="KEG">KEG</option>
					<option value="CLOTHING">CLOTHING</option>
					<option value="SIXPACK">SIXPACK</option>
				</select>
				<br></br>
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
					name='amount'
					placeholder='Amount'/>
					<br></br>
				<select name="size">
					<option value="SIZE">Choose A Size</option>
					<option value="XS">XS</option>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="XL">XL</option>
					<option value="XXL">XXL</option>
				</select>
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