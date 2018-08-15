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
  ScrollView,
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

//import CustomTabBar from '../components/CommonTabBar';
import NoNavigationBar from '../elements/NoNavigationBar';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';

import { appSingleNavigation } from '../styles/navigatorStyle';

import ItemKontak from '../components/ItemKontak';

export default class KontakListScreen extends Component {
  
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
    this. state = {
      messages: [
        {
          id: 0,
          name:'P',
          from: 'fkppi pusat',
          title: 'Pendaftaran ulang',
          color:'#a3d39c',
          body: 'lorem ipsum dolor',
        },
         {
          id: 1,
          name:'A',
          from: 'fkppi pusat',
          title: 'Pendaftaran ulang',
          color:'#fdc689',
          body: 'lorem ipsum dolor',
        },
        {
          id: 2,
          name:'S',
          from: 'fkppi pusat',
          title: 'Pendaftaran ulang',
          color:'#6dcff6',
          body: 'lorem ipsum dolor',
        }
      ]
    }
   
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
              CommonStyles.whiteColor]}>Kontak</Text>
              <Text style={[ CommonStyles.normalText,CommonStyles.blackColor]}>
                Hasil Pencarian
              </Text>
            </View>
         </View>
        </View>

       <View style={{flex: 5, backgroundColor: '#fbfbfb' }}>
        
         <ScrollView style={CommonStyles.noTabScroll}>
          <View style={CommonStyles.wrapperBox}>
            {
              this.state.messages.map((item, index) => (
                <ItemKontak
                  key={item.id}
                  itemName={item.name}
                  itemColor={item.color}
                  itemImg={item.itemImg}
                  iconWidth={item.iconWidth}
                  iconHeight={item.iconHeight}
                  itemHeaderText={item.title}
                  onPressItem={this._handleClickListDrugsItem.bind(this)}
                />
              ))
            }
          </View>
        </ScrollView>

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
  // Goto DoctorDetailsScreen
  _handleClickListDrugsItem() {
    this.props.navigator.push({
      title: 'Drugs Detail',
      screen: "Healer.DrugsDetailsScreen"
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
