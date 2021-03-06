import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class DoctorInformationScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Information'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/whiteHeart.png'),
                buttonAction: this._handleClickHeartButton.bind(this),
                buttonWidth: 26,
                buttonHeight: 23,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <Item 
              headerText='Detail'
              infoTextCount={1}
              infoText1={this.props.company}
            />
            <Item 
              headerText='Alamat'
              infoTextCount={2}
              infoText1={this.props.alamat}
              infoText2='9:00 - 17:00, Senin to Jumat'
            />
            <Item 
              headerText='Telepon'
              infoTextCount={1}
              infoText1={this.props.telepon}

            />
            <Item 
              headerText='Kontak Person'
              infoTextCount={2}
              infoText1={this.props.firstName}
              infoText2='Bruce'
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      headerText,
      infoTextCount, 
      infoText1, 
      infoText2, 
    } = this.props;

    let infoTextArr = [];
    if (infoTextCount == 1) {
      infoTextArr = (
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.greyColor,
          CommonStyles.regularBold,
        ]}>
          {infoText1}
        </Text>
      );
    } else {
      infoTextArr = (  

        <View>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
            {marginBottom: 7}
          ]}>
           {infoText1}
          </Text>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>
            {infoText2}
          </Text>
        </View>
      );
    }
    
    return (
      <View style={[CommonStyles.itemWhiteBox,
        {
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 16,
          paddingBottom: 16,
        }
      ]}>
        <Text style={[
          CommonStyles.headerText,
          CommonStyles.blackColor,
          CommonStyles.semiBold,
          {marginBottom: 6}
        ]}>
          {headerText}
        </Text>
        {infoTextArr}
      </View>
    );
  }
}
