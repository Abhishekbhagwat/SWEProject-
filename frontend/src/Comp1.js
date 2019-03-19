import React, { Component } from 'react';
import './App.css';
import img_elRectangle5 from './images/Comp1_elRectangle5.png';


export default class Comp1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elRectangle5 = {
        backgroundImage: 'url('+img_elRectangle5+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Comp1" style={baseStyle}>
        <div className="foreground">
          <div className='elRectangle5' style={style_elRectangle5} />
        </div>
      </div>
    )
  }
  

}
