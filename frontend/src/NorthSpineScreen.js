import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/NorthSpineScreen_elMask.png';
import img_elChickenrice from './images/CartScreen_elChickenrice_456386.jpg';
import HeaderMenuDark2 from './HeaderMenuDark2';
import img_elMask2 from './images/NorthSpineScreen_elMask2.png';
import img_elTakoyaki from './images/NorthSpineScreen_elTakoyaki_664451.jpg';


export default class NorthSpineScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elChickenrice = (ev) => {
    // Go to screen '22_Product Details'
    this.props.appActions.goToScreen('n22_productdetails', { transitionId: 'fadeIn' });
  
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
        borderRadius: '11.3px',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elLine = {
        borderTop: '1px solid rgba(150, 150, 150, 0.5973)',
     };
    const style_elNorthSpineFoodCou = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'center',
     };
    const style_elHeaderMenuDark = {
        cursor: 'pointer',
        pointerEvents: 'auto',
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
    const style_elTakoyaki = {
        backgroundImage: 'url('+img_elTakoyaki+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        borderRadius: '11.3px',
     };
    
    return (
      <div className="AppScreen NorthSpineScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.northspine_title_406238.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elMask' style={style_elMask} />
            <div className='elChickenrice' style={style_elChickenrice} onClick={this.onClick_elChickenrice}  />
            <div className='elLine' style={style_elLine} />
            <div className='font-avenirMedium  elNorthSpineFoodCou' style={style_elNorthSpineFoodCou}>
              <div>{this.props.locStrings.northspine_northspinefoodcou_888116}</div>
            </div>
            <div className='hasNestedComps elHeaderMenuDark' style={style_elHeaderMenuDark} onClick={this.onClick_elHeaderMenuDark} >
              <HeaderMenuDark2 ref={(el)=> this._elHeaderMenuDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='font-avenirMedium  elTitle2' style={style_elTitle2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.northspine_title2_722993.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elMask2' style={style_elMask2} />
            <div className='elMask_Group_5' style={style_elMask_Group_5} />
            <div className='elLine2' style={style_elLine2} />
            <div className='elTakoyaki' style={style_elTakoyaki} />
          </div>
        </div>
      </div>
    )
  }
  

}
