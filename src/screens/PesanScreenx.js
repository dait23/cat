import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';

import CommonStyles, {
  deviceWidth,
  blueGradient,
} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';

import Notification from './message/Notification';
import Pesan from './message/Pesan';
import GradientNavigationBar from '../elements/GradientNavigationBar';

export default class PesanScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this.state = {
      screenType: { type: 'deviceScreen'},
    };
  }

   // Goto AddDrugsScreen
  _handleClickAddDrugs(manager) {
    this.props.navigator.push({
      passProps: {
       managerId: this.props.managerId,
      },
      title: 'Add Drugs',
      screen: "Emma.AddPesanScreen"
    });
  }

  render() {
    let screenType = this.state.screenType.type;
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Pesan &amp; Notifikasi'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={styles.parentCircle}>
              <TouchableWithoutFeedback onPress={() => this.setState({screenType: {type: 'deviceScreen'}})}>
                {
                  (() => {
                    if (screenType == 'deviceScreen') {
                      return (
                        <LinearGradient
                          start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
                          colors={blueGradient.colors}
                          style={styles.activeChildCircle}>
                          <Text style={styles.activeBtnText}>Pesan</Text>
                        </LinearGradient>
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                          <Text style={styles.btnText}>Pesan</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.setState({screenType: {type: 'typeScreen'}})}>
                {
                  (() => {
                    if (screenType == 'typeScreen') {
                      return (
                        <LinearGradient
                          start={blueGradient.colorsStart} end={blueGradient.colorsEnd}
                          colors={blueGradient.colors}
                          style={styles.activeChildCircle}>
                          <Text style={styles.activeBtnText}>Notifikasi</Text>
                        </LinearGradient>
                      )
                    } else {
                      return (
                        <View style={styles.childCircle}>
                          <Text style={styles.btnText}>Notifikasi</Text>
                        </View>
                      )
                    }
                  })()
                }
              </TouchableWithoutFeedback>
            </View>
            { this.renderBody() }
          </View>
        </ScrollView>
         <TouchableOpacity
          style={styles.addButton}
          onPress={() => this._handleClickAddDrugs(this.props.managerId)}>
          <Image
            source={require('../../img/emma/add.png')}
            style={{width: 60,height: 60}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  // Render content
  renderBody() {
    if (this.state.screenType.type == 'deviceScreen') {
      return (
        <Pesan 
          managerId={this.props.managerId} 
          navigator={this.props.navigator} />
      );
    } else {
      return (
        <Notification
         managerId={this.props.managerId}
         navigator={this.props.navigator} />
      );
    }
  }
}

const styles = StyleSheet.create({
  parentCircle: {
    height: 49,
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(229,229,229)',
    borderRadius: 50 
  },
  childCircle: {
    height: 39,
    width: (deviceWidth - 40)/2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'transparent'
  },
  activeChildCircle: {
    height: 39,
    width: (deviceWidth - 40)/2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 8,
  },
   addButton: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
  btnText: {
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  activeBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  }
});
