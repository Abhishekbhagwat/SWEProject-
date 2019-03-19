import React, { Component } from 'react';
import './App.css';
import img_elRectangle from './images/N26_CheckoutScreen_elRectangle.png';
import img_elRectangle2 from './images/N26_CheckoutScreen_elRectangle2.png';
import img_elRectangle3 from './images/N26_CheckoutScreen_elRectangle3.png';
import img_elCheck from './images/N26_CheckoutScreen_elCheck.png';
import img_elBox from './images/N26_CheckoutScreen_elBox.png';
import img_elBitmap from './images/N26_CheckoutScreen_elBitmap_926270.png';
import img_elRectangle4 from './images/N26_CheckoutScreen_elRectangle4.png';
import img_elCheck2 from './images/N26_CheckoutScreen_elCheck2.png';
import img_elBox2 from './images/N26_CheckoutScreen_elBox2.png';
import img_elNETSLogo from './images/N26_CheckoutScreen_elNETSLogo_748723.jpg';
import img_elRectangle5 from './images/N26_CheckoutScreen_elRectangle5.png';
import img_elCheck3 from './images/N26_CheckoutScreen_elCheck3.png';
import img_elBox3 from './images/N26_CheckoutScreen_elBox3.png';
import img_elBitmap2 from './images/N26_CheckoutScreen_elBitmap2_518914.png';
import img_elRectangle6 from './images/N26_CheckoutScreen_elRectangle6.png';
import img_elCheck4 from './images/N26_CheckoutScreen_elCheck4.png';
import img_elMask from './images/N26_CheckoutScreen_elMask.png';
import img_elBitmap3 from './images/N26_CheckoutScreen_elBitmap3_660728.png';
import HeaderOptionsDark from './HeaderOptionsDark';
import HeaderMenuDark from './HeaderMenuDark';


