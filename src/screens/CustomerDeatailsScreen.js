import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import GradientButton from '../elements/GradientButton';
import CommonStyles, { deviceWidth } from '../styles/CommonStyles';
import ItemWithImage from '../components/ItemWithImage';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';
import Communications from 'react-native-communications';


import { GraphQLClient } from 'graphql-request'
import {MainApi, No_Avatar, MainToken} from './emma/Api';

import {Spinner, Thumbnail } from 'native-base';

export default class CustomerDeatailsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
    this. state = {
      datax:{},
      id:'',
      firstName:'',
      lastName:'',
      alamat:'',
      telepon:'',
      imageUrl:'',
      company:'',
      manager:'',
      loading: true,
      refreshing: false,
      
    }
    this._handleDetail = this._handleDetail.bind(this);
    this._handleLayanan = this._handleLayanan.bind(this);
    this._handleBiling = this._handleBiling.bind(this);
    this._handleClickAddDrugs = this._handleClickAddDrugs.bind(this); 
  }

   componentDidMount(){

    this.forceUpdateHandler();
    this.getList();
    
   }

    forceUpdateHandler(){
      this.forceUpdate();
    };

  ///////
  //////////


   // Goto DoctorDetailsScreen
  _handleDetail(company, alamat, telepon, firstName, lastName) {
    this.props.navigator.push({
      passProps: {
       company: company,
       alamat: alamat,
       telepon: telepon,
       firstName: firstName + '' + lastName,
       lastName: lastName
      },
      screen: "Healer.DoctorInformationScreen"
    });
  }

   // Goto AddDrugsScreen
  

    // Goto DoctorDetailsScreen
  _handleLayanan(member) {
    this.props.navigator.push({
      passProps: {
       member: member
      },
     screen: "Healer.DoctorWorkingAddressScreen"
    });
  }
  ////////////

  // Go to Biling Screen
  _handleBiling(bill) {
     this.props.navigator.push({
      passProps: {
        bill: bill
      },
      screen: "Healer.ListBilingScreen"
    });
  }


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



 const Customers = `query customer($id: ID!){

 Customer(id: $id) {
       id
       firstName
       lastName
       alamat
       telepon
       imageUrl
       company
       manager{
        id
       }
    }

}`

 const variables = {
              id: this.props.id
            }

client.request(Customers, variables)
             .then(data => {
               this.setState({
                  datax:data,
                  id: data.Customer.id,
                  firstName: data.Customer.firstName,
                  lastName: data.Customer.lastName,
                  alamat: data.Customer.alamat,
                  telepon: data.Customer.telepon,
                  company: data.Customer.company,
                  imageUrl: data.Customer.imageUrl,
                  manager: data.Customer.manager.id,
                  loading: false
              });
               //console.log(this.state.firstName + this.state.lastName);

          


             }); 


  //////////////
 }


  render() {
    const shadowOpt = {
      btnWidth: 260,
      btnHeight: 40, 
    }

     if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Pelanggan'
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
            <View style={styles.avatarContainer}>
              <TouchableOpacity onPress={() => Communications.phonecall(this.state.telepon, true)}>
                <Image
                  source={require('../../img/healer/icCall.png')}
                  style={{width: 60, height: 60}}
                />

              </TouchableOpacity>

              <Thumbnail style={{width: 100, height: 100, marginLeft:-15}} source={{uri: this.state.imageUrl}} />
             
              <TouchableOpacity>
                <Image
                  source={require('../../img/healer/icMessage.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <LinearGradient
              start={{x: 0.4, y: 0.5}} end={{x: 1.0, y: 1.0}}
              colors={['rgb(255,111,111)', 'rgb(255,35,35)']}
              style={styles.redCircle} />
            <View style={styles.overviewContainer}>
              <Text style={[
                CommonStyles.headerText,
                CommonStyles.blackColor,
                CommonStyles.mediumBold
              ]}>
                {this.state.firstName} {this.state.lastName}
              </Text>
              <Text style={[
                CommonStyles.smallText,
                CommonStyles.lightgreyColor,
                CommonStyles.regularBold,
                {marginTop: -8, marginBottom: 7}
              ]}>
                {this.state.company}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
               
                <Text style={[
                  CommonStyles.headerText,
                  CommonStyles.greyColor,
                  CommonStyles.regularBold,
                  {paddingLeft: 5}
                ]}>
                  ID {this.state.telepon}
                </Text>
              </View>
            </View>
            <View style={[CommonStyles.buttonBox, {marginTop: 15, marginBottom: 20}]}>
              <GradientButton
                onPressButton={() => this._handleClickAddDrugs(this.state.manager)}
                setting={shadowOpt}
                btnText="Lapor Gangguan"
              />
            </View>
            <View>
              <ItemWithImage
                itemImg={require('../../img/emma/contact.png')}
                iconWidth={30}
                iconHeight={30}
                itemHeaderText='Customer Information'
                onPressItem={() => this._handleDetail(this.state.company, this.state.alamat, this.state.telepon, this.state.firstName, this.state.lastName)}
              />
              <ItemWithImage
                itemImg={require('../../img/emma/list.png')}
                iconWidth={26}
                iconHeight={26}
                itemHeaderText='Daftar Layanan'
                onPressItem={() => this._handleLayanan(this.state.id)}
              />
              <ItemWithImage
                itemImg={require('../../img/emma/invoiceAktif.png')}
                iconWidth={30}
                iconHeight={30}
                itemHeaderText='Billing &amp; Invoice'
                onPressItem={() => this._handleBiling(this.state.id)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  // Go to BookAppointmentScreen
  _handleClickBookAppointment() {
    this.props.navigator.push({
      screen: "Healer.BookAppointmentScreen"
    });
  }

   // Goto AddDrugsScreen
  _handleClickAddDrugs() {
    this.props.navigator.push({
      title: 'Add Drugs',
      screen: "Healer.AddDrugsScreen"
    });
  }

  // Go to DoctorInformationScreen
  _handleClickDoctorInformation() {
    this.props.navigator.push({
      screen: "Healer.DoctorInformationScreen"
    });
  }

  // Go to DoctorWorkingAddressScreen
  _handleClickDoctorWorkingAddress() {
    this.props.navigator.push({
      screen: "Healer.DoctorWorkingAddressScreen"
    });
  }

  _handleClickAddDrugs(managerId) {
    this.props.navigator.push({
      passProps: {
       managerId: managerId
      },
      title: 'Add Drugs',
      screen: "Healer.AddDrugsScreen"
    });
  }

  // Go to CallDoctorsScreen
  _handleClickCallButton() {
    this.props.navigator.push({
      screen: "Healer.CallDoctorScreen"
    });
  }

  _handleClickHeartButton() {
    // TODO: Click heart button
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 27,
    marginRight: 27,
  },
  redCircle: {
    position: 'absolute',
    top: 10, 
    right: (deviceWidth - 130) / 2,
    width: 15,
    height: 15,
    borderRadius: 200,
  },
  overviewContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
