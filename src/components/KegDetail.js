import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {

	const { keg, onClickingDelete, onClickingPurchase } = props;

  const detailStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
    <div className='detail' style={detailStyles}>
			<h1>Keg Details</h1>
			<hr />
			<p>Name: {keg.name}</p>
			<p>Created by: {keg.brand}</p>
			<p>${keg.price}</p>
			<p>ABV: {keg.ABV}%</p>
			<p>Pints Remaining: {keg.pints}/124</p>
			<p>{keg.stock}</p>
			<button className='btn btn-info' onClick={()=> onClickingPurchase() }>Purchase</button>
			<button className='btn btn-info' onClick={ props.onClickingEdit }>Update Keg</button>
			<button className='btn btn-info' onClick={()=> onClickingDelete(keg.id) }>Delete</button>
		</div>
		</>
	);
}

KegDetail.propTypes = {
	keg: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
	onClickingPurchase: PropTypes.func,
}

export default KegDetail;