export default class N26_CheckoutScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elRectangle2 = (ev) => {
    // Go to screen '27_Payment Details'
    this.props.appActions.goToScreen('n27_paymentdetails', { transitionId: 'fadeIn' });
  
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
    const style_elRectangle = {
        backgroundImage: 'url('+img_elRectangle+')',
        backgroundSize: '100% 100%',
     };
    const style_elContinue = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_elRectangle2 = {
        backgroundImage: 'url('+img_elRectangle2+')',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elContinue2 = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_elRectangle3 = {
        backgroundImage: 'url('+img_elRectangle3+')',
        backgroundSize: '100% 100%',
     };
    const style_elCheck = {
        backgroundImage: 'url('+img_elCheck+')',
        backgroundSize: '100% 100%',
     };
    const style_elMethodName = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elBox = {
        backgroundImage: 'url('+img_elBox+')',
        backgroundSize: '100% 100%',
     };
    const style_elBitmap = {
        backgroundImage: 'url('+img_elBitmap+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elValue = {
        fontSize: 8.1,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elRectangle4 = {
        backgroundImage: 'url('+img_elRectangle4+')',
        backgroundSize: '100% 100%',
     };
    const style_elCheck2 = {
        backgroundImage: 'url('+img_elCheck2+')',
        backgroundSize: '100% 100%',
     };
    const style_elMethodName2 = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elBox2 = {
        backgroundImage: 'url('+img_elBox2+')',
        backgroundSize: '100% 100%',
     };
    const style_elNETSLogo = {
        backgroundImage: 'url('+img_elNETSLogo+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elValue2 = {
        fontSize: 8.1,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elRectangle5 = {
        backgroundImage: 'url('+img_elRectangle5+')',
        backgroundSize: '100% 100%',
     };
    const style_elCheck3 = {
        backgroundImage: 'url('+img_elCheck3+')',
        backgroundSize: '100% 100%',
     };
    const style_elMethodName3 = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elBox3 = {
        backgroundImage: 'url('+img_elBox3+')',
        backgroundSize: '100% 100%',
     };
    const style_elBitmap2 = {
        backgroundImage: 'url('+img_elBitmap2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elValue3 = {
        fontSize: 8.1,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elRectangle6 = {
        backgroundImage: 'url('+img_elRectangle6+')',
        backgroundSize: '100% 100%',
     };
    const style_elCheck4 = {
        backgroundImage: 'url('+img_elCheck4+')',
        backgroundSize: '100% 100%',
     };
    const style_elMethodName4 = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elMask = {
        backgroundImage: 'url('+img_elMask+')',
        backgroundSize: '100% 100%',
     };
    const style_elBitmap3 = {
        backgroundImage: 'url('+img_elBitmap3+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elValue4 = {
        fontSize: 8.1,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elTitle = {
        fontSize: 14.6,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elCheckout = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen N26_CheckoutScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRectangle' style={style_elRectangle} />
            <div className='font-avenirMedium  elContinue' style={style_elContinue}>
              <div>{this.props.locStrings.n26_checkout_continue_878587}</div>
            </div>
            <div className='elRectangle2' style={style_elRectangle2} onClick={this.onClick_elRectangle2}  />
            <div className='font-avenirMedium  elContinue2' style={style_elContinue2}>
              <div>{this.props.locStrings.n26_checkout_continue2_730995}</div>
            </div>
            <div className='elRectangle3' style={style_elRectangle3} />
            <div className='elCheck' style={style_elCheck} />
            <div className='font-avenirMedium  elMethodName' style={style_elMethodName}>
              <div>{this.props.locStrings.n26_checkout_methodname_132873}</div>
            </div>
            <div className='elBox' style={style_elBox} />
            <div className='elBitmap' style={style_elBitmap} />
            <div className='font-avenirLight  elValue' style={style_elValue}>
              <div>{this.props.locStrings.n26_checkout_value_913263}</div>
            </div>
            <div className='elRectangle4' style={style_elRectangle4} />
            <div className='elCheck2' style={style_elCheck2} />
            <div className='font-avenirMedium  elMethodName2' style={style_elMethodName2}>
              <div>{this.props.locStrings.n26_checkout_methodname2_1018293}</div>
            </div>
            <div className='elBox2' style={style_elBox2} />
            <div className='elNETSLogo' style={style_elNETSLogo} />
            <div className='font-avenirLight  elValue2' style={style_elValue2}>
              <div>{this.props.locStrings.n26_checkout_value2_921406}</div>
            </div>
            <div className='elRectangle5' style={style_elRectangle5} />
            <div className='elCheck3' style={style_elCheck3} />
            <div className='font-avenirMedium  elMethodName3' style={style_elMethodName3}>
              <div>{this.props.locStrings.n26_checkout_methodname3_66143}</div>
            </div>
            <div className='elBox3' style={style_elBox3} />
            <div className='elBitmap2' style={style_elBitmap2} />
            <div className='font-avenirLight  elValue3' style={style_elValue3}>
              <div>{this.props.locStrings.n26_checkout_value3_808459}</div>
            </div>
            <div className='elRectangle6' style={style_elRectangle6} />
            <div className='elCheck4' style={style_elCheck4} />
            <div className='font-avenirMedium  elMethodName4' style={style_elMethodName4}>
              <div>{this.props.locStrings.n26_checkout_methodname4_394658}</div>
            </div>
            <div className='elMask' style={style_elMask} />
            <div className='elBitmap3' style={style_elBitmap3} />
            <div className='font-avenirLight  elValue4' style={style_elValue4}>
              <div>{this.props.locStrings.n26_checkout_value4_352161}</div>
            </div>
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div>{this.props.locStrings.n26_checkout_title_1015171}</div>
            </div>
            <div className='hasNestedComps elHeaderOptionsDark'>
              <HeaderOptionsDark ref={(el)=> this._elHeaderOptionsDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='font-avenirMedium  elCheckout' style={style_elCheckout}>
              <div>{this.props.locStrings.n26_checkout_checkout_30564}</div>
            </div>
            <div className='hasNestedComps elHeaderMenuDark'>
              <HeaderMenuDark ref={(el)=> this._elHeaderMenuDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
