import React, { Component } from 'react';
import './App.css';
import img_elEllipse_2 from './images/MessagesScreen_elEllipse_2.png';
import img_elImages from './images/MessagesScreen_elImages_179737.jpg';
import img_elEllipse_3 from './images/MessagesScreen_elEllipse_3.png';
import img_elShowphotoicon from './images/MessagesScreen_elShowphotoicon_724545.jpg';
import HeaderOptionsDark from './HeaderOptionsDark';
import HeaderMenuDark from './HeaderMenuDark';


export default class MessagesScreen extends Component {

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
        fontSize: 13.8,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elEllipse_2 = {
        backgroundImage: 'url('+img_elEllipse_2+')',
        backgroundSize: '100% 100%',
     };
    const style_elImages = {
        backgroundImage: 'url('+img_elImages+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elTitle2 = {
        fontSize: 11.3,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elYourOrderIsBeing = {
        fontSize: 8.1,
        color: 'black',
        textAlign: 'left',
     };
    const style_elTitle3 = {
        fontSize: 13.8,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elTitle4 = {
        fontSize: 11.3,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elDoYouWantToAdde = {
        fontSize: 8.1,
        color: 'black',
        textAlign: 'left',
     };
    const style_elEllipse_3 = {
        backgroundImage: 'url('+img_elEllipse_3+')',
        backgroundSize: '100% 100%',
     };
    const style_elShowphotoicon = {
        backgroundImage: 'url('+img_elShowphotoicon+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elMessages = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen MessagesScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-avenirMedium  elTitle' style={style_elTitle}>
              <div>{this.props.locStrings.messages_title_605100}</div>
            </div>
            <div className='elEllipse_2' style={style_elEllipse_2} />
            <div className='elImages' style={style_elImages} />
            <div className='font-avenirMedium  elTitle2' style={style_elTitle2}>
              <div>{this.props.locStrings.messages_title2_970767}</div>
            </div>
            <div className='font-verdana  elYourOrderIsBeing' style={style_elYourOrderIsBeing}>
              <div>{this.props.locStrings.messages_yourorderisbeing_887252}</div>
            </div>
            <div className='font-avenirMedium  elTitle3' style={style_elTitle3}>
              <div>{this.props.locStrings.messages_title3_607486}</div>
            </div>
            <div className='font-avenirMedium  elTitle4' style={style_elTitle4}>
              <div>{this.props.locStrings.messages_title4_901256}</div>
            </div>
            <div className='font-verdana  elDoYouWantToAdde' style={style_elDoYouWantToAdde}>
              <div>{this.props.locStrings.messages_doyouwanttoadde_596528}</div>
            </div>
            <div className='elEllipse_3' style={style_elEllipse_3} />
            <div className='elShowphotoicon' style={style_elShowphotoicon} />
            <div className='hasNestedComps elHeaderOptionsDark'>
              <HeaderOptionsDark ref={(el)=> this._elHeaderOptionsDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='font-avenirMedium  elMessages' style={style_elMessages}>
              <div>{this.props.locStrings.messages_messages_239854}</div>
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
