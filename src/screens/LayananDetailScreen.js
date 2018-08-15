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

export default class LayananDetailScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
     this.state = {
      datax:{},
      id:'',
      title:'',
      idService:'',
      alamat:'',
      telepon:'',
      layanan:'',
      jenisIp:'',
      ip:'',
      subnet:'',
      gateway:'',
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

          Layanan(   
                      id: $id
                  ) {
                 id
			    title
			    idService
			    alamat
			    telepon
			    jenisLayanan{
			      title
			    }
			    jenisIP{
			      name
			    }
			    ip
			    subnet
			    gateway
                }
                
              

          }`
       
       const variables = {
          id: this.props.cId
         }
       client.request(TiketPro, variables)
             .then(data => {
               this.setState({
                  datax:data,
                  id: data.Layanan.id,
                  title: data.Layanan.title,
                  idService: data.Layanan.idService,
                  alamat: data.Layanan.alamat,
                  telepon: data.Layanan.telepon,
                  layanan: data.Layanan.jenisLayanan.title,
                  jenisIp: data.Layanan.jenisIP.name,
                  ip: data.Layanan.ip,
                  subnet: data.Layanan.subnet,
                  gateway: data.Layanan.gateway,
                  loading: false
              });


             }); 

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
          titleText={this.props.name}
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
               <Thumbnail large source={require('../../img/emma/globe_grey.png')}/>
            </View>
          </View>
            <Item 
              headerText='Nama Layanan'
              infoTextCount={2}
              infoText1={this.state.title}
              infoText2={this.state.layanan}
            />
            <Item 
              headerText='ID Layanan'
              infoTextCount={1}
              infoText1={this.state.idService}
            />
            <Item 
              headerText='Alamat'
              infoTextCount={1}
              infoText1={this.state.alamat}
            />
            <Item 
              headerText='Telepon'
              infoTextCount={1}
              infoText1={this.state.telepon}

            />
            <Item 
              headerText='IP Detail'
              infoTextCount={4}
              infoText1={this.state.jenisIp}
              infoText2={this.state.ip}
              infoText3={this.state.subnet}
              infoText4={this.state.gateway}
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

const styles = StyleSheet.create({
  drugsImage: {
    justifyContent:'center',
    alignItems:'center',
  },
});


// Private component
class Item extends React.Component {
  render() {
    const {
      headerText,
      infoTextCount, 
      infoText1, 
      infoText2, 
      infoText3, 
      infoText4, 
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
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>
            {infoText3}
          </Text>
          <Text style={[
            CommonStyles.normalText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>
            {infoText4}
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
