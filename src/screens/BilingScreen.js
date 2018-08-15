import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
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

export default class BilingScreen extends Component {
  constructor(props) {
    super(props);

     this._handleTunggak = this._handleTunggak.bind(this);
     this._handleKontrak = this._handleKontrak.bind(this);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Biling &amp; Invoice'
          isBack={false} 
        />
        <View style={styles.titleBox}>
          <Text style={[
            CommonStyles.titleText,
            CommonStyles.greyColor,
            CommonStyles.semiBold,
          ]}>
           Biling Invoice
          </Text>
        </View>
        <View style={styles.fullField}>
          <View style={styles.colMainLeft}>

           <MenuItemBox
              boxTitle='Tunggakan'
              boxIcon={require('../../img/emma/clipboard.png')}
              boxIconWidth={30} 
              boxIconHeight={30}
              onPressBoxItem={() =>this._handleTunggak(this.props.ManagerId)}
            />
            
           
          </View>
          <View style={styles.colMainRight}>
           <MenuItemBox
              boxTitle='Kontrak'
              boxIcon={require('../../img/emma/kontrak.png')}
              boxIconWidth={35}
              boxIconHeight={35}
              onPressBoxItem={() =>this._handleKontrak(this.props.ManagerId)}
            />
            
          </View>
        </View>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab3'
        />
      </View>
    )
  }

  _handleKontrak(manager) {
    this.props.navigator.push({
       passProps: {
       managerId: manager,
      },
      title: "Drugs List",
      screen: "Emma.KontrakScreen"
    });
  }

  

  _handleTunggak(manager) {
   this.props.navigator.push({
      passProps: {
       managerId: manager,
      },
      title: "Drugs List",
      screen: "Emma.TunggakScreen",
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
