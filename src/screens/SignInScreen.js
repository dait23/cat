import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-simple-modal";

//import GradientButton from '../elements/GradientButton';
// import PrimeButton from '../elements/PrimeButton';
// import CheckBox from '../elements/CheckBox';
import CommonStyles, { deviceHeight,shadowOpt,deviceWidth } from '../styles/CommonStyles';
import { appSingleNavigation } from '../styles/navigatorStyle';

export default class SignInScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
       StatusBar.setHidden(true);
    }

  state = { open: false };

  modalDidOpen = () => console.log("Modal did open.");
 

  modalDidClose = () => {
    this.setState({ open: false });
    console.log("Modal did close.");
  };
  
   modalClose = () => {
    this.setState({ open: false });
    console.log("Modal did close.");
  };

  openModal = () => this.setState({ open: true });


  closeModal = () => this.setState({ open: false });


  render() {
    return (
       
       <ImageBackground
          source={require('../../img/fkppi/bg.png')}
          imageStyle={{resizeMode: 'cover'}}
          style={{width: '100%', height: '100%'}}
        >

      <View style={styles.container}>

       <View style={[{flex:2, marginTop: deviceHeight * 0.04}, styles.elementsContainer]}>

         <View style={{flex: 1}}>
             <View style={[styles.logoBox,{height: 130, width: 90}]}>
              <Image
                source={require('../../img/fkppi/logo2.png')}
                style={{width: 90, height: 130}}
              />
            </View>
         </View>
          <View style={{flex: 7}}>

               <View style={styles.formBox}>
                  <View style={CommonStyles.textInputField}>
                    <Image
                      source={require('../../img/fkppi/ic_user.png')}
                      style={{position:'absolute', bottom: 15,left: 20, width: 19, height: 18}}
                    />
                    <TextInput
                      placeholder='Username'
                      style={CommonStyles.textInput}
                      underlineColorAndroid='transparent'
                    />
                  </View>
                  <View style={CommonStyles.textInputField}>
                   <Image
                    source={require('../../img/fkppi/ic_password.png')}
                    style={{position:'absolute',bottom: 15,left: 20, width: 15, height: 22}}
                  />
                  <TextInput
                    secureTextEntry={true}
                    placeholder='Password'
                    style={CommonStyles.textInput}
                    underlineColorAndroid='transparent'
                  />
                  </View>
                   <View style={[CommonStyles.buttonFieldLogin, styles.buttonBox, {marginBottom: spaceHeight * 0.1, marginTop: spaceHeight * 0.09, }]}>
        
        
                 <TouchableWithoutFeedback onPress={this._goToMainScreen.bind(this)}>
                  <View>
                    <Text style={[
                      CommonStyles.mediumBold,
                      CommonStyles.normalText,{color:'white', }]}>
                      Sign in
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>

               <View style={[CommonStyles.buttonFieldFb, styles.buttonBox, {marginBottom: spaceHeight * 0.03, marginTop: spaceHeight * 0.005, }]}>
        
        
                 <TouchableWithoutFeedback>
                  <View>
                    <Text style={[
                      CommonStyles.mediumBold,
                      CommonStyles.normalText,{color:'white', }]}>
                      <Icon name="facebook" size={16} color="#fff"/>  Sign in Facebook
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <View style={[CommonStyles.buttonFieldGoogle, styles.buttonBox, {marginBottom: spaceHeight * 0.17, marginTop: spaceHeight * 0.005, }]}>
        
        
                 <TouchableWithoutFeedback>
                  <View>
                    <Text style={[
                      CommonStyles.mediumBold,
                      CommonStyles.normalText,{color:'white', }]}>
                      <Icon name="google" size={16} color="#fff"/>  Sign in Google
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>

               </View>
           
          </View>
           <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}} >
            
            <View style={CommonStyles.fotBox}>

             <TouchableOpacity onPress={this.openModal}>
              <Text style={[
                      CommonStyles.light,
                      CommonStyles.shortSmallText,{color:'#fff'}]}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback onPress={this._goToSignUpScreen.bind(this)} >
             <View>
              <Text style={[
                      CommonStyles.light,
                      CommonStyles.shortSmallText,{color:'#fff799'}]}>New here? SIgn Up</Text>
            </View>
            </TouchableWithoutFeedback>
            
           </View>

          </View>
       </View>

       <Modal

          open={this.state.open}
          modalDidOpen={this.modalDidOpen}
          modalDidClose={this.modalDidClose}
          style={{ alignItems: "center" }}
          modalStyle={{
            borderRadius: 10,
            padding: 40,

            backgroundColor: "#fff",
            margin: deviceWidth * 0.1,

          }}
           containerStyle={{
              justifyContent: "center"
            }}
        

        >
           <View style={styles.titleBox}>
            <Text style={[
            CommonStyles.forgotText,
            CommonStyles.blackColor,
            CommonStyles.extraBold
          ,{ textAlign: 'center'}]}>
           Forgot Password
          </Text>

          <Text style={{textAlign: 'center',marginTop:15, fontSize: 16, color:'#adadad'}}>Lorem ipsum dolor sit amet, consec
adipiscing elit.</Text>

          <View style={{height: 60, marginTop: 20,borderColor:'#dce1e4',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor:'#fbfbfb',}}>
           
           <TextInput
                      placeholder='your e-mail address'
                      style={CommonStyles.textInputx}
                      underlineColorAndroid='transparent'
                      keyboardType='email-address'
                    />

          </View>

          <View style={{height: 60, marginTop: 30,borderColor:'#ffbf20', backgroundColor: '#ffbf20', marginLeft: 20, marginRight: 20, justifyContent: 'center' }}>
            <TouchableOpacity>
              <Text style={[
                      CommonStyles.mediumBold,
                      CommonStyles.itemHeaderText,{color:'#fff', textAlign:  'center' }]}>Reset my password</Text>
            </TouchableOpacity>

          </View>
           
          </View>
       
        
  
        </Modal>



      </View>
    </ImageBackground>
      
    );
  }

  _goToSignUpScreen() {
    this.props.navigator.push({
      screen: "Fkppi.SignUpScreen"
    });
  }

    // Go to FindDoctorScreen
  _goToMainScreen() {
    this.props.navigator.push({
      screen: "Fkppi.MainServiceScreen",
      animated: true,
    });
  }


  // _goToUpdatePassScreen() {
  //   this.props.navigator.push({
  //     screen: "Fkppi.UpdatePassScreen",
  //     animationType: 'slide-up'
  //   });
  // }

  // _handleClickFortgotPass() {
  //   this.props.navigator.push({
  //     screen: "Fkppi.ForgotPasswordScreen"
  //   });
  // }
}

const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

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
    formBox: {
    marginTop: deviceHeight * 0.18,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.05,
  },
  buttonBox: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
 titleBox: {
   justifyContent: 'flex-start'
  },
});
