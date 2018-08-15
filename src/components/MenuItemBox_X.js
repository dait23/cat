import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import ResponsiveImage from 'react-native-responsive-image';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import LinearGradient from 'react-native-linear-gradient';

export const deviceWidth = Dimensions.get('window').width;


export default class MenuItemBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0.2, y: 0.2}} end={{x: 1.0, y: 2.0}}
        colors={['rgb(255,255,255)', 'rgb(255,255,255)']}
        style={styles.boxMain}>
        <TouchableHighlight 
          underlayColor = {'rgb(255, 255, 255)'}
          style={styles.highLightBoxMain}
          onPress={this.props.onPressBoxItem}>
          <View style={{flex: 1, }}>
            <Image
              source={this.props.boxIcon}
              style={[styles.boxIcon, {width:this.props.boxIconWidth, height:this.props.boxIconHeight}]}
            />
           
             <View style={styles.itemContainer}>
            </View>
           
          </View>

        </TouchableHighlight>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  boxMain: { 
    borderWidth: 0,
    borderRadius: 8,
    elevation: 2,
  },
  highLightBoxMain: {
    height: 155, 
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 9,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  boxIcon: {
    alignSelf: 'center' ,
  },
  itemContainer: {
    backgroundColor: '#000000',
    alignItems: 'flex-end', 
    borderRadius: 5,
    padding: 10,
    height: 50,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

//const PropTypes = React.PropTypes;

MenuItemBox.propTypes = {
  boxTitle: PropTypes.string,
  boxSubTitle: PropTypes.string,
  onPressBoxItem: PropTypes.func,
  boxIcon: PropTypes.object,
  boxIconHeight: PropTypes.number,
  boxIconWidth: PropTypes.number,
};
