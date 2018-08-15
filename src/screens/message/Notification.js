import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../../styles/CommonStyles';

import { noNavTabbarNavigation } from '../../styles/navigatorStyle';
import GradientNavigationBar from '../../elements/GradientNavigationBar';
import GradientButton from '../../elements/GradientButton';

import { GraphQLClient } from 'graphql-request';
import {MainApi, No_Avatar, MainToken} from '../emma/Api';
import Kosong from '../emma/Kosong';
import NoNotif from '../emma/NoNotif';
import moment from 'moment';
import localization from 'moment/locale/id'
import {Spinner, Thumbnail } from 'native-base';
import TimeAgo from 'react-native-timeago';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      datax:[],
      refreshing: false,
      loading: true,
    }

      this.getList = this.getList.bind(this);
      this._handleDetail = this._handleDetail.bind(this);
     
  }


// Goto DoctorDetailsScreen
  _handleDetail(title, desc, tipe, tgl) {
    this.props.navigator.push({
      passProps: {
       title: title,
       desc: desc,
       tipe:tipe,
       tgl:tgl
      },
      screen: "Emma.NotificationScreen"
    });
  }

  componentDidMount(){

    this.forceUpdateHandler();
    this.getList();
    //setInterval(this.getList, parseInt(this.state.interval));

    
        
   }

    forceUpdateHandler(){
      this.forceUpdate();
    };
 
    
  
    getList(){
     
      this.setState({
        
         loading: true

      });

     const client = new GraphQLClient(MainApi, {
        headers: {
          Authorization: MainToken,
           },
        })
    

     //////////

      const Query = `query tiket{

          allNotifications(orderBy: createdAt_DESC) {
                  id
                 title
                 createdAt
                 updatedAt
                 description
                tipe{
                  title
                }

              }

          }`
       
       const variables = {
          id: this.props.managerId
         }
       client.request(Query)
             .then(data => {
               this.setState({
                  datax:data,
                  loading: false
              });

               if (this.state.datax.allNotifications == ''){

                console.log('kosong');
               }else{
                
                console.log(this.state.datax.allNotifications);

               }
               
        


             }); 

    }
  
  ////
  renderList(){
      const smallShadowOpt = {
      btnWidth: 125,
      btnHeight: 35,
      shadowHeight: 65,
      fontSize: 15,
    }

  if (this.state.datax.allNotifications == ''){

              return(

                   <View><NoNotif /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allNotifications.map((item, index) => (
        

            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]} key={item.id}>
              <View style={styles.leftCol}>
  
                          <Image
                           source={require('../../../img/emma/notif_abu.png')}
                          style={ {width: 30, height: 30}}
                        />  
                     

             
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 6}]}>
                  {item.title}
                </Text>
                <Text style={[
                  CommonStyles.normalText,
                  CommonStyles.greyColor,
                  CommonStyles.regularBold,
                  {marginBottom: 5}]}>
                  {item.description}
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                  {marginBottom: 10}]}>
                   <TimeAgo time={item.createdAt} />
                </Text>
               <GradientButton
                  onPressButton={() =>this._handleDetail(item.title, item.description, item.tipe.title, item.createdAt)}
                  setting={smallShadowOpt}
                  btnText="BACA"
                />
              </View>
            </View>
          
                 ))
            
   

                 )
               }
               
 }
  render() {

    if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }



    return (
      <View style={{marginTop: 0}}>
        <ScrollView>
          <View style={CommonStyles.wrapperBox}>
              {this.renderList()}
          </View>
        </ScrollView>
      </View>
    );
  }


_handleClickReply() {
    // TODO:
  }
}


Notification.propTypes = {
  managerId: PropTypes.string
};


const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  leftCol: {
    flexDirection: 'row',
    width: 50,
  },
  rightCol: {
    flex: 1, 
  },
});
