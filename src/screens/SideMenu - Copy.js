import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  AsyncStorage,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import CommonStyles, { deviceHeight,deviceWidth } from '../styles/CommonStyles';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'home',
    };
  }

  render() {
    let isActive = this.state.isActive;

    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image
            source={require('../../img/emma/am.png')}
            style={{width: 70, height: 70}}
          />
          <Text style={[
            CommonStyles.itemHeaderText,
            CommonStyles.blackColor,
            CommonStyles.mediumBold,
            {marginTop: 15, marginBottom: 5}
          ]}>
            John Doe
          </Text>
          <Text style={[
            CommonStyles.smallText,
            CommonStyles.lightgreyColor,
            CommonStyles.regularBold,
          ]}>
            Account Manager
          </Text>
        </View>

        <View style={styles.menu}>
          <TouchableHighlight
            underlayColor='#efefef'
            style={styles.itemBox}
            onPress={ this._handleClickHome.bind(this) }>
            <View style={styles.itemBox}>
              {
                (() => {
                  if (isActive == 'home') {
                    return (
                      <View style={styles.activeItem} />
                    )
                  }
                })()
              }
              <Text style={[styles.menuText, isActive == 'home' && styles.activeMenuText]}>HOME</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#efefef'
            style={styles.itemBox}
            onPress={ this._handleClickCustomer.bind(this) }>
            <View style={styles.itemBox}>
              {
                (() => {
                  if (isActive == 'customer') {
                    return (
                      <View style={styles.activeItem} />
                    )
                  }
                })()
              }
              <Text style={[styles.menuText, isActive == 'customer' && styles.activeMenuText]}>DAFTAR PELANGGAN</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#efefef'
            style={styles.itemBox}
            onPress={ this._handleClickDoctors.bind(this) }>
            <View style={styles.itemBox}>
              {
                (() => {
                  if (isActive == 'doctors') {
                    return (
                      <View style={styles.activeItem} />
                    )
                  }
                })()
              }
              <Text style={[styles.menuText, isActive == 'doctors' && styles.activeMenuText]}>TIKET GANGGUAN</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#efefef'
            style={styles.itemBox}
            onPress={ this._handleClickServices.bind(this) }>
            <View style={styles.itemBox}>
              {
                (() => {
                  if (isActive == 'services') {
                    return (
                      <View style={styles.activeItem} />
                    )
                  }
                })()
              }
              <Text style={[styles.menuText, isActive == 'services' && styles.activeMenuText]}>PESAN</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#efefef'
            style={styles.itemBox}
            onPress={ this._handleClickDashboard.bind(this) }>
            <View style={styles.itemBox}>
              {
                (() => {
                  if (isActive == 'dashboard') {
                    return (
                      <View style={styles.activeItem} />
                    )
                  }
                })()
              }
              <Text style={[styles.menuText, isActive == 'dashboard' && styles.activeMenuText]}>BILLING &amp; INVOICE</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#efefef'
            style={styles.itemBox}
            onPress={ this._handleClickProfile.bind(this) }>
            <View style={styles.itemBox}>
              {
                (() => {
                  if (isActive == 'profile') {
                    return (
                      <View style={styles.activeItem} />
                    )
                  }
                })()
              }
              <Text style={[styles.menuText, isActive == 'profile' && styles.activeMenuText]}>PROFIL</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={ this._handleClickLogout.bind(this) }
            style={styles.itemBox}>
            <Text style={styles.menuText}>LOG OUT</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  } 
 
 _handleClickLogout(){

  AsyncStorage.removeItem('token')
      .then((token) => {
         this.props.navigator.push({
          screen: "Healer.SignInScreen"
        });
      })
      .catch((error) => {
        console.error(error)
        
      })



 }
  _handleClickHome() {
    this.setState({isActive:'home'});
    this._toggleDrawer();
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 0
    });
  }

  _handleClickCustomer() {
    this.setState({isActive:'customer'});
    this._toggleDrawer();
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 2
    });
  }

  _handleClickDoctors() {
    this.setState({isActive:'doctors'});
    this._toggleDrawer();
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 1
    });
  }

  _handleClickDashboard() {
    this.setState({isActive:'dashboard'});
    this._toggleDrawer();
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 3
    });
  }

  _handleClickProfile() {
    this.setState({isActive:'profile'});
    this._toggleDrawer();
    this.props.navigator.popToRoot({
      animated: true
    });
    this.props.navigator.switchToTab({
      tabIndex: 4
    });
  }

  _handleClickServices() {
    this.setState({isActive:'services'});
     this.props.navigator.showModal({
      screen: "Healer.NotificationScreen",
      animated: true,
    });
  }

  _handleClickNewHealthy() {
    this.setState({isActive:'newHealthy'});
    this._toggleDrawer();
    this.props.navigator.showModal({
      screen: "Healer.HealerBlogsScreen"
    });
  }

  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  }
}

const ELEMENT_HEIGHT = 530;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth - 70,
    backgroundColor: '#FFFFFF',
  },
  userInfo: {
    height: 130,
    marginTop: spaceHeight * 0.46, 
    marginBottom: spaceHeight * 0.35, 
    paddingLeft: 30,
    paddingRight: 30,
  },
  menu: {
    height: 400,
  },
  itemBox: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
  },
  activeItem: {
    width: 5,
    height: 45,
    marginLeft: 0.2,
    backgroundColor: 'rgb(152,0,0)',
    borderRadius: 12,
    elevation: 12,
  }, 
  menuText: {
    marginLeft: 30,
    color: 'rgb(105,105,105)',
    fontSize: 15,
    fontFamily: 'poppins',
  },
  activeMenuText: {
    color: 'rgb(152,0,0)',
  },
});
