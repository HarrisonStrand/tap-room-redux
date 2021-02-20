import React from "react";

function Banner(){

  const bannerStyles = {
    color: 'black',
    marginTop: '50px',
    padding: '10px',
  }

  return (
    <>
    <div className='card' id='banner' style={bannerStyles}>
      <h1>Manage your Bar Stock</h1>
      <br></br>
    </div>
		</>
  );
}

export default Banner;