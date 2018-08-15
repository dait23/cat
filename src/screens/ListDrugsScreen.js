import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../styles/CommonStyles';
import ItemWithImage from '../components/ItemWithImage';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from './emma/Api';

import {Spinner, Thumbnail } from 'native-base';
const img = require('../../img/emma/ticketAktif.png');
export default class ListDrugsScreen extends Component {
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

  componentDidMount(){

    this.forceUpdateHandler();
    this.getList();
    
   }

    forceUpdateHandler(){
      this.forceUpdate();
    };
   
   ///
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



 const allCustomers = `query customer($id: ID!){

allCustomers(orderBy: createdAt_DESC, filter: {


      manager:{
        id : $id
      }
      
  }) {
       id
       firstName
       lastName
       alamat
       telepon
       imageUrl
       company
    }

}`

 const variables = {
              id: this.props.managerId
            }

client.request(allCustomers, variables)
             .then(data => {
               this.setState({
                datax:data,
                loading: false
              });
               console.log(this.state.datax.allCustomers);

          


             }); 


  //////////////
 }
renderList(){
 
  if (this.state.datax.allCustomers == ''){

              return(

                   <View><Kosong /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allCustomers.map((item, index) => (
              

                <ItemWithImage
                  key={item.id}
                  itemImg={img}
                  iconWidth={25}
                  iconHeight={25}
                  itemHeaderText={item.firstName + ' '+ item.lastName}
                  onPressItem={() =>this._handleClickListDrugsItem(item.id, item.imageUrl)}
                />
          
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
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='History Tiket'
          rightButtons={
            [
              {
                key: 1,
               
                buttonWidth: 22,
                buttonHeight: 22,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
            {this.renderList()}
          </View>
        </ScrollView>
        
      </View>
    );
  }

  _handleClickSearchButton() {
    // TODO: Click search button
  }

  // Goto DoctorDetailsScreen
  _handleClickListDrugsItem(customer, imageUrl) {
    this.props.navigator.push({
      title: 'Drugs Detail',
      passProps: {
       customerId: customer,
       customerUrl: imageUrl
      },
      screen: "Healer.DrugsDetailsScreen"
    });
  }

  // Goto AddDrugsScreen
  _handleClickAddDrugs() {
    this.props.navigator.push({
      title: 'Add Drugs',
      screen: "Healer.AddDrugsScreen"
    });
  }
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 13,
    right: 8,
  },
});
