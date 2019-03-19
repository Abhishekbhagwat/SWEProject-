import React, { Component } from 'react';
import './App.css';
import img_elF0461d8d7604f0e717b4f64ee59f7de0 from './images/N1_WelcomeScreen_elF0461d8d7604f0e717b4f64ee59f7de0_362536.jpg';
import img_elRectangle from './images/N1_WelcomeScreen_elRectangle.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class N1_WelcomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elRectangle = (ev) => {
    // Go to screen '2_Start Page'
    this.props.appActions.goToScreen('n2_startpage', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elF0461d8d7604f0e717b4f64ee59f7de0 = {
        backgroundImage: 'url('+img_elF0461d8d7604f0e717b4f64ee59f7de0+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elRectangle = {
        backgroundImage: 'url('+img_elRectangle+')',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elGETSTARTED = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_elSubheading = {
        fontSize: 14.6,
        color: 'white',
        textAlign: 'center',
     };
    const style_elTitle = {
        fontSize: 25.9,
        color: 'white',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen N1_WelcomeScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">1_Welcome</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elF0461d8d7604f0e717b4f64ee59f7de0' style={style_elF0461d8d7604f0e717b4f64ee59f7de0} />
            <div className='elRectangle' style={style_elRectangle} onClick={this.onClick_elRectangle}  />
            <div className='font-avenirMedium  elGETSTARTED' style={style_elGETSTARTED}>
              <div>{this.props.locStrings.n1_welcome_getstarted_77258}</div>
            </div>
            <div className='font-avenirLight  elSubheading' style={style_elSubheading}>
              <div>{this.props.locStrings.n1_welcome_subheading_16605}</div>
            </div>
            <div className='font-avenirBook  elTitle' style={style_elTitle}>
              <div>{this.props.locStrings.n1_welcome_title_833175}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
