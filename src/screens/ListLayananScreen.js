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
const img = require('../../img/emma/globe_grey.png');
export default class ListLayananScreen extends Component {
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



 const Query = `query customer{

allLayanans(orderBy: createdAt_DESC){
    id
    title
    
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
               console.log(this.state.datax.allLayanans);

          


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
              

                <ItemWithImage
                  key={item.id}
                  itemImg={img}
                  iconWidth={25}
                  iconHeight={25}
                  itemHeaderText={item.title}
                  onPressItem={() =>this._handleClickListDrugsItem(item.id, item.title)}
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
  _handleClickListDrugsItem(id, title) {
    this.props.navigator.push({
      title: 'Drugs Detail',
      passProps: {
       name: title,
       cId: id
      },
      screen: "Emma.LayananDetailScreen"
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
