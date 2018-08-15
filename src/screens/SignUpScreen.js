import React, {Component} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  Image,
  PixelRatio,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

// import GradientButton from '../elements/GradientButton';
import CommonStyles, {shadowOpt, spaceHeight} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';
// import SelectBox from '../elements/SelectBox';

import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RaisedTextButton } from 'react-native-material-buttons';


import ImagePicker from 'react-native-image-picker';  

export default class SignUpScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
      this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
      this.onSubmitLastName = this.onSubmitLastName.bind(this);
      this.onSubmitAbout = this.onSubmitAbout.bind(this);
      this.onSubmitUsername = this.onSubmitUsername.bind(this);
      this.onSubmitEmail = this.onSubmitEmail.bind(this);
      this.onSubmitPassword = this.onSubmitPassword.bind(this);
      this.onSubmitPassword2 = this.onSubmitPassword2.bind(this);
      this.onAccessoryPress = this.onAccessoryPress.bind(this);

      this.firstnameRef = this.updateRef.bind(this, 'firstname');
      this.lastnameRef = this.updateRef.bind(this, 'lastname');
      this.aboutRef = this.updateRef.bind(this, 'about');
      this.usernameRef = this.updateRef.bind(this, 'username');
      this.emailRef = this.updateRef.bind(this, 'email');
      this.passwordRef = this.updateRef.bind(this, 'password');
      this.password2Ref = this.updateRef.bind(this, 'password2');

      this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);
      this.state = {
          firstname: 'Eddard',
          username:'stark123',
          lastname: 'Stark',
          about: 'Stoic, dutiful, and honorable man, considered to embody the values of the North',
          secureTextEntry: true,
          avatarSource: null,
          videoSource: null
        };
  }

  ////////////////////////

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

  //////////////////////

  onFocus() {
      let { errors = {} } = this.state;

      for (let name in errors) {
        let ref = this[name];

        if (ref && ref.isFocused()) {
          delete errors[name];
        }
      }

      this.setState({ errors });
    }

    onChangeText(text) {
      ['firstname', 'lastname', 'username', 'about', 'email', 'password', 'password2']
        .map((name) => ({ name, ref: this[name] }))
        .forEach(({ name, ref }) => {
          if (ref.isFocused()) {
            this.setState({ [name]: text });
          }
        });
    }

    onAccessoryPress() {
      this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    }

    onSubmitFirstName() {
      this.lastname.focus();
    }

    onSubmitLastName() {
      this.about.focus();
    }

    onSubmitAbout() {
      this.email.focus();
    }

    onSubmitUsername() {
      this.username.focus();
    }

    onSubmitEmail() {
      this.password.focus();
    }

    onSubmitPassword() {
      this.password.blur();
    }

     onSubmitPassword2() {
      this.password2.blur();
    }

    onSubmit() {
      let errors = {};

      ['firstname', 'lastname', 'username' ,'email', 'password', 'password2']
        .forEach((name) => {
          let value = this[name].value();

          if (!value) {
            errors[name] = 'Should not be empty';
          } else {
            if ('password' === name && value.length < 6) {
              errors[name] = 'Too short';
            }

          }
        });

      this.setState({ errors });
    }

    updateRef(name, ref) {
      this[name] = ref;
    }

    renderPasswordAccessory() {
      let { secureTextEntry } = this.state;

      let name = secureTextEntry?
        'visibility':
        'visibility-off';

      return (
        <MaterialIcon
          size={24}
          name={name}
          color={TextField.defaultProps.baseColor}
          onPress={this.onAccessoryPress}
          suppressHighlighting
        />
      );
    }

    ///////////////

  render() {
      let { errors = {}, secureTextEntry, ...data } = this.state;
      let { firstname = 'name', lastname = 'house', username= '123' } = data;

      let defaultEmail = `${firstname}@${lastname}.com`
        .replace(/\s+/g, '_')
        .toLowerCase();
    return (
      <View style={CommonStyles.normalPage}>
       <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Sign Up'
        />
        <ScrollView 
            style={CommonStyles.scrollView}
            keyboardShouldPersistTaps='handled'
            >
     
           

            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
              { this.state.avatarSource === null ? <Image
              source={require('../../img/fkppi/photo.png')}
              style={{width: 76, height: 78}}
            /> :
                <Image style={styles.avatar} source={this.state.avatarSource} />
              }
          </View>
        </TouchableOpacity>
       
          <View style={[{flex:1}, styles.elementsContainer]}>
            <View style={{flex: 2}}>
                <TextField
                  ref={this.firstnameRef}
                  value={data.firstname}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onFocus={this.onFocus}
                  tintColor='rgb(255, 191, 32)'
                  onSubmitEditing={this.onSubmitFirstName}
                  returnKeyType='next'
                  label='First Name'
                  error={errors.firstname}
                />

                <TextField
                  ref={this.lastnameRef}
                  value={data.lastname}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onFocus={this.onFocus}
                  tintColor='rgb(255, 191, 32)'
                  onSubmitEditing={this.onSubmitLastName}
                  returnKeyType='next'
                  label='Last Name'
                  error={errors.lastname}
                />

                <TextField
                  ref={this.usernameRef}
                  value={data.username}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onFocus={this.onFocus}
                   tintColor='rgb(255, 191, 32)'
                  onSubmitEditing={this.onSubmitUsername}
                  returnKeyType='next'
                  label='Username'
                  error={errors.username}
                />
                <TextField
                  ref={this.emailRef}
                  value={data.email}
                  defaultValue={defaultEmail}
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoCorrect={false}
                   tintColor='rgb(255, 191, 32)'
                  enablesReturnKeyAutomatically={true}
                  onFocus={this.onFocus}
                  onSubmitEditing={this.onSubmitEmail}
                  returnKeyType='next'
                  label='Email Address'
                  error={errors.email}
                />
                <TextField
                  ref={this.passwordRef}
                  value={data.password}
                  secureTextEntry={secureTextEntry}
                  autoCapitalize='none'
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  clearTextOnFocus={true}
                  onFocus={this.onFocus}
                   tintColor='rgb(255, 191, 32)'
                  onSubmitEditing={this.onSubmitPassword}
                  returnKeyType='next'
                  label='Password'
                  error={errors.password}
                  title='Password'
                  maxLength={30}
                  characterRestriction={20}
                  renderAccessory={this.renderPasswordAccessory}
                />

                <TextField
                  ref={this.password2Ref}
                  value={data.password2}
                  secureTextEntry={secureTextEntry}
                  autoCapitalize='none'
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  clearTextOnFocus={true}
                  onFocus={this.onFocus}
                  onSubmitEditing={this.onSubmitPassword2}
                  returnKeyType='done'
                  tintColor='rgb(255, 191, 32)'
                  label='Confirm Password'
                  error={errors.password2}
                  title='Confirm Password'
                  maxLength={30}
                  characterRestriction={20}
                  renderAccessory={this.renderPasswordAccessory}
                />
            </View>

             <View style={styles.container}>
              <RaisedTextButton style={{height: 50}} onPress={this.onSubmit} title='Sign Up' color='#ffbf20' titleColor='white' />
            </View>
            
          
        </View>
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  formBox: {
    flex: 1,
    height: 155,
    backgroundColor: '#000000',
    alignItems: 'center', 
  },
  avatarBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
     borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 75,
    width: 150,
    height: 150

  },
  nameBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  elementsContainer: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  },
  container: {
    margin: 0,
    height: 50,
    marginTop: 24,
  },
  avatarContainer: {
    borderColor: '#dce1e4',
    borderWidth: 3 / PixelRatio.get(),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
