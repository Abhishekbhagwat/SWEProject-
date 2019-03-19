import React, { Component } from 'react';
import './App.css';
import img_state0_elSign_up from './images/N3_SignInScreen_state0_elSign_up_455117.jpg';
import img_state0_elRectangle from './images/N3_SignInScreen_state0_elRectangle.png';
import img_state0_elRectangle2 from './images/N3_SignInScreen_state0_elRectangle2.png';
import img_state0_elIcon24px from './images/N3_SignInScreen_state0_elIcon24px.png';
import img_state0_elPersonMaterial from './images/N3_SignInScreen_state0_elPersonMaterial.png';
import img_state0_elRectangle3 from './images/N3_SignInScreen_state0_elRectangle3.png';


export default class N3_SignInScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      state0_elTitle_visible: true,
    };
  }

  // --- Functions for component state index 0 (1 of 3) --- 
  
  onClick_state0_elRectangle = (ev) => {
    // Go to screen '30_Gallery Category'
    this.props.appActions.goToScreen('n30_gallerycategory', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_state0_elUsername = (ev) => {
    this.setState({state0_elTitle_visible: !this.state.state0_elTitle_visible});
  
  }
  
  
  renderState0() {
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
    
    const style_state0_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_state0_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_state0_elSign_up = {
        backgroundImage: 'url('+img_state0_elSign_up+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_state0_elForgotPassword = {
        fontSize: 10.5,
        color: 'white',
        textAlign: 'left',
     };
    const style_state0_elSignUp = {
        fontSize: 10.5,
        color: 'white',
        textAlign: 'left',
     };
    const style_state0_elRectangle = {
        backgroundImage: 'url('+img_state0_elRectangle+')',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elSignIn = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_state0_elRectangle2 = {
        backgroundImage: 'url('+img_state0_elRectangle2+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elPassword = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_state0_elIcon24px = {
        backgroundImage: 'url('+img_state0_elIcon24px+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elPersonMaterial = {
        backgroundImage: 'url('+img_state0_elPersonMaterial+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elUsername = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_state0_elRectangle3 = {
        backgroundImage: 'url('+img_state0_elRectangle3+')',
        backgroundSize: '100% 100%',
     };
    const style_state0_elTitle = {
        fontSize: 21.1,
        color: 'white',
        textAlign: 'left',
     };
    const state0_elTitle = this.state.state0_elTitle_visible ? (
        <div className='font-avenirMedium  state0_elTitle' style={style_state0_elTitle}>
          <div>{this.props.locStrings.n3_signin_title_714331}</div>
        </div>
     ) : null;
    
    return (
      <div className="AppScreen N3_SignInScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground' style={style_state0_elBackground_outer}>
            <div style={style_state0_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight state0_elSign_up' style={style_state0_elSign_up} />
            <div className='font-avenirMedium  state0_elForgotPassword' style={style_state0_elForgotPassword}>
              <div>{this.props.locStrings.n3_signin_forgotpassword_927886}</div>
            </div>
            <div className='font-avenirMedium  state0_elSignUp' style={style_state0_elSignUp}>
              <div>{this.props.locStrings.n3_signin_signup_442388}</div>
            </div>
            <div className='state0_elRectangle' style={style_state0_elRectangle} onClick={this.onClick_state0_elRectangle}  />
            <div className='font-avenirMedium  state0_elSignIn' style={style_state0_elSignIn}>
              <div>{this.props.locStrings.n3_signin_signin_546834}</div>
            </div>
            <div className='state0_elRectangle2' style={style_state0_elRectangle2} />
            <div className='font-avenirMedium  state0_elPassword' style={style_state0_elPassword}>
              <div>{this.props.locStrings.n3_signin_password_46472}</div>
            </div>
            <div className='state0_elIcon24px' style={style_state0_elIcon24px} />
            <div className='state0_elPersonMaterial' style={style_state0_elPersonMaterial} />
            <div className='font-avenirMedium  state0_elUsername' style={style_state0_elUsername} onClick={this.onClick_state0_elUsername} >
              <div>{this.props.locStrings.n3_signin_username_51908}</div>
            </div>
            <div className='state0_elRectangle3' style={style_state0_elRectangle3} />
            { state0_elTitle }
          </div>
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 3) --- 
  
  renderState1() {
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
    
    
    return (
      <div className="AppScreen N3_SignInScreen" style={baseStyle}>
      </div>
    )
  }
  
  // --- Functions for component state index 2 (3 of 3) --- 
  
  renderState2() {
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
    
    
    return (
      <div className="AppScreen N3_SignInScreen" style={baseStyle}>
      </div>
    )
  }
  
  
  render() {
    switch (0) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
      case 2:
        return this.renderState2();
    }
  }
  

}
