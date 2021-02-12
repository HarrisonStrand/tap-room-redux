import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {

	const { keg, onClickingDelete, onClickingPurchase } = props;

	return (
		<>
			<h1>Keg Details</h1>
			<hr />
			<p>Name: {keg.name}</p>
			<p>Created by: {keg.brand}</p>
			<p>${keg.price}</p>
			<p>ABV: {keg.ABV}%</p>
			<p>Pints Remaining: {keg.pints}/124</p>
			<button onClick={ props.onClickingEdit }>Update Item</button>
			<button onClick={()=> onClickingDelete(item.id) }>Delete</button>
		</>
	);
}

KegDetail.propTypes = {
	keg: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
}

export default KegDetail;