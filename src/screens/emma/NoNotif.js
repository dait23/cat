import React, { Component } from 'react';
import {Dimensions, Text, View, Image } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
const deviceHeight = Dimensions.get('window').height;


export default class NoNotif extends Component {

    render(){

        return(

          <View style={{flex:1, backgroundColor:'#fff'}}>
          <View style={{alignItems:'center', justifyContent:'center', marginTop: deviceHeight / 5,}}>
          <Image
            source={require('../../../img/emma/nonotif.png')}
            style={{width: 100, height: 100}}
          />
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.lightgreyColor,
            CommonStyles.mediumBold,
            {lineHeight: 40, marginBottom: 7}
          ]}>Belum ada notifikasi!</Text>
          </View>
          </View>
        );
        
    }

}
