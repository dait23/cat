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
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import CommonStyles from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from './emma/Api';
import Kosong from './emma/Kosong';

import {Spinner } from 'native-base';

export default class DoctorWorkingAddressScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      datax:[],
      loading: true,
    }
  }

   componentDidMount(){

    this.forceUpdateHandler();
    this.getList();
    
   }

    forceUpdateHandler(){
      this.forceUpdate();
    };
    ////

    ////////////
 getList(){

  this.setState({
          loading: true
      });

   const client = new GraphQLClient(MainApi, {
      headers: {
        Authorization: MainToken,
         },
      })



 const Layanan = `query layanan($id: ID!){

allLayanans(filter: {


      customer:{
        id : $id
      }
      
  }) {
       id
       title
       alamat
       idService

    }

}`

 const variables = {
              id: this.props.member
            }

client.request(Layanan, variables)
             .then(data => {
               this.setState({
                  datax:data,
                  loading: false
              });

               if (this.state.datax.allLayanans == ''){

                console.log('ksong');
               }else{
                
                console.log(this.state.datax.allLayanans);

               }
               
        


             }); 


  //////////////
 }


     renderList(){

  if (this.state.datax.allLayanans == ''){

              return(

                   <View><Kosong /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allLayanans.map((item, index) => (
              

               <Item
                  key={item.id}
                  hospitalName={item.idService}
                  layanan={item.title}
                  address={item.alamat}
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
          titleText='Daftar Layanan'
          rightButtons={
            [
              {
                key: 1,

                buttonAction: this._handleClickHeartButton.bind(this),
                buttonWidth: 26,
                buttonHeight: 23,
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

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

// Private component
class Item extends React.Component {
  render() {
    const {
      hospitalName,
      layanan,
      address, 
    } = this.props;

    return (
      <View style={[
        CommonStyles.itemWhiteBox,
        {
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 16,
          paddingBottom: 16,
        }
      ]}>
        <Text style={[
          CommonStyles.headerText,
          CommonStyles.blackColor,
          CommonStyles.semiBold,
          {marginBottom: 6}
        ]}>
          {hospitalName} 
        </Text>
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.greyColor,
          CommonStyles.semiBold,
          {marginBottom: 6}
        ]}>
          {layanan} 
        </Text>
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.greyColor,
          CommonStyles.regularBold,
          {marginBottom: 3}
        ]}>
          {address}
        </Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  directMap: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 22.5
  },
});
