import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const deviceHeight = Dimensions.get('window').height;

export default class Net extends Component {

    render(){

        return(

          <View style={{flex:1, backgroundColor:'#fff'}}>
          	<View style={{alignItems:'center', justifyContent:'center', marginTop: deviceHeight / 4,}}>
          	  <Icon name="signal-wifi-off"  size={100} color="#eee"/>
	          <Text style={{color:'#888'}}>
	            Internet Anda Terputus !!!
	          </Text>
          	</View>
          </View>
        );

    }

}


