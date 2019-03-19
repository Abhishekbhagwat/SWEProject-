import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/OrderHistoryScreen_elMask.png';
import img_elChickenrice from './images/CartScreen_elChickenrice_456386.jpg';
import HeaderMenuDark from './HeaderMenuDark';
import img_elMask2 from './images/OrderHistoryScreen_elMask2.png';


export default class OrderHistoryScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
     };
    const style_elLine = {
        borderTop: '1px solid rgba(150, 150, 150, 0.5973)',
     };
    const style_elOrderHistory = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'center',
     };
    const style_elTitle2 = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elMask2 = {
        backgroundImage: 'url('+img_elMask2+')',
        backgroundSize: '100% 100%',
     };
    const style_elMask_Group_5 = {
        background: 'transparent',
     };
    const style_elLine2 = {
        borderTop: '1px solid rgba(150, 150, 150, 0.5973)',
     };
    
    return (
      <div className="AppScreen OrderHistoryScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.orderhistory_title_272857.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elMask' style={style_elMask} />
            <div className='elChickenrice' style={style_elChickenrice} />
            <div className='elLine' style={style_elLine} />
            <div className='font-avenirMedium  elOrderHistory' style={style_elOrderHistory}>
              <div>{this.props.locStrings.orderhistory_orderhistory_578387}</div>
            </div>
            <div className='hasNestedComps elHeaderMenuDark'>
              <HeaderMenuDark ref={(el)=> this._elHeaderMenuDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='font-avenirMedium  elTitle2' style={style_elTitle2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.orderhistory_title2_118752.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elMask2' style={style_elMask2} />
            <div className='elMask_Group_5' style={style_elMask_Group_5} />
            <div className='elLine2' style={style_elLine2} />
          </div>
        </div>
      </div>
    )
  }
  

}
