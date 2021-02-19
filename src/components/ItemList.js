import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props) {

  const listStyles = {
    color: '#E4E4E4'
  }

	let itemArr = [];

	for(const item in props.itemList) {
		if(props.filterVar === 'ALL') {
			itemArr.push(props.itemList[item]);
		} else if(props.itemList[item].category === props.filterVar) {
			itemArr.push(props.itemList[item]);
		}
	}

  return (
    <>
			<div className = "itemList">
			<button className= 'btn btn-info' onClick={() => props.changeFilterType('KEG') }>KEG</button>
			<button className= 'btn btn-info' onClick={() => props.changeFilterType('CLOTHING') }>CLOTHING</button>
			<button className= 'btn btn-info' onClick={() => props.changeFilterType('SIXPACK') }>SIX PACK</button>
			<button className= 'btn btn-info' onClick={() => props.changeFilterType('ALL') }>See All Items</button>
		<h2>Item List:</h2>
    <div className='list' style={listStyles}>
			{Object.values(itemArr).map((item) => 
			<Item
				whenItemClicked = {props.onItemSelection}
				category = {item.category}
				name = {item.name}
				brand = {item.brand}
				price = {item.price}
				ABV = {item.ABV}
				amount = {item.amount}
				size = {item.size}
				id = {item.id}
				key = {item.id} />
				)}
			</div>
			</div>
		</>
	)
}

ItemList.propTypes = {
  itemList: PropTypes.object,
	onItemSelection: PropTypes.func,
	changeFilterType: PropTypes.func,
	filterVar: PropTypes.string
};

export default ItemList;