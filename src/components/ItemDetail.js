import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props) {

	const { item, onClickingDelete, onClickingPurchase } = props;

  const detailStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
    <div className='detail' style={detailStyles}>
			<h1>Item Details</h1>
			<p>Category: {item.category}</p>
			<p>Name: {item.name}</p>
			<p>Brewery: {item.brand}</p>
			<p>${item.price}</p>
			<p>ABV: {item.ABV}%</p>
			<p>Pints Remaining: {item.pints}/124</p>
			<p>{item.stock}</p>
			<button className='btn btn-info' onClick={()=> onClickingPurchase() }>Purchase</button>
			<button className='btn btn-info' onClick={ props.onClickingEdit }>Update Item</button>
			<button className='btn btn-info' onClick={()=> onClickingDelete(item.id) }>Delete</button>
		</div>
		</>
	);
}

ItemDetail.propTypes = {
	item: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
	onClickingPurchase: PropTypes.func,
}

export default ItemDetail;