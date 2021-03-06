import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swipeout from 'react-native-swipeout';
import {Thumbnail } from 'native-base';
import CommonStyles from '../styles/CommonStyles';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this._alertDeleteItem() } 
    }]; 

    return (
      <Swipeout
        right={swipeBtns}
        backgroundColor= 'transparent'>
        <View style={CommonStyles.itemWhiteBox}>
          <TouchableHighlight
            underlayColor='transparent'
            style={styles.highlightBox}
            onPress={this.props.onPressButton}
          >
            <View style={styles.listItemBox}>
              <View style={styles.leftCol}>
                <View style={styles.avatar}>
                 <Thumbnail large source={{uri: this.props.imageUrl}} />
                
                  {
                    (() => {
                      if (this.props.isSpecial) {
                        return (
                          <LinearGradient
                            start={{x: 0.4, y: 0.5}} end={{x: 1.0, y: 1.0}}
                            colors={['rgb(255,111,111)', 'rgb(255,35,35)']}
                            style={styles.specialCircle} />
                        )
                      }
                    })()
                  }
                </View>
                <View style={styles.info}>
                  <Text style={[
                    CommonStyles.itemHeaderText,
                    CommonStyles.blackColor,
                    CommonStyles.mediumBold,
                    {marginTop: -6}
                  ]}>
                    {this.props.itemTitle}
                  </Text>
                  <Text style={[
                    CommonStyles.shortSmallText,
                    CommonStyles.lightgreyColor,
                    CommonStyles.regularBold,
                  ]}>
                    {this.props.careerText}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', height: 23}}>
                    <Image
                      source={require('../../img/emma/ID.png')}
                      style={{width: 20, height: 20}}
                    /> 
                    <Text style={[
                      CommonStyles.greyColor,
                      CommonStyles.regularBold,
                      {fontSize: 14, paddingLeft: 6}
                    ]}>
                      {this.props.distanceText} 
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.rightCol}>
                <View style={styles.ranking}>
                  <Image
                    source={require('../../img/emma/ok.png')}
                    style={{width: 20, height: 20}}
                  /> 
                  
                </View>
                <Image
                  source={require('../../img/healer/more.png')}
                  style={{width: 7, height: 27}}
                /> 
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </Swipeout>
    );
  }

  _alertDeleteItem() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: {
            color: '#000'
          },
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false } 
    ) 
  }
}

const styles = StyleSheet.create({
  highlightBox: {
    borderRadius: 12,
  },
  listItemBox: {
    flexDirection: 'row',
    padding: 15,
  },
  rightCol: {
    width: 52,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  ranking: {
    flexDirection: 'row',
  },
  leftCol: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    position: 'relative',
    width: 80,
    height: 80
  },
  info: {
    paddingLeft: 15,
  },
  specialCircle: {
    position: 'absolute',
    top: 5,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 200,
  },
});

//const PropTypes = React.PropTypes;

List.propTypes = {
  imageUrl: PropTypes.string,
  itemTitle: PropTypes.string,
  careerText: PropTypes.string,
  distanceText: PropTypes.string,
  onPressButton: PropTypes.func,
  isSpecial: PropTypes.bool,
};
