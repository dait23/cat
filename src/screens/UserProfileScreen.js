import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles, { deviceHeight } from '../styles/CommonStyles';
import ItemWithImage from '../components/ItemWithImage';
import CustomTabBar from '../components/CommonTabBar';
import GradientNavigationBar from '../elements/GradientNavigationBar';

import {Thumbnail } from 'native-base';

export default class UserProfileScreen extends Component {
  constructor(props) {
    super(props);
     this._handleProfile = this._handleProfile.bind(this);
  }


    // Goto DoctorDetailsScreen
  _handleProfile(id) {
    this.props.navigator.push({
      title: "Customer Details",
      passProps: {
       idx:id
      },
      screen: "Emma.UsersDeatilsScreen"
    });
  }

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Profile'
          isBack={false} 
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/healer/settings.png'),
                buttonAction: this.onClickSettingButton.bind(this),
                buttonWidth: 22,
                buttonHeight: 22,
              }
            ]
          }
        />
        <ScrollView style={CommonStyles.scrollView}>
          <View style={styles.avatarBox}>
           <Thumbnail large source={{uri: this.props.ImageUrl}} />
            
          </View>
          <View style={styles.nameBox}>
            <Text style={[
              CommonStyles.headerText,
              CommonStyles.blackColor,
              CommonStyles.mediumBold
            ]}>
              {this.props.FirstName} {this.props.LastName} 
            </Text>
             <Text style={[
               CommonStyles.smallText,
                  CommonStyles.greyColor,
                  CommonStyles.regularBold
            ]}>
              Account Manager
            </Text>
          </View>
         
          <View style={styles.otherBox}>
            <ItemWithImage
              itemImg={require('../../img/emma/userAktif.png')}
              iconWidth={26}
              iconHeight={26}
              itemHeaderText='Profile Details'
              onPressItem={() => this._handleProfile(this.props.ManagerId)}
            />
            <ItemWithImage
              itemImg={require('../../img/healer/padlock.png')}
              iconWidth={17}
              iconHeight={22}
              itemHeaderText='Logout'
              onPressItem={this._handleClickLogout.bind(this)}
            />
            
          </View>
        </ScrollView>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab4'
        />
      </View>
    );
  }

  onClickSettingButton() {
   
  }

  // Go to GoalSettingsScreen 
  _handleClickGoalSettings() {
    
  }

  _handleClickLogout(){

  AsyncStorage.removeItem('userDetails')
      .then((userDetails) => {
         this.props.navigator.resetTo({
          animated: true,
           screen: "Healer.StartUpScreen"
     
        });
      })
      .catch((error) => {
        console.error(error)
        
      })



 }

  // Go to DoctorFavoritesScreenr
  _handleClickDoctorFavorites() {
    this.props.navigator.push({
      screen: "Healer.DoctorFavoritesScreen"
    });
  }

  // Go to InsurranceScreen 
  _handleClickInsurrance() {
    this.props.navigator.push({
      screen: "Healer.InsurranceScreen"
    });
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      headerText,
      content,
      unitText,
      hasBorderRight=true,
      hasPaddingTop=true
    } = this.props;

    return (
      <View style={[
        styles.itemBox,
        !hasBorderRight && styles.itemBoxNoBorderRight,
        !hasPaddingTop && styles.itemBoxNoPaddingTop
      ]}>
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.greyColor,
          CommonStyles.regularBold,
          {marginBottom: 8}
        ]}>
          {headerText}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.regularBold,
          ]}>
            {content}
          </Text>
          <Text style={[
            CommonStyles.smallText,
            CommonStyles.greyColor,
            CommonStyles.light,
          ]}>
            {unitText}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  nameBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  rowTop: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(229,229,229)',
    paddingTop: 20,
  },
  rowBottom: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  itemBox: {
    width: 110,
    height: 110,
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(229,229,229)',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  itemBoxNoPaddingTop: {
    paddingTop: 0,
  },
  itemBoxNoBorderRight: {
    borderColor: 'transparent',
  },
  otherBox: {
    marginBottom: 28,
  },
});
