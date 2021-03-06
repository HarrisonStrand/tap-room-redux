import React from 'react';
import PropTypes from 'prop-types';

function ReusableItemForm(props) {
  const FormStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
    <div className='card' id='reusableform' style={FormStyles}>
			<form onSubmit={props.formSubmissionHandler}>
				<div className='row'>
					<div className='col-md-6'>
						<select name="category">
							<option value="CHOOSE">Choose A Category</option>
							<option value="KEG">KEG</option>
							<option value="CLOTHING">CLOTHING</option>
							<option value="SIXPACK">SIXPACK</option>
						</select>
						<br></br>
						<br></br>
						<input
							type='text'
							name='name'
							placeholder='Name'/>
							<br></br>
							<br></br>
						<input
							type='text'
							name='brand'
							placeholder='Brand'/>
							<br></br>
							<br></br>
						<input
							type='number'
							min='0'
							name='price'
							placeholder='Price'/>
							<br></br>
							<br></br>
						</div>
					<div className='col-md-6'>
						<input
							type='number'
							min='0'
							name='amount'
							placeholder='Amount'/>
						<br></br>
						<br></br>
						<input
							type='number'
							min='0'
							name='ABV'
							placeholder='ABV%'/>
							<p>(if applicable)</p>
						<select name="size">
							<option value="SIZE">Choose A Size</option>
							<option value="XS">XS</option>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
						</select>
							<p>(if applicable)</p>
					</div>
				</div>
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