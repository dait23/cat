import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  RefreshControl
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../styles/CommonStyles';
import List from '../components/List';
import CustomTabBar from '../components/CommonTabBar';
import GradientNavigationBar from '../elements/GradientNavigationBar';

import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from './emma/Api';

import {Spinner, Thumbnail } from 'native-base';

 var ID = '1';

export default class ListCustomerScreen extends Component {
  constructor(props) {
    super(props);
    this. state = {
      datao:[],
      loading: true,
      refreshing: false,
      
    }

     this.getList = this.getList.bind(this);
     this._handleClickList = this._handleClickList.bind(this);
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.getList().then(() => {
      this.setState({refreshing: false});
    });
  }
  
    // Goto DoctorDetailsScreen
  _handleClickList(id, name, manager) {
    this.props.navigator.push({
      title: "Customer Details",
      passProps: {
       name: name,
       managerId: manager,
       id:id
      },
      screen: "Healer.DoctorDeatailsScreen"
    });
  }

 componentWillMount(){

    this.forceUpdateHandler();
    this.getList();
    
   }

   componentWillUnmount(){

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
              id: this.props.ManagerId
            }

client.request(allCustomers, variables)
             .then(data => {
               this.setState({
                datao:data,
                  loading: false
              });
               console.log(this.state.datao);

          


             }); 


  //////////////
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
          titleText='Daftar Pelanggan'
          isBack={false} 
        />
        <ScrollView 
          style={CommonStyles.scrollView}
           refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }


          >
          <View style={CommonStyles.smallWrapperBox}>
            {
              this.state.datao.allCustomers.map((item, index) => (
                <List
                  key={item.id}
                  imageUrl={item.imageUrl}
                  itemTitle={item.firstName + ' ' + item.lastName}
                  careerText={item.company}
                   distanceText={item.telepon}
                  onPressButton={() => this._handleClickList(item.id, item.firstName, this.props.ManagerId)}
                />
              ))
            }
          </View>
        </ScrollView>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab2'
        />
      </View>
    );
  }



}
