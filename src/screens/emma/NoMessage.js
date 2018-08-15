import React, { Component } from 'react';
import {Dimensions, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';

import { Navigation } from 'react-native-navigation';

import { noNavTabbarNavigation } from '../../styles/navigatorStyle';
import GradientNavigationBar from '../../elements/GradientNavigationBar';
import GradientButton from '../../elements/GradientButton';
const deviceHeight = Dimensions.get('window').height;


export default class NoMessage extends Component {


    constructor(props) {
    super(props);
  }
  

_handleClickReply() {
    console.log('REPLY');
    this.props.navigator.push({
      title: "Drugs Shop",
      screen: "Healer.DrugsShopScreen"
    });
  }

    render(){
       const smallShadowOpt = {
      btnWidth: 125,
      btnHeight: 35,
      shadowHeight: 65,
      fontSize: 15,
    }
        return(

          <View style={{flex:1, backgroundColor:'#fff'}}>
          <View style={{alignItems:'center', justifyContent:'center', marginTop: deviceHeight / 7,}}>
          <Image
            source={require('../../../img/emma/nopesan.png')}
            style={{width: 100, height: 100}}
          />
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.lightgreyColor,
            CommonStyles.mediumBold,
            {lineHeight: 40, marginBottom: 7}
          ]}>Belum ada pesan!</Text>
          <GradientButton
                  onPressButton={this._handleClickReply.bind(this)}
                  setting={smallShadowOpt}
                  btnText="Buat Pesan"
                />
          </View>
          </View>
        );
        
    }

}
