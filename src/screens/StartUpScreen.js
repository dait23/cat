import React, {
  Component
} from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Platform,
  StatusBar,
  ImageBackground
} from 'react-native';
//import {View, TextInput, Text, Button} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import CommonStyles, { deviceHeight,shadowOpt,deviceWidth } from '../styles/CommonStyles';
import { appSingleNavigation } from '../styles/navigatorStyle';

export default class StartUpScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
       StatusBar.setHidden(true);
    }
  render() {
    setTimeout(
      () => {
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Fkppi.StartUpLogoScreen'
          },
          animated: true,
          animationType: 'slide-up'
        });
      }, 3000
    );

    return (
      <ImageBackground
      source={require('../../img/fkppi/bg.png')}
      imageStyle={{resizeMode: 'cover'}}
      style={{width: '100%', height: '100%'}}
    >
    <StatusBar
         backgroundColor="#857d60"
         barStyle="light-content"
         hidden={true}

       />
      <View style={styles.container}>
        
        <View style={[{flex:1}, styles.elementsContainer]}>
          <View style={{flex: 6, justifyContent: 'center',flexDirection: 'column'}} >
            <View style={[styles.logoBox,{height: 198, width: 137}]}>
              <Image
                source={require('../../img/fkppi/logo.png')}
                style={{width: 137, height: 198}}
              />
            </View>
           <View style={styles.textBox}>
                <Text style={styles.textItem}>
                 Keluarga Besar Forum Komunikasi Putra Putri Purnawirawan dan Putra Putri TNI POLRI
                </Text>
           </View>
          </View>
          <View style={{flex:1, justifyContent: 'flex-end',flexDirection: 'row'}} >

           <View style={styles.footerBox}>
                <Text style={styles.textFooter}>
                 ©2018 FKPPI all rights reserved.
                </Text>
           </View>

          </View>
        </View>
      </View>
    </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      },
    elementsContainer: {
      flex: 1,
    
    },
    logoBox:{
      alignSelf:'center'
    },
    textBox:{
      marginLeft: 24,
      marginRight: 24,

    },
    textItem:{
      
      color:'#fff', textAlign:'center', marginTop: 20,  fontFamily: 'Roboto-Medium',fontSize: 15,lineHeight: 23
    },
    footerBox:{
      flex: 1,
      width: 40,
      height: 40,
      alignSelf:'center'
    },
    textFooter:{
      
      color:'#fff', textAlign:'center', marginTop: 20,  fontFamily: 'Roboto-Light',fontSize: 12,lineHeight: 23
    },
});