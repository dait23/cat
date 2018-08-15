import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  blueGradient,
} from '../styles/CommonStyles';
import PrimeTabBar from '../elements/PrimeTabBar';


export default class CustomTabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PrimeTabBar
        navigator={this.props.navigator}
        isActive={this.props.isActive}
        tabBtn0={{
          activeBtn:"home-outline",
          inactiveBtn:"home-outline",
          size: 30,
          onPressButton: this._onHomeIconClick.bind(this),
        }}
        tabBtn1={{
          activeBtn: require('../../img/emma/ticketAktif.png'),
          inactiveBtn: require('../../img/emma/ticket.png'),
          width: 30,
          height: 30,
          buttonAction: this._onDrugsIconClick.bind(this),
        }}
        tabBtn2={{
          activeBtn: require('../../img/emma/customerAktif.png'),
          inactiveBtn: require('../../img/emma/customer.png'),
          width: 35,
          height: 35,
          buttonAction: this._onCustomerIconClick.bind(this),
        }}
        tabBtn3={{
          activeBtn: require('../../img/emma/invoiceAktif.png'),
          inactiveBtn: require('../../img/emma/invoice.png'),
          width: 30,
          height: 30,
          buttonAction: this._onDashboardIconClick.bind(this),
        }}
        tabBtn4={{
          activeBtn: require('../../img/emma/userAktif.png'),
          inactiveBtn: require('../../img/emma/user.png'),
          width: 32,
          height: 33,
          buttonAction: this._onProfileIconClick.bind(this),
        }}
      />
    );
  }

  // Handle click buttons of tabbar
  _onHomeIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 0
    });
  }

  _onDrugsIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 1
    });
  }

  _onCustomerIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 2
    });
  }

 
  _onDashboardIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 3
    });
  }

  _onProfileIconClick() {
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 4
    });
  }
}
