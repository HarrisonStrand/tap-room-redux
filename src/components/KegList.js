import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {

  const listStyles = {
    color: '#E4E4E4'
  }

	let itemArr = [];

	for(const item in props.kegList) {
		if(props.filterVar === 'ALL') {
			itemArr.push(props.kegList[item]);
		} else if(props.kegList[item].category === props.filterVar) {
			itemArr.push(props.kegList[item]);
		}
	}

  return (
    <>
			<div className = "itemList">
			<button className= 'btn btn-info' onClick={() => props.changeFilterType('KEG') }>KEG</button>
			<button className= 'btn btn-info' onClick={() => props.changeFilterType('SHIRT') }>SHIRT</button>
			<button className= 'btn btn-info' onClick={() => props.changeFilterType('SIXPACK') }>SIX PACK</button>
			<button className= 'btn btn-info' onClick={() => props.changeFilterType('ALL') }>See All Items</button>
			<hr/>
		<h2>Keg List:</h2>
    <div className='list' style={listStyles}>
			{Object.values(itemArr).map((keg) => 
			<Keg
				whenKegClicked = {props.onKegSelection}
				category = {keg.category}
				name = {keg.name}
				brand = {keg.brand}
				price = {keg.price}
				ABV = {keg.ABV}
				pints = {keg.pints}
				id = {keg.id}
				key = {keg.id} />
				)}
			</div>
			</div>
		</>
	)
}

KegList.propTypes = {
  kegList: PropTypes.object,
	onKegSelection: PropTypes.func,
	changeFilterType: PropTypes.func,
	filterVar: PropTypes.string
};

export default KegList;