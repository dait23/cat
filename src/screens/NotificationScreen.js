import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import GradientButton from '../elements/GradientButton';
import CommonStyles from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

import moment from 'moment';
import localization from 'moment/locale/id'
import TimeAgo from 'react-native-timeago';

export default class NotificationScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
  }

  renderIcon(){

       if(this.props.tipe == 'Promosi'){

          return(

             <Image
                   source={require('../../img/emma/promo_biru.png')}
                   style={{width: 28, height: 28}}
                />  

            );
       }
        if(this.props.tipe == 'Gangguan'){

          return(

             <Image
                   source={require('../../img/emma/eror.png')}
                    style={{width: 28, height: 28}}
                />  

            );
       }else{
   

         return(

             <Image
                   source={require('../../img/emma/news.png')}
                    style={{width: 28, height: 28}}
                />  

            );


       }
    }

  render() {
    const smallShadowOpt = {
      btnWidth: 125,
      btnHeight: 35,
      shadowHeight: 65,
      fontSize: 15,
    }


    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText={this.props.title}
        />
        
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]}>
              <View style={styles.leftCol}>
                {this.renderIcon()}
              </View>
              <View style={styles.rightCol}>
              <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.blackColor,
                  CommonStyles.semiBold,
                  {marginBottom: 2}]}>
                  {moment(this.props.tgl).locale("id", localization).format('LL')}
                </Text>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 6}]}>
                  {this.props.title}
                </Text>
                    <Text style={[
                  CommonStyles.normalText,
                  CommonStyles.greyColor,
                  CommonStyles.regularBold,
                  {marginBottom: 5}]}>
                  {this.props.desc}
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                  <TimeAgo time={this.props.tgl} />
                </Text>
              </View>
            </View>
            
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickReply() {
    // TODO:
  }
}

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  leftCol: {
    flexDirection: 'row',
    width: 44,
  },
  rightCol: {
    flex: 1, 
  },
});
