import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/CartScreen_elMask.png';
import img_elChickenrice from './images/CartScreen_elChickenrice_456386.jpg';
import img_elRectangle from './images/CartScreen_elRectangle.png';
import HeaderMenuDark from './HeaderMenuDark';


export default class CartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elRectangle = (ev) => {
    // Go to screen '26_Checkout'
    this.props.appActions.goToScreen('n26_checkout', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elHeaderMenuDark = (ev) => {
    // Go to screen '13_Navigation Menu'
    this.props.appActions.goToScreen('n13_navigationmenu', { transitionId: 'fadeIn' });
  
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
    const style_elTitle = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elMask = {
        backgroundImage: 'url('+img_elMask+')',
        backgroundSize: '100% 100%',
     };
    const style_elChickenrice = {
        backgroundImage: 'url('+img_elChickenrice+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        borderRadius: '9.1px',
     };
    const style_elLine = {
        borderTop: '1px solid rgba(150, 150, 150, 0.5973)',
     };
    const style_elRectangle = {
        backgroundImage: 'url('+img_elRectangle+')',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elPlaceOrder = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_elCART = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'center',
     };
    const style_elTitle2 = {
        fontSize: 14.6,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elHeaderMenuDark = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elLine2 = {
        borderTop: '1px solid rgba(150, 150, 150, 0.5973)',
     };
    const style_elTitle3 = {
        fontSize: 16.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elSubtotal300 = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elTakeawayFee020 = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen CartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.cart_title_856548.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elMask' style={style_elMask} />
            <div className='elChickenrice' style={style_elChickenrice} />
            <div className='elLine' style={style_elLine} />
            <div className='elRectangle' style={style_elRectangle} onClick={this.onClick_elRectangle}  />
            <div className='font-avenirMedium  elPlaceOrder' style={style_elPlaceOrder}>
              <div>{this.props.locStrings.cart_placeorder_517278}</div>
            </div>
            <div className='font-avenirMedium  elCART' style={style_elCART}>
              <div>{this.props.locStrings.cart_cart_148985}</div>
            </div>
            <div className='font-avenirMedium  elTitle2' style={style_elTitle2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.cart_title2_246573.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='hasNestedComps elHeaderMenuDark' style={style_elHeaderMenuDark} onClick={this.onClick_elHeaderMenuDark} >
              <HeaderMenuDark ref={(el)=> this._elHeaderMenuDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='elLine2' style={style_elLine2} />
            <div className='font-avenirMedium  elTitle3' style={style_elTitle3}>
              <div>{this.props.locStrings.cart_title3_403589}</div>
            </div>
            <div className='font-avenirMedium  elSubtotal300' style={style_elSubtotal300}>
              <div>{this.props.locStrings.cart_subtotal300_671534}</div>
            </div>
            <div className='font-avenirMedium  elTakeawayFee020' style={style_elTakeawayFee020}>
              <div>{this.props.locStrings.cart_takeawayfee020_313860}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
