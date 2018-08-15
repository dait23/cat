import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'native-base';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import CommonStyles from '../styles/CommonStyles';

export default class DetailItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[CommonStyles.itemWhiteBox, {padding: 18}]}>
        <View style={styles.headerContainer}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold,
            {marginBottom: 6}
          ]}>
            {this.props.headerText}
          </Text>
          
          <Image
            source={require('../../img/healer/expan.png')}
            style={{width: 22, height: 22}}
          /> 
        </View>
        <View>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
            {marginBottom: 10}
          ]}>
            {this.props.detailText}
          </Text>
        </View>
            <View>
             <Badge success>
              <Text style={{color:'#fff'}}>{this.props.statusText}</Text>
            </Badge>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
});

//const PropTypes = React.PropTypes;

DetailItem.propTypes = {
  headerText: PropTypes.string,
  detailText: PropTypes.string,
  statusText: PropTypes.string,
};
