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

import moment from 'moment';
import localization from 'moment/locale/id'

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }
  
   renderStatus(){

   	  if(this.props.statusImg == '0'){
         
         return(

              <Image
	            source={require('../../img/emma/warning.png')}
	            style={{width: 22, height: 22}}
	          /> 
         	)

   	  }else{
   	  	return(
             
              <Image
	            source={require('../../img/emma/ok.png')}
	            style={{width: 22, height: 22}}
	          /> 

   	  		)
   	  }
   }
  render() {
  	 const formattedDT = moment(this.props.tanggalText).locale("id", localization).format('LL')
    return (
      <View style={[CommonStyles.itemWhiteBox, {padding: 18}]}>
        <View style={styles.headerContainer}>
          <Text style={[
            CommonStyles.headerText,
            CommonStyles.blackColor,
            CommonStyles.semiBold,
            {marginBottom: 0}
          ]}>
            {this.props.headerText}
          </Text>
          
          {this.renderStatus()}
        </View>
        <View>
        <Text style={[
            CommonStyles.smallText,
            CommonStyles.lightgreyColor,
            CommonStyles.semiBold,
            {marginBottom: 5}
          ]}>
            {formattedDT}
          </Text>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
            {marginBottom: 5}
          ]}>
            {this.props.detailText}
          </Text>
        </View>
            <View>
             <Badge success>
              <Text style={{color:'#fff', fontSize:12,paddingTop:3,paddingBottom:3}}>{this.props.statusText}</Text>
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

Detail.propTypes = {
  headerText: PropTypes.string,
  detailText: PropTypes.string,
  statusText: PropTypes.string,
  statusImg:PropTypes.number,
  tanggalText: PropTypes.string,
};
