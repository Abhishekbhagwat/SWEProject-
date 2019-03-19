import React, { Component } from 'react';
import './App.css';
import img_elSing from './images/N4_SignUpScreen_elSing_220654.jpg';
import img_elRectangle from './images/N4_SignUpScreen_elRectangle.png';
import img_elRectangle2 from './images/N4_SignUpScreen_elRectangle2.png';
import img_elIcon24px from './images/N4_SignUpScreen_elIcon24px.png';
import img_elRectangle3 from './images/N4_SignUpScreen_elRectangle3.png';
import img_elIcon24px2 from './images/N4_SignUpScreen_elIcon24px2.png';
import img_elRectangle4 from './images/N4_SignUpScreen_elRectangle4.png';
import img_elIcon24px3 from './images/N4_SignUpScreen_elIcon24px3.png';
import img_elRectangle5 from './images/N4_SignUpScreen_elRectangle5.png';
import img_elPersonMaterial from './images/N4_SignUpScreen_elPersonMaterial.png';
import Comp1 from './Comp1';


export default class N4_SignUpScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  onClick_elSignUp = (ev) => {
    // Go to screen '30_Gallery Category'
    this.props.appActions.goToScreen('n30_gallerycategory', { transitionId: 'fadeIn' });
  
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
    const style_elField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_elField_outer = {
        pointerEvents: 'auto',
     };
    const style_elSing = {
        backgroundImage: 'url('+img_elSing+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elContinue = {
        fontSize: 10.5,
        color: 'white',
        textAlign: 'left',
     };
    const style_elSignInInstead = {
        fontSize: 10.5,
        color: 'white',
        textAlign: 'left',
     };
    const style_elRectangle = {
        backgroundImage: 'url('+img_elRectangle+')',
        backgroundSize: '100% 100%',
     };
    const style_elSignUp = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elRectangle2 = {
        backgroundImage: 'url('+img_elRectangle2+')',
        backgroundSize: '100% 100%',
     };
    const style_elMobileNumber = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elIcon24px = {
        backgroundImage: 'url('+img_elIcon24px+')',
        backgroundSize: '100% 100%',
     };
    const style_elRectangle3 = {
        backgroundImage: 'url('+img_elRectangle3+')',
        backgroundSize: '100% 100%',
     };
    const style_elDateOfBirth = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elIcon24px2 = {
        backgroundImage: 'url('+img_elIcon24px2+')',
        backgroundSize: '100% 100%',
     };
    const style_elRectangle4 = {
        backgroundImage: 'url('+img_elRectangle4+')',
        backgroundSize: '100% 100%',
     };
    const style_elEmailAddress = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elIcon24px3 = {
        backgroundImage: 'url('+img_elIcon24px3+')',
        backgroundSize: '100% 100%',
     };
    const style_elFullName = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elRectangle5 = {
        backgroundImage: 'url('+img_elRectangle5+')',
        backgroundSize: '100% 100%',
     };
    const style_elPersonMaterial = {
        backgroundImage: 'url('+img_elPersonMaterial+')',
        backgroundSize: '100% 100%',
     };
    const style_elTitle = {
        fontSize: 21.1,
        color: 'white',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen N4_SignUpScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elField' style={style_elField_outer}>
            <input style={style_elField} type="text" placeholder={this.props.locStrings.n4_signup_field_847163} onChange={this.textInputChanged_field} value={this.state.field}  />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='containerMinHeight elSing' style={style_elSing} />
            <div className='font-avenirMedium  elContinue' style={style_elContinue}>
              <div>{this.props.locStrings.n4_signup_continue_207804}</div>
            </div>
            <div className='font-avenirMedium  elSignInInstead' style={style_elSignInInstead}>
              <div>{this.props.locStrings.n4_signup_signininstead_995889}</div>
            </div>
            <div className='elRectangle' style={style_elRectangle} />
            <div className='font-avenirMedium  elSignUp' style={style_elSignUp} onClick={this.onClick_elSignUp} >
              <div>{this.props.locStrings.n4_signup_signup_719015}</div>
            </div>
            <div className='elRectangle2' style={style_elRectangle2} />
            <div className='font-avenirMedium  elMobileNumber' style={style_elMobileNumber}>
              <div>{this.props.locStrings.n4_signup_mobilenumber_224722}</div>
            </div>
            <div className='elIcon24px' style={style_elIcon24px} />
            <div className='elRectangle3' style={style_elRectangle3} />
            <div className='font-avenirMedium  elDateOfBirth' style={style_elDateOfBirth}>
              <div>{this.props.locStrings.n4_signup_dateofbirth_691480}</div>
            </div>
            <div className='elIcon24px2' style={style_elIcon24px2} />
            <div className='elRectangle4' style={style_elRectangle4} />
            <div className='font-avenirMedium  elEmailAddress' style={style_elEmailAddress}>
              <div>{this.props.locStrings.n4_signup_emailaddress_98197}</div>
            </div>
            <div className='elIcon24px3' style={style_elIcon24px3} />
            <div className='font-avenirMedium  elFullName' style={style_elFullName}>
              <div>{this.props.locStrings.n4_signup_fullname_180466}</div>
            </div>
            <div className='elRectangle5' style={style_elRectangle5} />
            <div className='elPersonMaterial' style={style_elPersonMaterial} />
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div>{this.props.locStrings.n4_signup_title_96250}</div>
            </div>
            <div className='hasNestedComps elComp'>
              <Comp1 ref={(el)=> this._elComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
