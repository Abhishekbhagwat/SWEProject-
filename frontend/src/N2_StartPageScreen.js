import React, { Component } from 'react';
import './App.css';
import img_elSignin from './images/N2_StartPageScreen_elSignin_832507.jpg';
import img_elRectangle from './images/N2_StartPageScreen_elRectangle.png';
import img_elRectangle2 from './images/N2_StartPageScreen_elRectangle2.png';


export default class N2_StartPageScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elRectangle = (ev) => {
    // Go to screen '4_Sign Up'
    this.props.appActions.goToScreen('n4_signup', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elRectangle2 = (ev) => {
    // Go to screen '3_Sign In'
    this.props.appActions.goToScreen('n3_signin', { transitionId: 'fadeIn' });
  
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
    const style_elSignin = {
        backgroundImage: 'url('+img_elSignin+')',
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
    const style_elSignUp = {
        fontSize: 13.0,
        color: '#747474',
        textAlign: 'center',
     };
    const style_elRectangle2 = {
        backgroundImage: 'url('+img_elRectangle2+')',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elSignIn = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_elTagline = {
        fontSize: 14.6,
        color: 'white',
        textAlign: 'left',
     };
    const style_elTitle = {
        fontSize: 21.1,
        color: 'white',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen N2_StartPageScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elSignin' style={style_elSignin} />
            <div className='elRectangle' style={style_elRectangle} onClick={this.onClick_elRectangle}  />
            <div className='font-avenirMedium  elSignUp' style={style_elSignUp}>
              <div>{this.props.locStrings.n2_startpage_signup_666206}</div>
            </div>
            <div className='elRectangle2' style={style_elRectangle2} onClick={this.onClick_elRectangle2}  />
            <div className='font-avenirMedium  elSignIn' style={style_elSignIn}>
              <div>{this.props.locStrings.n2_startpage_signin_581037}</div>
            </div>
            <div className='font-avenirLight  elTagline' style={style_elTagline}>
              <div>{this.props.locStrings.n2_startpage_tagline_865408}</div>
            </div>
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div>{this.props.locStrings.n2_startpage_title_643167}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
