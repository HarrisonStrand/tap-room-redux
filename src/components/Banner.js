import React from "react";

function Banner(){

  const bannerStyles = {
    backgroundColor: '#026873',
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    marginLeft: '1500px',
    marginTop: '30px',
    position: 'inherit'
  }

  return (
    <>
    <div className='container'>
    <div style= {bannerStyles} className='circle'></div>
    </div>
    <h1 >Refuge de Pierre</h1>
		</>
  );
}

export default Banner;