import React from 'react';
import loadingImage from '../../img/loading.gif';
import './Load.css'

const Load = () => {
  return (
    <div className='loading flex flex-center'>
      <img src={loadingImage} alt="load" />
    </div>
  )
}

export default Load
