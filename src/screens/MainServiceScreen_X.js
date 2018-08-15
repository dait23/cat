import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
   StatusBar,
    ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import CommonStyles, {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
} from '../styles/CommonStyles';
import MenuItemBox from '../components/MenuItemBox';
//import CustomTabBar from '../components/CommonTabBar';
import NoNavigationBar from '../elements/NoNavigationBar';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';

import { appSingleNavigation } from '../styles/navigatorStyle';

export default class MainServiceScreen extends Component {
     static navigatorStyle = appSingleNavigation;
  constructor(props) {
    super(props);
  }
  

  componentDidMount() {
       StatusBar.setHidden(true);
    }
   
  render() {
    
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
      <View style={CommonStyles.mainPage}>
        <NoNavigationBar
          navigator={this.props.navigator}
          isBack={false} 
          rightButtons={
            [
            
              {
                key: 2,
                buttonIcon: require('../../img/fkppi/ic_faq.png'),
                buttonAction: this._handleClickNotificationButton.bind(this),
                buttonWidth: 25,
                buttonHeight: 25,
              }
            ]
          }
        />
         <View style={[{flex:1, marginTop: deviceHeight * 0.05}, styles.elementsContainer]}>

         <View style={{flex: 1}}>
             <View style={[styles.logoBox,{height: 130, width: 90}]}>
              <Image
                source={require('../../img/fkppi/logo2.png')}
                style={{width: 90, height: 130}}
              />
            </View>
         </View>
        </View>
       <View style={{flex: 3, backgroundColor: '#fbfbfb',justifyContent: 'center', flexDirection: 'row', }}>
        
        <View style={styles.fullField}>
          <View style={styles.colMainLeft}>
            <MenuItemBox
              boxTitle='Daftar'
              boxIcon={require('../../img/fkppi/ic_menu_daftar.png')}
              boxIconWidth={96} 
              boxIconHeight={39}
              onPressBoxItem={this._handleClickFindDoctor.bind(this)}
            />
            <MenuItemBox
              boxTitle='Mabes'
              boxIcon={require('../../img/fkppi/ic_menu_mabes.png')}
              boxIconWidth={78} 
              boxIconHeight={57}
              onPressBoxItem={this._handleClickAppointment.bind(this)}
            />
          </View>

          <View style={styles.colMainRight}>
            <MenuItemBox
              boxTitle='Pesan'
              boxIcon={require('../../img/fkppi/ic_menu_pesan.png')}
              boxIconWidth={43} 
              boxIconHeight={75}
              onPressBoxItem={this._handleClickFindDoctor.bind(this)}
            />
            <MenuItemBox
              boxTitle='Berita'
              boxIcon={require('../../img/fkppi/ic_menu_berita.png')}
              boxIconWidth={59} 
              boxIconHeight={60}
              onPressBoxItem={this._handleClickAppointment.bind(this)}
            />
          </View>
        </View>
      

       </View>

        
      </View>
      </ImageBackground>
    )
  }

  // Go to AppointmentScreen
  _handleClickAppointment() {
    this.props.navigator.push({
      screen: "Healer.AppointmentScreen",
      animated: true,
    });
  }

  _handleClickNotificationButton() {
    this.props.navigator.push({
      screen: "Healer.NotificationScreen",
      animated: true,
    });
  }

  _handleClickEmailButton() {
    // TODO: Click email button
  }

  // Go to FindDoctorScreen
  _handleClickFindDoctor() {
    this.props.navigator.push({
      screen: "Healer.FindDoctorScreen",
      animated: true,
    });
  }

  // Go to FindHospitalScreen 
  _handleClickFindHospital() {
    this.props.navigator.push({
      screen: "Healer.FindHospitalScreen",
      animated: true,
    });
  }

  // Go to ServicePriceScreen 
  _handleClickServicePrice() {
    this.props.navigator.push({
      screen: "Healer.ServicePriceScreen",
      animated: true,
    });
  }
}

const ELEMENT_HEIGHT = 430;
const spaceHeight = deviceHeight - NAV_HEIGHT - TAB_HEIGHT - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    marginTop: spaceHeight * 0.1 + NAV_HEIGHT, 
    paddingLeft: 27,
    paddingRight: 27,
  },
  fullField: {
    flex: 3,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft:15,
    marginRight: 15,
    marginTop: 15,

  },
   fullFields: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ccc',
     alignItems: 'flex-start', 
  },
  colMainLeft: {
    flex: 1,
    marginRight: 8,
    marginLeft: 10,
    alignItems: 'center'
  },
  colMainRight: {
    flex: 1,
    marginLeft: 8,
      marginRight: 8,
  },
   elementsContainer: {
      flex: 1,
    
    },
    logoBox:{
      alignSelf:'center',
      flexDirection: 'row',

    },
});
