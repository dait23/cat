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

export default class DaftarScreen extends Component {
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

       <View style={[{flex:2, marginTop: deviceHeight * 0.08}, styles.elementsContainer]}>

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
                      style={{position:'absolute', bottom: 22,left: 20, width: 19, height: 18}}
                    />
                    <TextInput
                      placeholder='Nomor Anggota'
                      style={CommonStyles.textInput}
                      underlineColorAndroid='transparent'
                    />
                  </View>
                 
                   <View style={[CommonStyles.buttonFieldLogin, styles.buttonBox, { marginTop: spaceHeight * 0.15, }]}>
        
        
                 <TouchableWithoutFeedback onPress={this.openModal}>
                  <View>
                    <Text style={[
                      CommonStyles.mediumBold,
                      CommonStyles.normalText,{color:'white', }]}>
                      Daftar
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <View style={[CommonStyles.buttonFieldYellow, styles.buttonBox, {marginBottom: spaceHeight * 0.1}]}>
        
        
                 <TouchableWithoutFeedback onPress={this._goToMainScreen.bind(this)}>
                  <View>
                    <Text style={[
                      CommonStyles.mediumBold,
                      CommonStyles.normalText,{color:'white', }]}>
                      Daftar Baru
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              

            

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
            padding: 25,

            backgroundColor: "#fff",
            margin: deviceWidth * 0.1,

          }}
           containerStyle={{
              justifyContent: "center"
            }}
        

        >
           <View style={styles.titleBox}>
           <Image
                      source={require('../../img/fkppi/ic_success.png')}
                      style={{width: 45, height: 45, alignSelf: 'center', marginBottom:10}}
                    />
            <Text style={[
            CommonStyles.forgotText,
            CommonStyles.blackColor,
            CommonStyles.extraBold,{ textAlign: 'center'}]}>
           Terkonfirmasi!
          </Text>

          <Text style={{textAlign: 'center',marginTop:15, fontSize: 16, color:'#adadad'}}>
         Nomor Anggota Terdaftar Selamat Datang !
          </Text>

          <View style={{height: 40, marginTop: 20,borderColor:'#dce1e4',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor:'#fbfbfb', justifyContent: 'center', alignItems: 'center' }}>
           
           <Text style={[
                      CommonStyles.mediumBold,
                      CommonStyles.itemHeaderText,{color:'#000', textAlign:  'center' }]}>Anna R. Legawati</Text>

          </View>

          <View style={{height: 40, marginTop: 30,borderColor:'#ffbf20', backgroundColor: '#ffbf20', marginLeft: 20, marginRight: 20, justifyContent: 'center' }}>
            <TouchableOpacity>
              <Text style={[
                      CommonStyles.mediumBold,
                      CommonStyles.itemHeaderText,{color:'#fff', textAlign:  'center' }]}>Lanjut</Text>
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
    marginTop: deviceHeight * 0.20,
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
