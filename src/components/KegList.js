import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {

  const listStyles = {
    color: '#E4E4E4'
  }

  return (
    <>
		<h2>Keg List:</h2>
    <div className='list' style={listStyles}>
			{props.kegList.map((keg) => 
			<Keg
				whenKegClicked = {props.onKegSelection}
				name = {keg.name}
				brand = {keg.brand}
				price = {keg.price}
				ABV = {keg.ABV}
				pints = {keg.pints}
				id = {keg.id}
				key = {keg.id} />
				)}
			</div>
		</>
	)
}

KegList.propTypes = {
  kegList: PropTypes.array,
	onKegSelection: PropTypes.func
};

export default KegList;