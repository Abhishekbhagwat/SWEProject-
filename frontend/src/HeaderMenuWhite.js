import React, { Component } from 'react';
import './App.css';
import img_elSortMaterial from './images/HeaderMenuWhite_elSortMaterial.png';


export default class HeaderMenuWhite extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#00bcd3',
     };
    const style_elSortMaterial = {
        backgroundImage: 'url('+img_elSortMaterial+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="HeaderMenuWhite" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='elSortMaterial' style={style_elSortMaterial} />
        </div>
      </div>
    )
  }
  

}
