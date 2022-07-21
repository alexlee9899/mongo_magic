import React from 'react';
import { Parallax } from 'react-parallax';

const ImageOne = () => {
<<<<<<< HEAD
  return <Parallax className='image' blur={0} bgImage={require('../assets/banner1.jpg')} strength={800} bgImageStyle={{minHeight:"100vh"}}>
||||||| a1b0d6d
  return <Parallax className='image' blur={0} bgImage={require('./image/banner1.jpeg')} strength={800} bgImageStyle={{minHeight:"100vh"}}>
=======
  return <Parallax className='image' blur={0} bgImage={require('./image/banner1.jpg')} strength={800} bgImageStyle={{minHeight:"100vh"}}>
>>>>>>> e89f00b92133e9258cdbcd7fcf1e18921ebbb17c
     <div className='content'>
            <span className="img-txt">Taking the leading position in sustainability</span>
        </div>
        <div>afsdfasf</div>
  </Parallax>
}

export default ImageOne;