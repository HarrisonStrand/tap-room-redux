import React from "react";

function Banner(){

  const bannerStyles = {
    color: '#E4E4E4',
    marginLeft: '200px',
    marginTop: '50px'
  }

  return (
    <>
    <div className='banner' style={bannerStyles}>
      <h1>Manage your Bar Stock Below:</h1>
      <br></br>
    </div>
		</>
  );
}

export default Banner;