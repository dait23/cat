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
            screen: 'Fkppi.SignInScreen'
          },
          animated: true,
          animationType: 'slide-up'
        });
      }, 2000
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
          <View style={{flex: 4, justifyContent: 'center', flexDirection: 'column',}} >
            <View style={styles.logoBox}>
              <Image
                source={require('../../img/fkppi/logo-depan1.png')}
                 style={{ marginLeft: 5, marginRight: 5,}}
              />
               <Image
                source={require('../../img/fkppi/logo-depan2.png')}
                 style={{ marginLeft: 5, marginRight: 5,}}
              />
               <Image
                source={require('../../img/fkppi/logo-depan3.png')}
                 style={{ marginLeft: 5, marginRight: 5,}}
              />
              <Image
                source={require('../../img/fkppi/logo-depan4.png')}
                 style={{ marginLeft: 5, marginRight: 5,}}
              />
       
            </View>

            <View style={styles.logoBox}>
              
              <Image
                source={require('../../img/fkppi/logo-depan5.png')}
                style={{ marginLeft: 5, marginRight: 5,}}
 
              />
              <Image
                source={require('../../img/fkppi/logo-depan6.png')}
                 style={{ marginLeft: 5, marginRight: 5,}}
              />
            </View>
           
          </View>
          <View style={{flex:1, justifyContent: 'flex-end',flexDirection: 'row'}} >

           <View style={styles.footerBox}>
                <Text style={styles.textFooter}>
                  BERSATU DAN BERDAULAT
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
      alignSelf:'center',
      flexDirection: 'row',
      marginTop: 20

    },
    textBox:{
      marginLeft: 24,
      marginRight: 24,

    },
    textItem:{
      
      color:'#fff', textAlign:'center', marginTop: 20,  fontFamily: 'Roboto-Medium',fontSize: 16,lineHeight: 23
    },
    footerBox:{
      flex: 1,
      width: 40,
      height: 40,
      alignSelf:'flex-start'
    },
    textFooter:{
      
      color:'#fff', textAlign:'center', marginTop: 20,  fontFamily: 'Roboto-Bold',fontSize: 16,lineHeight: 23
    },
});