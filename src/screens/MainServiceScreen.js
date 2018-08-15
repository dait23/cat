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
import MenuItemBox from '../components/MenuItemBox';
//import CustomTabBar from '../components/CommonTabBar';
import NoNavigationBar from '../elements/NoNavigationBar';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';

import { appSingleNavigation } from '../styles/navigatorStyle';

export default class MainServiceScreen extends Component {
     static navigatorStyle = appSingleNavigation;
  constructor(props) {
    super(props);

     this._handleClickKomunitas = this._handleClickKomunitas.bind(this)
     this._handleClickMabes = this._handleClickMabes.bind(this)
     this._handleClickPesan = this._handleClickPesan.bind(this)
      this._handleClickKontakList = this._handleClickKontakList.bind(this)
  }
  

  componentDidMount() {
       StatusBar.setHidden(true);
    }
   
  render() {

    const items = [
      { name: 'Daftar', width: 96, height:75,link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534142791/ic_menu_daftarx.png' },
      { name: 'Pesan', width: 43, height:75, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534132879/ic_menu_pesan.png' },
      { name: 'Mabes', width: 78, height:57, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534132879/ic_menu_mabes.png' },
      { name: 'Berita', width: 59, height:60, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534132879/ic_menu_berita.png' },
      { name: 'Kontak', width: 63, height:63, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534133008/ic_menu_kontak.png' },
      { name: 'Komunitas', width: 59, height:66, link:'_handleClickFindDoctor', url:'https://res.cloudinary.com/catcha/image/upload/v1534133008/ic_menu_komunitas.png' },

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
          isBack={false} 
          rightButtons={
            [
            
              {
                key: 2,
                buttonIcon: require('../../img/fkppi/ic_faq.png'),
                buttonAction: this._handleClickFaq.bind(this),
                buttonWidth: 25,
                buttonHeight: 25,
              }
            ]
          }
        />
         <View style={[{flex:1, marginTop: deviceHeight * 0.02}, styles.elementsContainer]}>

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
        
        <GridView
        itemDimension={140}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          <MenuItemBox
              boxTitle={item.name}
              boxIcon={{uri: item.url}}
              boxIconWidth={item.width} 
              boxIconHeight={item.height}
              onPressBoxItem={this._handleClickPesan.bind(this)}
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

   _handleClickKomunitas() {
    this.props.navigator.push({
      screen: "Fkppi.KomunitasScreen",
      animated: true,
    });
  }

  _handleClickMabes() {
    this.props.navigator.push({
      screen: "Fkppi.MabesScreen",
      animated: true,
    });
  }

  _handleClickKontakList() {
    this.props.navigator.push({
      screen: "Fkppi.KontakListScreen",
      animated: true,
    });
  }

  _handleClickFaq() {
    this.props.navigator.push({
      screen: "Fkppi.FaqScreen",
      animated: true,
    });
  }

  _handleClickPesan() {
    this.props.navigator.push({
      screen: "Fkppi.PesanScreen",
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

    /////////

    gridView: {
    paddingTop: 5,
    flex: 1,
    margin:10
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
