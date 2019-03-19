import React, { Component } from 'react';
import './App.css';
import img_elTuneMaterial from './images/HeaderOptionsWhite_elTuneMaterial.png';


export default class HeaderOptionsWhite extends Component {

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
    const style_elTuneMaterial = {
        backgroundImage: 'url('+img_elTuneMaterial+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="HeaderOptionsWhite" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='elTuneMaterial' style={style_elTuneMaterial} />
        </div>
      </div>
    )
  }
  

}
