import React, { Component } from 'react';
import './App.css';
import img_elRectangle from './images/N22_ProductDetailsScreen_elRectangle.png';
import img_elRectangle2 from './images/N22_ProductDetailsScreen_elRectangle2.png';
import img_elBox from './images/N22_ProductDetailsScreen_elBox.png';
import img_elBox2 from './images/N22_ProductDetailsScreen_elBox2.png';
import img_elBitmap from './images/N22_ProductDetailsScreen_elBitmap_68102.jpg';
import img_elChickenrice from './images/CartScreen_elChickenrice_456386.jpg';
import img_elHeartFontAwesome from './images/N22_ProductDetailsScreen_elHeartFontAwesome.png';
import HeaderOptionsWhite from './HeaderOptionsWhite';
import HeaderMenuWhite from './HeaderMenuWhite';


export default class N22_ProductDetailsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elRectangle = (ev) => {
    // Go to screen 'Cart'
    this.props.appActions.goToScreen('cart', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elRectangle2 = (ev) => {
    // Go to screen 'Cart'
    this.props.appActions.goToScreen('cart', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elHeaderMenuWhite = (ev) => {
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
    const style_elRectangle = {
        backgroundImage: 'url('+img_elRectangle+')',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elAddToCart = {
        fontSize: 13.0,
        color: '#00bcd3',
        textAlign: 'center',
     };
    const style_elRectangle2 = {
        backgroundImage: 'url('+img_elRectangle2+')',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elBuyNow = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_elBox = {
        backgroundImage: 'url('+img_elBox+')',
        backgroundSize: '100% 100%',
     };
    const style_elV1 = {
        fontSize: 10.5,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elV = {
        fontSize: 10.5,
        color: '#747474',
        textAlign: 'left',
     };
    const style_el_ = {
        fontSize: 10.5,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elTitle = {
        fontSize: 8.9,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elBox2 = {
        backgroundImage: 'url('+img_elBox2+')',
        backgroundSize: '100% 100%',
     };
    const style_elTitle2 = {
        fontSize: 8.9,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elL = {
        fontSize: 10.5,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elText = {
        fontSize: 10.5,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elBitmap = {
        backgroundImage: 'url('+img_elBitmap+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elChickenrice = {
        backgroundImage: 'url('+img_elChickenrice+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elPrice = {
        fontSize: 17.0,
        color: 'white',
        textAlign: 'left',
     };
    const style_elTitle3 = {
        fontSize: 14.6,
        color: 'white',
        textAlign: 'left',
     };
    const style_elBrand = {
        fontSize: 10.5,
        color: 'white',
        textAlign: 'left',
     };
    const style_elCount = {
        fontSize: 10.5,
        color: 'white',
        textAlign: 'left',
     };
    const style_elHeartFontAwesome = {
        backgroundImage: 'url('+img_elHeartFontAwesome+')',
        backgroundSize: '100% 100%',
     };
    const style_elProductDetails = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'center',
     };
    const style_elHeaderMenuWhite = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen N22_ProductDetailsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRectangle' style={style_elRectangle} onClick={this.onClick_elRectangle}  />
            <div className='font-avenirMedium  elAddToCart' style={style_elAddToCart}>
              <div>{this.props.locStrings.n22_productdetails_addtocart_134155}</div>
            </div>
            <div className='elRectangle2' style={style_elRectangle2} onClick={this.onClick_elRectangle2}  />
            <div className='font-avenirMedium  elBuyNow' style={style_elBuyNow}>
              <div>{this.props.locStrings.n22_productdetails_buynow_938247}</div>
            </div>
            <div className='elBox' style={style_elBox} />
            <div className='font-avenirLight  elV1' style={style_elV1}>
              <div>{this.props.locStrings.n22_productdetails_n1_173557}</div>
            </div>
            <div className='font-avenirLight  elV' style={style_elV}>
              <div>{this.props.locStrings.n22_productdetails_n_609260}</div>
            </div>
            <div className='font-avenirLight  el_' style={style_el_}>
              <div>{this.props.locStrings.n22_productdetails___770798}</div>
            </div>
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div>{this.props.locStrings.n22_productdetails_title_359482}</div>
            </div>
            <div className='elBox2' style={style_elBox2} />
            <div className='font-avenirMedium  elTitle2' style={style_elTitle2}>
              <div>{this.props.locStrings.n22_productdetails_title2_215835}</div>
            </div>
            <div className='font-avenirLight  elL' style={style_elL}>
              <div>{this.props.locStrings.n22_productdetails_l_928423}</div>
            </div>
            <div className='font-avenirLight  elText' style={style_elText}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.n22_productdetails_text_612555.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elBitmap' style={style_elBitmap} />
            <div className='elChickenrice' style={style_elChickenrice} />
            <div className='font-avenirMedium  elPrice' style={style_elPrice}>
              <div>{this.props.locStrings.n22_productdetails_price_204908}</div>
            </div>
            <div className='font-avenirMedium  elTitle3' style={style_elTitle3}>
              <div>{this.props.locStrings.n22_productdetails_title3_614543}</div>
            </div>
            <div className='font-avenirLight  elBrand' style={style_elBrand}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.n22_productdetails_brand_995445.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='font-avenirLight  elCount' style={style_elCount}>
              <div>{this.props.locStrings.n22_productdetails_count_859866}</div>
            </div>
            <div className='elHeartFontAwesome' style={style_elHeartFontAwesome} />
            <div className='hasNestedComps elHeaderOptionsWhite'>
              <HeaderOptionsWhite ref={(el)=> this._elHeaderOptionsWhite = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='font-avenirMedium  elProductDetails' style={style_elProductDetails}>
              <div>{this.props.locStrings.n22_productdetails_productdetails_834549}</div>
            </div>
            <div className='hasNestedComps elHeaderMenuWhite' style={style_elHeaderMenuWhite} onClick={this.onClick_elHeaderMenuWhite} >
              <HeaderMenuWhite ref={(el)=> this._elHeaderMenuWhite = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
