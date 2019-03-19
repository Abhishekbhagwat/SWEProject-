import React, { Component } from 'react';
import './App.css';
import img_elMask from './images/N30_GalleryCategoryScreen_elMask.png';
import img_elBitmap from './images/N30_GalleryCategoryScreen_elBitmap_280209.jpg';
import img_elMask2 from './images/N30_GalleryCategoryScreen_elMask2.png';
import img_elSouthspine from './images/N30_GalleryCategoryScreen_elSouthspine_845127.jpg';
import img_elMask3 from './images/N30_GalleryCategoryScreen_elMask3.png';
import img_elNorthspine from './images/N30_GalleryCategoryScreen_elNorthspine_233712.jpg';
import HeaderOptionsDark from './HeaderOptionsDark';
import HeaderMenuDark from './HeaderMenuDark';


export default class N30_GalleryCategoryScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elNorthspine = (ev) => {
    // Go to screen 'North Spine'
    this.props.appActions.goToScreen('northspine', { transitionId: 'fadeIn' });
  
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
    const style_elCount = {
        fontSize: 8.1,
        color: '#747474',
        textAlign: 'left',
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
    const style_elBitmap = {
        backgroundImage: 'url('+img_elBitmap+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elCount2 = {
        fontSize: 6.5,
        color: 'white',
        textAlign: 'left',
     };
    const style_elCount3 = {
        fontSize: 6.5,
        color: 'white',
        textAlign: 'left',
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
    const style_elSouthspine = {
        backgroundImage: 'url('+img_elSouthspine+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elTitle3 = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elMask3 = {
        backgroundImage: 'url('+img_elMask3+')',
        backgroundSize: '100% 100%',
     };
    const style_elNorthspine = {
        backgroundImage: 'url('+img_elNorthspine+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elBrowse = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'center',
     };
    const style_elHeaderMenuDark = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen N30_GalleryCategoryScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-avenirLight  elCount' style={style_elCount}>
              <div>{this.props.locStrings.n30_gallerycategory_count_997848}</div>
            </div>
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div>{this.props.locStrings.n30_gallerycategory_title_425415}</div>
            </div>
            <div className='elMask' style={style_elMask} />
            <div className='elBitmap' style={style_elBitmap} />
            <div className='elChat_bubbleMaterial' />
            <div className='font-avenirLight  elCount2' style={style_elCount2}>
              <div>{this.props.locStrings.n30_gallerycategory_count2_730659}</div>
            </div>
            <div className='font-avenirLight  elCount3' style={style_elCount3}>
              <div>{this.props.locStrings.n30_gallerycategory_count3_535916}</div>
            </div>
            <div className='elHeartFontAwesome' />
            <div className='font-avenirMedium  elTitle2' style={style_elTitle2}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.n30_gallerycategory_title2_853788.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elMask2' style={style_elMask2} />
            <div className='elSouthspine' style={style_elSouthspine} />
            <div className='font-avenirMedium  elTitle3' style={style_elTitle3}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.n30_gallerycategory_title3_1026475.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elMask3' style={style_elMask3} />
            <div className='elNorthspine' style={style_elNorthspine} onClick={this.onClick_elNorthspine}  />
            <div className='hasNestedComps elHeaderOptionsDark'>
              <HeaderOptionsDark ref={(el)=> this._elHeaderOptionsDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='font-avenirMedium  elBrowse' style={style_elBrowse}>
              <div>{this.props.locStrings.n30_gallerycategory_browse_621328}</div>
            </div>
            <div className='hasNestedComps elHeaderMenuDark' style={style_elHeaderMenuDark} onClick={this.onClick_elHeaderMenuDark} >
              <HeaderMenuDark ref={(el)=> this._elHeaderMenuDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
