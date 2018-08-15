import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Alert,
  TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles, {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
} from '../styles/CommonStyles';
import MenuItemBox from '../components/MenuItemBox';
import CustomTabBar from '../components/CommonTabBar';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DrugScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Tiket'
          isBack={false} 
        />
        <View style={styles.titleBox}>
          <Text style={[
            CommonStyles.titleText,
            CommonStyles.greyColor,
            CommonStyles.semiBold,
          ]}>
            TICKET GANGGUAN PELANGGAN
          </Text>
        </View>
        <View style={styles.fullField}>
          <View style={styles.colMainLeft}>

           <MenuItemBox
              boxTitle='Status Tiket'
              boxIcon={require('../../img/emma/status.png')}
              boxIconWidth={30} 
              boxIconHeight={30}
              onPressBoxItem={() =>this._handleClickDrugsDetail(this.props.ManagerId)}
            />
            
           
          </View>
          <View style={styles.colMainRight}>
           <MenuItemBox
              boxTitle='History Tiket'
              boxIcon={require('../../img/emma/ticketWhite.png')}
              boxIconWidth={30}
              boxIconHeight={30}
              onPressBoxItem={() =>this._handleClickDrugsList(this.props.ManagerId)}
            />
            
          </View>
        </View>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab1'
        />
      </View>
    )
  }

  _handleClickDrugsList(manager) {
    this.props.navigator.push({
      title: "Drugs List",
      passProps: {
       managerId: manager,
      },
      screen: "Healer.ListDrugsScreen"
    });
  }

  _handleClickReminder() {
    // TODO: Go ReminderScreen
  }

  _handleClickDrugsDetail(manager) {
   this.props.navigator.push({
      title: "Drugs List",
      passProps: {
       managerId: manager,
      },
      screen: "Healer.SettingsScreen",
    });
  }

  _handleClickDrugsShop() {
    this.props.navigator.push({
      title: "Drugs Shop",
      screen: "Healer.DrugsShopScreen"
    });
  }
}

const ELEMENT_HEIGHT = 375;
const spaceHeight = deviceHeight - NAV_HEIGHT - TAB_HEIGHT - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  titleBox: {
    marginTop: spaceHeight * 0.36 + NAV_HEIGHT, 
    paddingLeft: 27,
    paddingRight: 27,
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: spaceHeight * 0.2 - 15, 
    marginBottom: spaceHeight * 0.4 - 15, 
  },
  colMainLeft: {
    flex: 1,
    marginRight: 8,
  },
  colMainRight: {
    flex: 1,
    marginLeft: 8,
  },
});
