import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props) {

	const { item, onClickingDelete, onClickingPurchase } = props;

  const detailStyles = {
    color: '#E4E4E4'
  }

	if(props.item.category === 'KEG') {
		return (
			<>
			<div className='detail' style={detailStyles}>
				<h1>Keg Details</h1>
				<p>Name: {item.name}</p>
				<p>Brewery: {item.brand}</p>
				<p>${item.price}</p>
				<p>ABV: {item.ABV}%</p>
				<p>Pints Remaining: {item.amount}/124</p>
				<p>{item.stock}</p>
				<button className='btn btn-info' onClick={()=> onClickingPurchase() }>Purchase</button>
				<button className='btn btn-info' onClick={ props.onClickingEdit }>Update Item</button>
				<button className='btn btn-info' onClick={()=> onClickingDelete(item.id) }>Delete</button>
			</div>
			</>
		);
	} else if (props.item.category === 'CLOTHING') {
		return (
			<>
			<div className='detail' style={detailStyles}>
				<h1>Clothing Details</h1>
				<p>Name: {item.name}</p>
				<p>Brand: {item.brand}</p>
				<p>Size: {item.size}</p>
				<p>${item.price}</p>
				<p>Remaining: {item.amount}</p>
				<p>{item.stock}</p>
				<button className='btn btn-info' onClick={()=> onClickingPurchase() }>Purchase</button>
				<button className='btn btn-info' onClick={ props.onClickingEdit }>Update Item</button>
				<button className='btn btn-info' onClick={()=> onClickingDelete(item.id) }>Delete</button>
			</div>
			</>
		);
	} else if (props.item.category === 'SIXPACK') {
		return (
			<>
			<div className='detail' style={detailStyles}>
				<h1>Six-Pack Details</h1>
				<p>Name: {item.name}</p>
				<p>Brewery: {item.brand}</p>
				<p>${item.price}</p>
				<p>ABV: {item.ABV}%</p>
				<p>Packs Remaining: {item.amount}</p>
				<p>{item.stock}</p>
				<button className='btn btn-info' onClick={()=> onClickingPurchase() }>Purchase</button>
				<button className='btn btn-info' onClick={ props.onClickingEdit }>Update Item</button>
				<button className='btn btn-info' onClick={()=> onClickingDelete(item.id) }>Delete</button>
			</div>
			</>
		);
	} else if (props.item.category === 'CHOOSE') {
		return (
			<>
			<div className='detail' style={detailStyles}>
				<h3>Please add a category to this Item in order to see details.</h3>
				<button className='btn btn-info' onClick={ props.onClickingEdit }>Update Item</button>
				<button className='btn btn-info' onClick={()=> onClickingDelete(item.id) }>Delete</button>
			</div>
			</>
		);
	}

}

ItemDetail.propTypes = {
	filterVar: PropTypes.string,
	item: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
	onClickingPurchase: PropTypes.func,
}

export default ItemDetail;