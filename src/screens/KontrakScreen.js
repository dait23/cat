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

import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from './emma/Api';
import moment from 'moment';
import localization from 'moment/locale/id'
import {Spinner, Thumbnail } from 'native-base';

export default class KontrakScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      datax:[],
      loading: true,
      refreshing: false,
      
    }
     this.getList = this.getList.bind(this);
     //this._handleClickList = this._handleClickList.bind(this); 
  }
   // Goto DoctorDetailsScreen
  _handleClickList(id, name) {
    this.props.navigator.push({
      title: "Customer Details",
      passProps: {
       name: name,
       id:id
      },
      screen: "Healer.DoctorDeatailsScreen"
    });
  }

 componentDidMount(){

    this.forceUpdateHandler();
    this.getList();
    
   }

    forceUpdateHandler(){
      this.forceUpdate();
    };
//////////
 getList(){

  this.setState({
          loading: true
      });

   const client = new GraphQLClient(MainApi, {
      headers: {
        Authorization: MainToken,
         },
      })



 const Kontrak = `query kontrak($id: ID!){

          allContracts(filter: {
               AND: [{
              endAt_not_contains: "12/31/2017, 6:31:11 AM"
            }, {
              customer:{
                    manager:{
                      
                      id: $id
                    }
                }
            }]
                
                
              
            }) {
                 id
                 title
                 layanan{
                  title
                  idService
                }
                 endAt
                 customer{
                  id
                  firstName
                  lastName
                  imageUrl
                }
              }

          }`

 const variables = {
              id: this.props.managerId
            }

client.request(Kontrak, variables)
             .then(data => {
               this.setState({
                datax:data,
                  loading: false
              });
               console.log(this.state.datax.allContracts);

          


             }); 


  //////////////
 }
 
 renderList(){

  if (this.state.datax.allContracts == ''){

              return(

                   <View><Kosong /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allContracts.map((item, index) => (
              
             
            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]} key={item.id}>
              <View style={styles.leftCol}>
                <Thumbnail source={{uri: item.customer.imageUrl}} />
                
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 2}]}>
                  {item.customer.firstName + ' ' + item.customer.lastName}
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.greyColor,
                  CommonStyles.mediumBold,
                ]}>
                 Service ID : {item.layanan.idService}
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                 {item.title + ' - ' + item.layanan.title}
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                 {moment(Date.parse(item.endAt)).locale("id", localization).format('LL')}
                </Text> 
              </View>
            </View>
          
                 ))
            
   

                 )
               }
               
 }

  render() {
    const smallShadowOpt = {
      btnWidth: 125,
      btnHeight: 35,
      shadowHeight: 65,
      fontSize: 15,
    }
    if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }


    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Kontrak Habis'
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
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

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  leftCol: {
    flexDirection: 'row',
    width: 70,
  },
  rightCol: {
    flex: 1, 
  },
});
