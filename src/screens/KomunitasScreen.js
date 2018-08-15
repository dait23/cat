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

import GridView from 'react-native-super-grid';

import CommonStyles, {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
} from '../styles/CommonStyles';
import MenuItemBox from '../components/MenuItemBox2';
//import CustomTabBar from '../components/CommonTabBar';
import NoNavigationBar from '../elements/NoNavigationBar';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';

import { appSingleNavigation } from '../styles/navigatorStyle';

export default class KomunitasScreen extends Component {
     static navigatorStyle = appSingleNavigation;
  constructor(props) {
    super(props);
  }
  

  componentDidMount() {
       StatusBar.setHidden(true);
    }
   
  render() {

    const items = [
      { name: 'Fkppi', width: 67, height:96, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534147477/logo_fkppi.png' },
      { name: 'Bela Negara', width: 82, height:104, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534147477/logo_bela_negara.png' },
      { name: 'Fli', width: 106, height:103, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534147477/logo_fli.png' },
      { name: 'Perbakin', width: 80, height:98, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534147477/logo_perbakin.png' },
      { name: 'Pencak Silat', width: 86, height:86, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534147477/logo_ikatan_pencak_silat.png' },
      { name: 'Komunitas', width: 75, height:91, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534147477/logo_possi.png' },

    ];
    
    return (
      <ImageBackground
          source={require('../../img/fkppi/bg.png')}
          imageStyle={{resizeMode: 'cover'}}
          style={{width: '100%', height: '100%'}}
        >
       
      <View style={CommonStyles.mainPage}>
        <NoNavigationBar
          navigator={this.props.navigator}
          isBack={true} 
          
        />
         <View style={[{flex:1, marginTop: deviceHeight * 0.02}, styles.elementsContainer]}>

         <View style={{flex: 1, justifyContent: 'center' }}>
             <View style={styles.logoBox}>
               <Text style={[
              CommonStyles.mediumBold,
              CommonStyles.headerText,
              CommonStyles.whiteColor]}>Komunitas</Text>
              <Text style={[ CommonStyles.normalText,CommonStyles.blackColor]}>
                lorem ipsum dolor sit amet
              </Text>
            </View>
         </View>
        </View>

       <View style={{flex: 5, backgroundColor: '#fbfbfb',justifyContent: 'center', flexDirection: 'row', }}>
        
        <GridView
        itemDimension={150}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          <MenuItemBox
              boxTitle={item.name}
              boxIcon={{uri: item.url}}
              boxIconWidth={item.width} 
              boxIconHeight={item.height}
              onPressBoxItem={this._handleClickDaftar.bind(this)}
            >
           
          </MenuItemBox>

        )}
      />
      

       </View>

        
      </View>
      </ImageBackground>
    )
  }

//
  _handleClickDaftar() {
    this.props.navigator.push({
      screen: "Fkppi.DaftarScreen",
      animated: true,
    });
  }

  _handleClickNotificationButton() {
    this.props.navigator.push({
      screen: "Healer.NotificationScreen",
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
      alignItems: 'center', 
      flexDirection: 'column',

    },

    /////////

    gridView: {
    paddingTop: 5,
    flex: 1,
    margin:10,

  },
  itemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 50,
    backgroundColor: '#000000'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
