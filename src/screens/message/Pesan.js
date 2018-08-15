import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../../styles/CommonStyles';

import { noNavTabbarNavigation } from '../../styles/navigatorStyle';
import GradientNavigationBar from '../../elements/GradientNavigationBar';
import GradientButton from '../../elements/GradientButton';


import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from '../emma/Api';
import NoMessage from '../emma/NoMessage';
import moment from 'moment';
import localization from 'moment/locale/id'
import {Spinner, Thumbnail } from 'native-base';
import TimeAgo from 'react-native-timeago';

export default class Pesan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datax:[],
      refreshing: false,
      loading: true,
      interval: 3000,
    }
      this.getList = this.getList.bind(this);
      this._handleClick = this._handleClick.bind(this);
  }
  
  _handleClick(pesan) {
    this.props.navigator.push({
      title: 'Drugs Detail',
      passProps: {
       pesanId: pesan,

      },
      screen: "Emma.AddBalasScreen"
    });
  }

     // Goto AddDrugsScreen
  _handleClickAddDrugs() {
    this.props.navigator.push({
      title: 'Add Drugs',
      screen: "Healer.AddDrugsScreen"
    });
  }

  componentDidMount(){

    this.forceUpdateHandler();
    this.getList();
    //setInterval(this.getList, parseInt(this.state.interval));

    
        
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

      const Query = `query tiket($id: ID!){

          allPesans(orderBy: createdAt_DESC, filter: {
               AND: [{
              status:0
            }, {
  
                    manager:{
                      
                      id: $id
                    }
             
            }]
                
                
              
            }) {
                  id
                  title
                  imageUrl
                  description
                  imageId
                  createdAt
                  status
                 customer{
                  id
                  firstName
                  lastName
                  imageUrl
                  user{
                    email
                  }
                
                }
                
              }

          }`
       
       const variables = {
          id: this.props.managerId
         }
       client.request(Query, variables)
             .then(data => {
               this.setState({
                  datax:data,
                  loading: false
              });

               if (this.state.datax.allPesans == ''){

                console.log('kosong');
               }else{
                
                console.log(this.state.datax.allPesans);

               }
               
        


             }); 

    }
  /////////////

     renderList(){
      const smallShadowOpt = {
      btnWidth: 125,
      btnHeight: 35,
      shadowHeight: 65,
      fontSize: 15,
    }

  if (this.state.datax.allPesans == ''){

              return(

                   <View><NoMessage
                            navigator={this.props.navigator}
                            /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allPesans.map((item, index) => (
        

            <View style={[CommonStyles.itemWhiteBox,styles.itemBox]} key={item.id}>
              <View style={styles.leftCol}>
                <Image
                  source={{uri: item.customer.imageUrl}}
                  style={[CommonStyles.borderRadius, {width: 30, height: 30}]}
                />  
              </View>
              <View style={styles.rightCol}>
                <Text style={[
                  CommonStyles.itemHeaderText,
                  CommonStyles.blackColor,
                  CommonStyles.regularBold,
                  {marginBottom: 6}]}>
                  Pesan  {item.customer.firstName + ' ' + item.customer.lastName}
                </Text>
                <Text style={[
                  CommonStyles.normalText,
                  CommonStyles.greyColor,
                  CommonStyles.regularBold,
                  {marginBottom: 5}]}>
                  {item.title}
                </Text>
                <Text style={[
                  CommonStyles.smallText,
                  CommonStyles.lightgreyColor,
                  CommonStyles.regularBold,
                  {marginBottom: 10}]}>
                   <TimeAgo time={item.createdAt} />
                </Text>
                <GradientButton
                  onPressButton={() => this._handleClick(item.id)}
                  setting={smallShadowOpt}
                  btnText="BACA"
                />
              </View>
            </View>
          
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
      <View style={{marginTop: 0}}>
        <ScrollView>
          <View style={CommonStyles.wrapperBox}>
            
            {this.renderList()}
         
            
            
          </View>
        </ScrollView>
         
      </View>
    );
  }


  _handleClick(pesan) {
    this.props.navigator.push({
      title: 'Drugs Detail',
      passProps: {
       pesanId: pesan,

      },
      screen: "Emma.AddBalasScreen"
    });
  }
}


Pesan.propTypes = {
  managerId: PropTypes.string
};


const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 13,
    right: 8,
  },
  leftCol: {
    flexDirection: 'row',
    width: 44,
  },
  rightCol: {
    flex: 1, 
  },
});
