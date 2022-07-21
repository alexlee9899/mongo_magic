import React from 'react';
import { Parallax } from 'react-parallax';

const ImageOne = () => {
  return <Parallax className='image' blur={0} bgImage={require('./image/banner1.jpeg')} strength={800} bgImageStyle={{minHeight:"100vh"}}>
     <div className='content'>
            <span className="img-txt">Taking the leading position in sustainability</span>
        </div>
        <div>afsdfasf</div>
  </Parallax>
}

export default ImageOne;