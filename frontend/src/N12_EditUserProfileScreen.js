import React, { Component } from 'react';
import './App.css';
import img_elRectangle from './images/N12_EditUserProfileScreen_elRectangle.png';
import img_elRectangle2 from './images/N12_EditUserProfileScreen_elRectangle2.png';
import img_elIcon24px from './images/N12_EditUserProfileScreen_elIcon24px.png';
import img_elRectangle3 from './images/N12_EditUserProfileScreen_elRectangle3.png';
import img_elIcon24px2 from './images/N12_EditUserProfileScreen_elIcon24px2.png';
import img_elRectangle4 from './images/N12_EditUserProfileScreen_elRectangle4.png';
import img_elIcon24px3 from './images/N12_EditUserProfileScreen_elIcon24px3.png';
import img_elRectangle5 from './images/N12_EditUserProfileScreen_elRectangle5.png';
import img_elPersonMaterial from './images/N12_EditUserProfileScreen_elPersonMaterial.png';
import img_elMask from './images/N12_EditUserProfileScreen_elMask.png';
import img_elBitmap from './images/N12_EditUserProfileScreen_elBitmap_1006093.jpg';
import img_elEdit from './images/N12_EditUserProfileScreen_elEdit.png';
import HeaderOptionsDark from './HeaderOptionsDark';
import HeaderMenuDark from './HeaderMenuDark';


export default class N12_EditUserProfileScreen extends Component {

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
    const style_elUpdateProfile = {
        fontSize: 13.0,
        color: 'white',
        textAlign: 'center',
     };
    const style_elRectangle2 = {
        backgroundImage: 'url('+img_elRectangle2+')',
        backgroundSize: '100% 100%',
     };
    const style_elMobileNumber = {
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
    const style_elEmailAddress = {
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
    const style_elDateOfBirth = {
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
    const style_elFullName = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'left',
     };
    const style_elPersonMaterial = {
        backgroundImage: 'url('+img_elPersonMaterial+')',
        backgroundSize: '100% 100%',
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
    const style_elEdit = {
        backgroundImage: 'url('+img_elEdit+')',
        backgroundSize: '100% 100%',
     };
    const style_elEditPROFILE = {
        fontSize: 12.2,
        color: '#747474',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen N12_EditUserProfileScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elRectangle' style={style_elRectangle} />
            <div className='font-avenirMedium  elUpdateProfile' style={style_elUpdateProfile}>
              <div>{this.props.locStrings.n12_edituserprofile_updateprofile_753021}</div>
            </div>
            <div className='elRectangle2' style={style_elRectangle2} />
            <div className='font-avenirMedium  elMobileNumber' style={style_elMobileNumber}>
              <div>{this.props.locStrings.n12_edituserprofile_mobilenumber_89867}</div>
            </div>
            <div className='elIcon24px' style={style_elIcon24px} />
            <div className='elRectangle3' style={style_elRectangle3} />
            <div className='font-avenirMedium  elEmailAddress' style={style_elEmailAddress}>
              <div>{this.props.locStrings.n12_edituserprofile_emailaddress_468906}</div>
            </div>
            <div className='elIcon24px2' style={style_elIcon24px2} />
            <div className='elRectangle4' style={style_elRectangle4} />
            <div className='font-avenirMedium  elDateOfBirth' style={style_elDateOfBirth}>
              <div>{this.props.locStrings.n12_edituserprofile_dateofbirth_903563}</div>
            </div>
            <div className='elIcon24px3' style={style_elIcon24px3} />
            <div className='elRectangle5' style={style_elRectangle5} />
            <div className='font-avenirMedium  elFullName' style={style_elFullName}>
              <div>{this.props.locStrings.n12_edituserprofile_fullname_963962}</div>
            </div>
            <div className='elPersonMaterial' style={style_elPersonMaterial} />
            <div className='elMask' style={style_elMask} />
            <div className='elBitmap' style={style_elBitmap} />
            <div className='elEdit' style={style_elEdit} />
            <div className='hasNestedComps elHeaderOptionsDark'>
              <HeaderOptionsDark ref={(el)=> this._elHeaderOptionsDark = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
            <div className='font-avenirMedium  elEditPROFILE' style={style_elEditPROFILE}>
              <div>{this.props.locStrings.n12_edituserprofile_editprofile_989881}</div>
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
