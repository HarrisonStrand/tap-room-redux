import React from 'react';
import Banner from './Banner';
import Keg from './Keg';
import KegControl from './KegControl';

function App() {
  const appStyles = {
    color: '#E4E4E4',
    marginLeft: '200px',
    marginTop: '50px'
  }

  return (
    <>
    <div className='app' style={appStyles}>
    <Banner />
    <Keg />
    <KegControl />
    </div>
    </>
  );
}

export default App;
