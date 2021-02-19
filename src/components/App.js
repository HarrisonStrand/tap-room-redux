import React from 'react';
import Banner from './Banner';
import Item from './Item';
import ItemControl from './ItemControl';

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
    <Item />
    <ItemControl />
    </div>
    </>
  );
}

export default App;
