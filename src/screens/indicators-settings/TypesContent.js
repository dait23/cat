import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
   ALert,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../../styles/CommonStyles';

import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from '../emma/Api';
import Kosong from '../emma/Kosong';
import moment from 'moment';
import localization from 'moment/locale/id'
import {Spinner, Thumbnail } from 'native-base';

export default class TypesContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datax:[],
      refreshing: false,
      loading: true,
      
    }
    this.getList = this.getList.bind(this);
     this._handleDetail = this._handleDetail.bind(this);
  }
  
   // Goto DoctorDetailsScreen
  _handleDetail(customer, imageUrl) {
    this.props.navigator.push({
      title: 'Drugs Detail',
      passProps: {
       customerId: customer,
       customerUrl: imageUrl
      },
      screen: "Healer.DrugsDetailsScreen"
    });
  }
  componentDidMount(){

    //this.forceUpdateHandler();
    this.getList();
    
   }

  
  
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
    

     //////////

      const TiketPro = `query tiket($id: ID!){

          allTickets(orderBy: createdAt_DESC, filter: {
               AND: [{
              status:1
            }, {
              customer:{
                    manager:{
                      
                      id: $id
                    }
                }
            }]
                
                
              
            }) {
                 id
                 servicesId
                 title
                 description
                 name
                 phone
                 status
                 updatedAt
                 progres{
                  title
                }
                 layanan{
                  title
                }
                gangguan{
                  title
                }
                customer{
                  id
                  imageUrl
                }
              }

          }`
       
       const variables = {
          id: this.props.managerId
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

  if (this.state.datax.allTickets == ''){

              return(

                   <View><Kosong /></View>

                )
               }else{
                 
                 return(

         
            
              this.state.datax.allTickets.map((item, index) => (
            

                <Item
                  key={item.id}
                  itemImg={item.customer.imageUrl}
                  tanggalTiket={item.createdAt}
                  itemHeaderText={item.title}
                  itemContent={item.progres.title}
                  onPressItem={() =>this._handleDetail(item.customer.id, item.customer.imageUrl)}
                 
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
      <View style={{marginTop: 20}}>
        {this.renderList()}
      </View>
    );
  }
}

TypesContent.propTypes = {
  managerId: PropTypes.string
};

// Private component
class Item extends React.Component {
   // Goto AddDrugsScreen
 
 

  render() {
      //moment.locale('id') //For Turkey
      //const formattedDTx = moment(tanggalTiket).format('LL') //2 May
       const formattedDT = moment(tanggalTiket).locale("id", localization).format('LL')
    const {
      itemImg,
      itemHeaderText,
      itemContent,
      iconWidth,
      iconHeight,
      tanggalTiket,
      onPressItem,
    } = this.props;
    return (
      
      <View>
       <TouchableOpacity
       onPress={onPressItem}>
      <View style={[
        CommonStyles.itemWhiteBox,
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 14,
          paddingHorizontal: 20,
        }
      ]}>
        <View style={styles.leftCol}>
          <View style={styles.iconBox}>
             <Thumbnail  small source={{uri: itemImg}} />
          </View>
          <View style={{
            width: 0.5,
            height: 78,
            backgroundColor: 'rgb(229,229,229)'}}
          />
        </View>
        <View style={styles.centerText}>
          <Text style={[
            CommonStyles.shortSmallText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>
            {formattedDT}
          
          </Text>
          <Text style={[
            CommonStyles.itemHeaderText,
            CommonStyles.blackColor,
            CommonStyles.mediumBold,
            {marginBottom: 2}
          ]}>
            {itemHeaderText}
          </Text>
          <Text style={[
            CommonStyles.shortSmallText,
            CommonStyles.greyColor,
            CommonStyles.regularBold,
          ]}>
            {itemContent}
          </Text>
        </View>
        <View style={styles.rightCol}>
          <Image
            source={require('../../../img/emma/ok.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </View>
     </TouchableOpacity>
    </View>
    );
  }
}



const styles = StyleSheet.create({
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  iconBox: {
    width: 50, 
  },
  centerText: {
    flex: 1, 
    paddingRight: 10,
  },
  rightCol: {
    alignItems: 'center',
  },
});


