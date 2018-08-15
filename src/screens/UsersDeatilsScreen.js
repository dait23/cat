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
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';

import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from './emma/Api';

import {Spinner, Thumbnail } from 'native-base';


export default class UsersDeatilsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      datax:{},
      id:'',
      firstName:'',
      fullName:''
,      lastName:'',
      nik:'',
      telepon:'',
      imageUrl:'',
      regional:'',
      email:'',
      loading: true,
      refreshing: false,
      
    }
     this._handleDetail = this._handleDetail.bind(this);
  }
   
   componentDidMount(){

    this.forceUpdateHandler();
    this._handleDetail();
    
   }

    forceUpdateHandler(){
      this.forceUpdate();
    };

  //////////////////////

  _handleDetail(){

     this.setState({
          loading: true
      });

   const client = new GraphQLClient(MainApi, {
      headers: {
        Authorization: MainToken,
         },
      })



 const Manager = `query manager($id: ID!){

          Manager(id: $id) {
                 id
                 firstName
                 lastName
                 regional {
                   id
                  title
                 }
                imageUrl
                nik
                telepon
                user{
                  email
                }
              }

          }`

           const variables = {
              id: this.props.idx
            }
           client.request(Manager, variables)
             .then(data => {
               this.setState({
                  datax:data,
                  id: data.Manager.id,
                  firstName: data.Manager.firstName,
                  lastName: data.Manager.lastName,
                  fullName: data.Manager.firstName + '' +  data.Manager.lastName,
                  nik: data.Manager.nik,
                  telepon: data.Manager.telepon,
                  regional: data.Manager.regional.title,
                  imageUrl: data.Manager.imageUrl,
                  email: data.Manager.user.email,
                  loading: false
              });

               console.log(data);

          


             }); 


  //////////////
  }
 //////////////
  render() {
    if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    } 

     const full = this.state.firstName + ' ' + this.state.lastName;
     const phone = '+62' +' '+ this.state.telepon;
     console.log(full);
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Profil Detail'
          rightButtons={
            [
              {
                key: 1,
                buttonIcon: require('../../img/emma/edit.png'),
                buttonAction: this._handleClickHeartButton.bind(this),
                buttonWidth: 26,
                buttonHeight: 23,
              },
            ]
          }
        />
        <ScrollView style={CommonStyles.noTabScrollView}>
          <View style={CommonStyles.wrapperBox}>
          <Item 
              headerText='NIK'
              infoTextCount={1}
              infoText1={this.state.nik}
            />
            <Item 
              headerText='Nama Lengkap'
              infoTextCount={1}
              infoText1={full}
            />
            <Item 
              headerText='Regional'
              infoTextCount={1}
              infoText1={this.state.regional}
            />
            <Item 
              headerText='Kontak'
              infoTextCount={2}
              infoText1={phone}
              infoText2={this.state.email}

            />
           
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
      headerText,
      infoTextCount, 
      infoText1, 
      infoText2, 
    } = this.props;

    let infoTextArr = [];
    if (infoTextCount == 1) {
      infoTextArr = (
        <Text style={[
          CommonStyles.normalText,
          CommonStyles.greyColor,
          CommonStyles.regularBold,
        ]}>
          {infoText1}
        </Text>
      );
    } else {
      infoTextArr = (  

        <View>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
            {marginBottom: 7}
          ]}>
           {infoText1}
          </Text>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>
            {infoText2}
          </Text>
        </View>
      );
    }
    
    return (
      <View style={[CommonStyles.itemWhiteBox,
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
          {headerText}
        </Text>
        {infoTextArr}
      </View>
    );
  }
}
