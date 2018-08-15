import React, {
  Component
} from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  AsyncStorage,
  Platform,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

//import { appSingleNavigation } from '../styles/navigatorStyle';

import { appSingleNavigation , singleScreenNavigation, noNavTabbarNavigation } from '../styles/navigatorStyle';
import SingleScreenCustomNavbar from '../elements/SingleScreenCustomNavbar';

export default class StartUpScreen extends Component {
  static navigatorStyle = appSingleNavigation;

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    var that = this;
    that.getLogin();
      
  }


  getLogin(){

     AsyncStorage.getItem('userID')
      .then((userID) => {
         this.props.navigator.push({
           passProps: {
             ID : userID
            },
          screen: "Healer.MainServiceScreen"
        });

        const createTabs = () => {
      let tabs = [
        {
          screen: 'Healer.MainServiceScreen',
          icon: require('../../img/one.png'),
          navigatorStyle: noNavTabbarNavigation,
        },
        {
          screen: 'Healer.DrugScreen',
          icon: require('../../img/healer/drugs.png'),
          navigatorStyle: noNavTabbarNavigation,
        },
        {
          screen: 'Healer.ListDoctorsScreen',
          icon: require('../../img/healer/doctors.png'),
          navigatorStyle: noNavTabbarNavigation,
        },
        {
          screen: 'Healer.DashboardTestIndicatorsScreen',
          icon: require('../../img/healer/dashboard.png'),
          navigatorStyle: noNavTabbarNavigation,
        },
        {
          screen: 'Healer.UserProfileScreen',
          icon: require('../../img/healer/profile.png'),
          navigatorStyle: noNavTabbarNavigation,
        }
      ];
      return tabs;
    };

    Navigation.startTabBasedApp({
      tabs: createTabs(),
      appStyle: {
        orientation: 'portrait',
        tabBarHidden: true,
      },
      drawer: {
        left: {
          screen: 'Healer.SideMenu'
        }
      },
      animationType: 'slide-down'
    });
      })
      .catch((error) => {
        console.error(error)
        this.props.navigator.push({
          screen: "Healer.SignInScreen"
        });
      })


  }
  render() {
   

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 99, width: 234}}>
          <Image
            source={require('../../img/emma/logo.png')}
            style={{width: 234, height: 99}}
          />
        </View>
      </View>
    );
  }
}
