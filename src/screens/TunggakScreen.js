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
import Kosong from './emma/Kosong';
import {Spinner, Thumbnail } from 'native-base';
import formatMoney from 'accounting-js/lib/formatMoney.js';

export default class TunggakScreen extends Component {
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
  ////

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



 const Tunggak = `query biling($id: ID!){

          allInvoices(filter: {
               AND: [{
              status:0
            }, {
              customer:{
                    manager:{
                      
                      id: $id
                    }
                }
            }]
                
                
              
            }) {
                id
               biaya
               bulan
               customer{
                id
                firstName
                lastName
                company
                imageUrl
              }

              }

          }`

 const variables = {
              id: this.props.managerId
            }

client.request(Tunggak, variables)
             .then(data => {
               this.setState({
                datax:data,
                  loading: false
              });
               console.log(this.state.datax.allInvoices);

          


             }); 


  //////////////
 }
 ///////////

   renderList(){

  if (this.state.datax.allInvoices == ''){

              return(

                   <View><Kosong /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allInvoices.map((item, index) => (
              
             
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
                 {formatMoney(item.biaya , { symbol: "Rp. ", precision: 0, thousand: ".", decimal: "," })}
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                 Sudah Termasuk PPN 10%
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                ]}>
                 Bulan : {item.bulan}
                </Text>
              </View>
            </View>
          
                 ))
            
   

                 )
               }
               
 }

 /////
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
          titleText='Tunggakan'
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
