import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CommonStyles from '../styles/CommonStyles';

export default class ItemKontak extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.itemWhiteBox}>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlightBox}
          onPress={this.props.onPressItem}
        >
          <View style={styles.detailItemBox}>
            <View style={styles.leftCol}>
              <View style={[styles.icon, {backgroundColor: this.props.itemColor}]}>
                 <Text style={{color:'white', fontSize: 33, fontFamily: 'Roboto-Bold',}}>{this.props.itemName}</Text>
              </View>
              <View style={{
                width: 0.7,
                height: 75,
                backgroundColor: 'rgb(229,229,229)'}}
              />
            </View>
            <View style={styles.centerInfo}>
            <Text style={{fontFamily: 'Roboto-Bold', color:'black', fontSize:13}}>Dari: Fkppi Pusat</Text>
            <Text style={{fontFamily: 'Roboto-Regular', color:'#959595', fontSize:11, lineHeight: 20}}>Kamis, 26 Juli 2018 </Text>
              <Text style={[
                CommonStyles.pesanText,
                CommonStyles.yellowColor,
                CommonStyles.mediumBold
              ]}>
                {this.props.itemHeaderText}
              </Text>
            </View>
           
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
  detailItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  highlightBox: {
    borderRadius: 2,
  },
  centerInfo: {
    flex: 1, 
    margin: 0,
    alignItems: 'flex-start',
  },
  leftCol: {
    flexDirection: 'row',
    width: 75,
    marginRight: 5
  },
  icon: {
    width: 70,
    justifyContent: 'center',
     alignItems: 'center',
    margin:2,
  },
  iconText:{
    alignSelf: 'center',
  },
  rightCol: {
    width: 20,
    alignItems: 'center',
    marginRight: 10
  },
});

//const PropTypes = React.PropTypes;

ItemKontak.propTypes = {
  itemImg: PropTypes.number,
  itemName:PropTypes.string,
  itemColor:PropTypes.string,
  itemHeaderText: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  onPressItem: PropTypes.func,
};
