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
import ListBill from '../components/ListBill';
import GradientNavigationBar from '../elements/GradientNavigationBar';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';

import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from './emma/Api';
import Kosong from './emma/Kosong';

import {Spinner } from 'native-base';
export default class ListBilingScreen extends Component {
   static navigatorStyle = noNavTabbarNavigation;
  constructor(props) {
    super(props);
    this.state = {
      datax:[],
      refreshing: false,
      loading: true,
      
    }
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.getList().then(() => {
      this.setState({refreshing: false});
    });
  }

  componentDidMount(){

    this.forceUpdateHandler();
    this.getList();
    
   }

    forceUpdateHandler(){
      this.forceUpdate();
    };
    //////////////

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

      const Bil = `query Bil($id: ID!){

        allInvoices(filter: {

              AND: [{
              status:0
            }, {
              customer:{
                  id: $id
                }
            }]
              
          }) {
               id
               title
               description
               biaya
               bulan
               layanan{
                 title
                 idService
               }

            }

        }`
       
       const variables = {
          id: this.props.bill
         }

          client.request(Bil, variables)
             .then(data => {
               this.setState({
                  datax:data,
                  loading: false
              });

               if (this.state.datax.allInvoices == ''){

                console.log('ksong');
               }else{
                
                console.log(this.state.datax.allInvoices);

               }
               
        


             }); 

    /////////////
    }

    ////

    renderList(){

  if (this.state.datax.allInvoices == ''){

              return(

                   <View><Kosong /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allInvoices.map((item, index) => (
              

                <ListBill
                  key={item.id}
                  itemTitle={item.title}
                  careerText={item.biaya}
                  distanceText={item.bulan}
                  imageWidth={48}
                  imageHeight={48}
                  status={item.status}
                  onPressButton={this._handleClickListDoctorsItem.bind(this)}
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
          titleText='Biling &amp; Invoice'
          rightButtons={
            [
              {
                key: 1,
                buttonWidth: 26,
                buttonHeight: 23,
              },
            ]
          }
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
            {this.renderList()}
          </View>
        </ScrollView>
      
      </View>
    );
  }

  // Goto DoctorDetailsScreen
  _handleClickListDoctorsItem() {
   
  }
}
