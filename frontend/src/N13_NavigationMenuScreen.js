import React, { Component } from 'react';
import './App.css';
import img_elIcon24px from './images/N13_NavigationMenuScreen_elIcon24px.png';
import img_elIcon24px2 from './images/N13_NavigationMenuScreen_elIcon24px2.png';
import img_elIcon24px3 from './images/N13_NavigationMenuScreen_elIcon24px3.png';
import img_elIcon24px4 from './images/N13_NavigationMenuScreen_elIcon24px4.png';
import img_elPersonMaterial from './images/N13_NavigationMenuScreen_elPersonMaterial.png';
import img_elImage from './images/N13_NavigationMenuScreen_elImage.png';


export default class N13_NavigationMenuScreen extends Component {

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
    const style_elBitmap = {
        backgroundImage: 'url('+img_elBitmap+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        opacity: 0.00,
     };
    const style_elMenuBackground = {
        background: 'rgba(0, 188, 211, 1.000)',
     };
    const style_elSignout = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'left',
     };
    const style_elIcon24px = {
        backgroundImage: 'url('+img_elIcon24px+')',
        backgroundSize: '100% 100%',
     };
    const style_elSettings = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'left',
     };
    const style_elIcon24px2 = {
        backgroundImage: 'url('+img_elIcon24px2+')',
        backgroundSize: '100% 100%',
     };
    const style_elORDERS = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'left',
     };
    const style_elIcon24px3 = {
        backgroundImage: 'url('+img_elIcon24px3+')',
        backgroundSize: '100% 100%',
     };
    const style_elMessages = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'left',
     };
    const style_elIcon24px4 = {
        backgroundImage: 'url('+img_elIcon24px4+')',
        backgroundSize: '100% 100%',
     };
    const style_elProfile = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'left',
     };
    const style_elPersonMaterial = {
        backgroundImage: 'url('+img_elPersonMaterial+')',
        backgroundSize: '100% 100%',
     };
    const style_elImage = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundSize: '100% 100%',
     };
    const style_elName = {
        fontSize: 12.2,
        color: 'white',
        textAlign: 'left',
     };
    const style_elPost = {
        fontSize: 10.5,
        color: 'white',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen N13_NavigationMenuScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elBitmap' style={style_elBitmap} />
            <div className='elMenuBackground' style={style_elMenuBackground} />
            <div className='font-avenirMedium  elSignout' style={style_elSignout}>
              <div>{this.props.locStrings.n13_navigationmenu_signout_296807}</div>
            </div>
            <div className='elIcon24px' style={style_elIcon24px} />
            <div className='font-avenirMedium  elSettings' style={style_elSettings}>
              <div>{this.props.locStrings.n13_navigationmenu_settings_944328}</div>
            </div>
            <div className='elIcon24px2' style={style_elIcon24px2} />
            <div className='font-avenirMedium  elORDERS' style={style_elORDERS}>
              <div>{this.props.locStrings.n13_navigationmenu_orders_455889}</div>
            </div>
            <div className='elIcon24px3' style={style_elIcon24px3} />
            <div className='font-avenirMedium  elMessages' style={style_elMessages}>
              <div>{this.props.locStrings.n13_navigationmenu_messages_628809}</div>
            </div>
            <div className='elIcon24px4' style={style_elIcon24px4} />
            <div className='font-avenirMedium  elProfile' style={style_elProfile}>
              <div>{this.props.locStrings.n13_navigationmenu_profile_269417}</div>
            </div>
            <div className='elPersonMaterial' style={style_elPersonMaterial} />
            <div className='elImage' style={style_elImage} />
            <div className='font-avenirMedium  elName' style={style_elName}>
              <div>{this.props.locStrings.n13_navigationmenu_name_173102}</div>
            </div>
            <div className='font-avenirLight  elPost' style={style_elPost}>
              <div>{this.props.locStrings.n13_navigationmenu_post_517181}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
