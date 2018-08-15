import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  PixelRatio
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Entypo';

import GradientButton from '../elements/GradientButton';
import CommonStyles, {
  NAV_HEIGHT,
  deviceHeight,
  deviceWidth,
  shadowOpt
} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';
import SelectBox from '../elements/SelectBox';
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-picker';
import {Select, Option} from "react-native-chooser";
export default class AddDrugsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
     this. state = {
      datax:{},
      email: '',
      password: '',
      password1:'',
      avatarSource: null,
      videoSource: null
     }
  }

  focusChangeField = (focusField) => {
    this.refs[focusField].focus();
  }
  onSelect(value, label) {
    this.setState({value : value});
  }

    selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }




  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Lapor Gangguan'
        />
        <ScrollView
         style={CommonStyles.scrollView}
        >
        <View style={styles.addDrugsBox}>
          <View style={styles.addDrugsButton}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Image
              source={require('../../img/healer/photoCamera.png')}
              style={{width: 30, height: 25}}
            />:
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
          </View>
          <View style={styles.formBox}>
            <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/avatar.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 19, height: 22}}
            />
            <TextInput
              placeholder='Nama Anda'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              returnKeyType="next"
              ref="signUpName"
              onSubmitEditing={() => this.focusChangeField('signUpEmail')}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/envelope.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 22, height: 17}}
            />
            <TextInput
              placeholder='Email Anda'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="email-address"
              returnKeyType="next"
              ref="signUpEmail"
              onSubmitEditing={() => this.focusChangeField('signUpPass')}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
          </View>

          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Password'
              secureTextEntry
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              returnKeyType="next"
              ref="signUpPass"
              onSubmitEditing={() => this.focusChangeField('signUpPass1')}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              onSubmitEditing={this._getLogin}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Ulangi Password'
              secureTextEntry
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              ref="signUpPass1"
              returnKeyType="done"
              onChangeText={(password1) => this.setState({password1})}
              value={this.state.password1}
              onSubmitEditing={this._getRegister}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Ulangi Password'
              secureTextEntry
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              ref="signUpPass1"
              returnKeyType="done"
              onChangeText={(password1) => this.setState({password1})}
              value={this.state.password1}
              onSubmitEditing={this._getRegister}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Ulangi Password'
              secureTextEntry
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              ref="signUpPass1"
              returnKeyType="done"
              onChangeText={(password1) => this.setState({password1})}
              value={this.state.password1}
              onSubmitEditing={this._getRegister}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Ulangi Password'
              secureTextEntry
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              ref="signUpPass1"
              returnKeyType="done"
              onChangeText={(password1) => this.setState({password1})}
              value={this.state.password1}
              onSubmitEditing={this._getRegister}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Ulangi Password'
              secureTextEntry
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              ref="signUpPass1"
              returnKeyType="done"
              onChangeText={(password1) => this.setState({password1})}
              value={this.state.password1}
              onSubmitEditing={this._getRegister}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/healer/padlock.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />
            <TextInput
              placeholder='Ulangi Password'
              secureTextEntry
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              ref="signUpPass1"
              returnKeyType="done"
              onChangeText={(password1) => this.setState({password1})}
              value={this.state.password1}
              onSubmitEditing={this._getRegister}
            />
          </View>
          </View>
          <View style={CommonStyles.buttonBox}>
            <GradientButton
              onPressButton={this._handleAddDrugs.bind(this)}
              setting={shadowOpt}
              btnText="LAPOR"
            />
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }

  // Go to ListDrugsScreen
  _handleAddDrugs() {
    this.props.navigator.push({
      title: "Drugs List",
      screen: "Healer.ListDrugsScreen"
    });
  }
}

const ELEMENT_HEIGHT = 440;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT - 75;

const styles = StyleSheet.create({
  addDrugsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spaceHeight * 0.3 + NAV_HEIGHT,
    marginBottom: spaceHeight * 0.18,
  },
  addDrugsButton: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spaceHeight * 0.29,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 15,
    borderColor: 'rgb(150,150,150)',
  },
  formBox: {
    height: 305,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.24,
  },
  selectboxField: {
    width: deviceWidth - 55,
    height: 91,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 25,
    backgroundColor:'#FFFFFF',
  },
  selectboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
