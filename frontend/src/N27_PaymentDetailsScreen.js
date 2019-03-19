import React, { Component } from 'react';
import './App.css';
import img_elRectangle from './images/N27_PaymentDetailsScreen_elRectangle.png';
import img_elRectangle2 from './images/N27_PaymentDetailsScreen_elRectangle2.png';
import img_elIcon24px from './images/N27_PaymentDetailsScreen_elIcon24px.png';
import img_elRectangle3 from './images/N27_PaymentDetailsScreen_elRectangle3.png';
import img_elIcon24px2 from './images/N27_PaymentDetailsScreen_elIcon24px2.png';
import img_elRectangle4 from './images/N27_PaymentDetailsScreen_elRectangle4.png';
import img_elIcon24px3 from './images/N27_PaymentDetailsScreen_elIcon24px3.png';
import img_elRectangle5 from './images/N27_PaymentDetailsScreen_elRectangle5.png';
import img_elPersonMaterial from './images/N27_PaymentDetailsScreen_elPersonMaterial.png';
import img_elRectangle6 from './images/N27_PaymentDetailsScreen_elRectangle6.png';
import img_elVisa from './images/N27_PaymentDetailsScreen_elVisa_341608.png';
import HeaderOptionsDark from './HeaderOptionsDark';
import HeaderMenuDark from './HeaderMenuDark';


export default class N27_PaymentDetailsScreen extends Component {

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
    const style_elRectangle = {
        backgroundImage: 'url('+img_elRectangle+')',
        backgroundSize: '100% 100%',
     };
    const style_elAddNewCard = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_elRectangle2 = {
        backgroundImage: 'url('+img_elRectangle2+')',
        backgroundSize: '100% 100%',
     };
    const style_elExpMonth = {
        fontSize: 12.2,
        color: '#747474',
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
    const style_elExpYear = {
        fontSize: 12.2,
        color: '#747474',
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
    const style_elCardNumber = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elIcon24px3 = {
        backgroundImage: 'url('+img_elIcon24px3+')',
        backgroundSize: '100% 100%',
     };
    const style_elRectangle5 = {
        backgroundImage: 'url('+img_elRectangle5+')',
        backgroundSize: '100% 100%',
     };
    const style_elCardOwner = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elPersonMaterial = {
        backgroundImage: 'url('+img_elPersonMaterial+')',
        backgroundSize: '100% 100%',
     };
    const style_elTitle = {
        fontSize: 14.6,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elRectangle6 = {
        backgroundImage: 'url('+img_elRectangle6+')',
        backgroundSize: '100% 100%',
     };
    const style_elName = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elCardOwner2 = {
        fontSize: 8.1,
        color: 'white',
        textAlign: 'left',
     };
    const style_elMonth = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elIssued = {
        fontSize: 8.1,
        color: 'white',
        textAlign: 'left',
     };
    const style_elMonth2 = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elExpire = {
        fontSize: 8.1,
        color: 'white',
        textAlign: 'left',
     };
    const style_elNumber = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elCardNumber2 = {
        fontSize: 8.1,
        color: 'white',
        textAlign: 'left',
     };
    const style_elVisa = {
        backgroundImage: 'url('+img_elVisa+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elPaymentDetails = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen N27_PaymentDetailsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRectangle' style={style_elRectangle} />
            <div className='font-avenirMedium  elAddNewCard' style={style_elAddNewCard}>
              <div>{this.props.locStrings.n27_paymentdetails_addnewcard_68120}</div>
            </div>
            <div className='elRectangle2' style={style_elRectangle2} />
            <div className='font-avenirMedium  elExpMonth' style={style_elExpMonth}>
              <div>{this.props.locStrings.n27_paymentdetails_expmonth_311301}</div>
            </div>
            <div className='elIcon24px' style={style_elIcon24px} />
            <div className='elRectangle3' style={style_elRectangle3} />
            <div className='font-avenirMedium  elExpYear' style={style_elExpYear}>
              <div>{this.props.locStrings.n27_paymentdetails_expyear_723840}</div>
            </div>
            <div className='elIcon24px2' style={style_elIcon24px2} />
            <div className='elRectangle4' style={style_elRectangle4} />
            <div className='font-avenirMedium  elCardNumber' style={style_elCardNumber}>
              <div>{this.props.locStrings.n27_paymentdetails_cardnumber_48040}</div>
            </div>
            <div className='elIcon24px3' style={style_elIcon24px3} />
            <div className='elRectangle5' style={style_elRectangle5} />
            <div className='font-avenirMedium  elCardOwner' style={style_elCardOwner}>
              <div>{this.props.locStrings.n27_paymentdetails_cardowner_655400}</div>
            </div>
            <div className='elPersonMaterial' style={style_elPersonMaterial} />
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div>{this.props.locStrings.n27_paymentdetails_title_408211}</div>
            </div>
            <div className='elRectangle6' style={style_elRectangle6} />
            <div className='font-avenirMedium  elName' style={style_elName}>
              <div>{this.props.locStrings.n27_paymentdetails_name_814110}</div>
            </div>
            <div className='font-avenirLight  elCardOwner2' style={style_elCardOwner2}>
              <div>{this.props.locStrings.n27_paymentdetails_cardowner2_799993}</div>
            </div>
            <div className='font-avenirMedium  elMonth' style={style_elMonth}>
              <div>{this.props.locStrings.n27_paymentdetails_month_806275}</div>
            </div>
            <div className='font-avenirLight  elIssued' style={style_elIssued}>
              <div>{this.props.locStrings.n27_paymentdetails_issued_838752}</div>
            </div>
            <div className='font-avenirMedium  elMonth2' style={style_elMonth2}>
              <div>{this.props.locStrings.n27_paymentdetails_month2_302599}</div>
            </div>
            <div className='font-avenirLight  elExpire' style={style_elExpire}>
              <div>{this.props.locStrings.n27_paymentdetails_expire_536093}</div>
            </div>
            <div className='font-avenirMedium  elNumber' style={style_elNumber}>
              <div>{this.props.locStrings.n27_paymentdetails_number_662076}</div>
            </div>
            <div className='font-avenirLight  elCardNumber2' style={style_elCardNumber2}>
              <div>{this.props.locStrings.n27_paymentdetails_cardnumber2_439139}</div>
            </div>
            <div className='elVisa' style={style_elVisa} />
            <div className='hasNestedComps elHeaderOptionsDark'>
              <HeaderOptionsDark ref={(el)=> this._elHeaderOptionsDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='font-avenirMedium  elPaymentDetails' style={style_elPaymentDetails}>
              <div>{this.props.locStrings.n27_paymentdetails_paymentdetails_706991}</div>
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
