import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

//import GradientButton from '../elements/GradientButton';
//import PrimeButton from '../elements/PrimeButton';
import CheckBox from '../elements/CheckBox';
import CommonStyles, { deviceHeight,shadowOpt,deviceWidth } from '../styles/CommonStyles';
import { appSingleNavigation } from '../styles/navigatorStyle';

export default class UpdatePassScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.singlePagePurple}>
      <View style={styles.logoBox}>
          <Image
            source={require('../../img/catcha/logo_small.png')}
            style={{width: 150, height: 26}}
          />
        </View>
        <View style={styles.titleBox}>
        
          <Text style={[CommonStyles.extraLargeText, CommonStyles.whiteColor]}>
            Change Your Password
          </Text>
          <Text style={{color: 'white', marginTop:10}}>Hello there! Lorem ipsum dolor sit amet,
consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.formBox}>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/avatar.png')}
              style={{position:'absolute', bottom: 12,left: 20, width: 19, height: 22}}
            />
            <TextInput
              placeholder='New Password'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20, width: 17, height: 22}}
            />
            <TextInput
              placeholder='Confirm Password'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
         
        </View>
        <View style={[CommonStyles.buttonField, styles.buttonBox, {marginBottom: spaceHeight * 0.17, alignItems: 'center',}]}>
        
        
           <TouchableWithoutFeedback onPress={() => this._goToUpdatePassScreen()}>
            <View>
              <Text style={[
                CommonStyles.mediumBold,
                CommonStyles.mediumText,{color:'white', }]}>
                Update Password
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
       
      
      </View>
    );
  }

  _goToSignUpScreen() {
    this.props.navigator.push({
      screen: "Healer.SignUpScreen"
    });
  }

  _goToUpdatePassScreen() {
    this.props.navigator.push({
      screen: "Catcha.UpdatePassScreen",
      animationType: 'slide-up'
    });
  }

  _handleClickFortgotPass() {
    this.props.navigator.push({
      screen: "Healer.ForgotPasswordScreen"
    });
  }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    height: 52,
    marginBottom: spaceHeight * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox:{
    height: 26,
    marginTop: spaceHeight * 0.12,
     marginBottom: spaceHeight * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBox: {
    height: 190,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.05,
  },
  subFormBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth - 700,
    height: 45,
    marginBottom: 25,
  },
  noteBox: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
   buttonBox: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  }
});
