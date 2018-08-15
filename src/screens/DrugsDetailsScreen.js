import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../styles/CommonStyles';
import Detail from '../components/Detail';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from './emma/Api';
import Kosong from './emma/Kosong';
import {Spinner, Thumbnail } from 'native-base';

export default class DrugsDetailsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
     this.state = {
      datax:[],
      refreshing: false,
      loading: true,
      
    }

     this.getList = this.getList.bind(this);
  }
  componentDidMount(){

    this.forceUpdateHandler();
    this.getList();
    
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

      const TiketPro = `query kontrak($id: ID!){

          allTickets(orderBy: createdAt_DESC, filter: {
             
              customer:{
                      
                      id: $id
                    }

            }) {
                 id
                 title
                 updatedAt
                 status
                 servicesId
                 progres{
                  title
                }
                customer{
                  firstName
                  lastName
                  imageUrl
                }
              }

          }`
       
       const variables = {
          id: this.props.customerId
         }
       client.request(TiketPro, variables)
             .then(data => {
               this.setState({
                  datax:data,
                  loading: false
              });

               if (this.state.datax.allTickets == ''){

                console.log('kosong');
               }else{
                
                console.log(this.state.datax.allTickets);

               }
               
        


             }); 

    }

     renderList(){
       if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }

  if (this.state.datax.allTickets == ''){

              return(

                   <View><Kosong /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allTickets.map((item, index) => (
            

                

                <Detail
                  key={item.id} 
                  statusText='Pelanggan'
                  headerText={item.title}
                  tanggalText={item.updatedAt}
                  detailText={item.progres.title}
                  statusImg={item.status}
                />
          
                 ))
            
   

                 )
               }
               
 }
    ///////
  render() {
   
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='History Tiket'
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
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
          <View style={{flex:1}}>
             <View style={{alignItems:'center', justifyContent:'center', marginBottom:20, marginTop:20}}>
               <Thumbnail large source={{uri: this.props.customerUrl}}/>
            </View>
          </View>
            {this.renderList()}
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

const styles = StyleSheet.create({
  drugsImage: {
    justifyContent:'center',
    alignItems:'center',
  },
});
