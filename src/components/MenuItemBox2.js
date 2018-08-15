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

import { Card, CardItem, Body} from "native-base";

export const deviceWidth = Dimensions.get('window').width;


export default class MenuItemBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    

      <Card style={{justifyContent: 'center', height: 150}}>
      <CardItem bordered button onPress={this.props.onPressBoxItem} >
              <Body>
                 <Image
                  source={this.props.boxIcon}
                  style={[styles.boxIcon, {width:this.props.boxIconWidth, height:this.props.boxIconHeight}]}
                />
              </Body>
            </CardItem>
            
          </Card>
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
