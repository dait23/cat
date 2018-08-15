import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  PixelRatio,
  ToastAndroid
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Entypo';

import GradientButton from '../elements/GradientButton';
import CommonStyles, {
  NAV_HEIGHT,
  deviceHeight,
  deviceWidth,
  shadowOpt
} from '../styles/CommonStyles';
import { noNavTabbarNavigation } from '../styles/navigatorStyle';
import GradientNavigationBar from '../elements/GradientNavigationBar';
import SelectBox from '../elements/SelectBox';

import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-picker';
import {Select, Option} from "react-native-chooser";
import { Button, Spinner} from 'native-base';
import SelectContacts from 'react-native-select-contact-android';

import { GraphQLClient } from 'graphql-request'

import {MainApi, No_Avatar, MainToken, Cloudinary_Code, Cloudinary_Link, Cloudinary_Key, Cloudinary_Secret} from './emma/Api';


const CLOUDINARY_UPLOAD_PRESET = Cloudinary_Code;
const CLOUDINARY_UPLOAD_URL = Cloudinary_Link;

export default class AddPesanScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
     this. state = {
     dataPelanggan:[],
     allCustomers:[],
     title:'',
     description:'',
     imageId:'',
     imageUrl:'',
     pelanggan : "Pilih daftar pelanggan",
     pelangganId:'',
     avatarSource: null,
     videoSource: null
     }

     this._getPelanggan = this._getPelanggan.bind(this);
     this.onSelect = this.onSelect.bind(this);
     this._addPesan = this._addPesan.bind(this);
     //this._sendEmail = this._sendEmail.bind(this);
  }
   

   onSelect(value, label) {
    this.setState({pelangganId : value, pelanggan: label});
  }


  componentDidMount(){

    let that = this;

    that._getPelanggan();
   }

 // componentWillUnmount(){
 //let that = this;

   // that._getPelanggan();

  //}




_addPesan(){

      const client = new GraphQLClient(MainApi, {
        headers: {
            Authorization: MainToken,
          },
        })

      const mut = `mutation(

                     $title: String, 
                     $description: String, 
                     $imageId:String,
                     $imageUrl:String,
                     $customer: ID,
                     $manager: ID
           ){
        createPesan(

            title: $title,
            description: $description,
            imageId:$imageId,
            imageUrl: $imageUrl,
            customerId: $customer,
            managerId: $manager
          ){
            id
          }
      }
      `

            const variables = {
              title: this.state.title,
              description: this.state.description,
              imageId: this.state.imageId,
              imageUrl: this.state.imageUrl,
              customer :this.state.pelangganId,
              manager : this.props.managerId,
            }
             
            client.request(mut, variables)
           .then(data => {
             
              ToastAndroid.show('Pesan Berhasil dikirim', ToastAndroid.SHORT);
                  this.props.navigator.push({
                  passProps: {
                   managerId: this.props.managerId,
                  },
                  screen: "Healer.NotificationScreen",
                });
               console.log(data);

              
           }) 
        .catch(err => {

           if (err.response.errors[0].code == '3022'){
             
             ToastAndroid.show('Pesan Gagal dikirim', ToastAndroid.SHORT);

           }
        })

}


//_sendEmail(){
 //////////////////////////////////


 //////////////////////////////////
//}


   _pickImage() {
    this.setState({ uploadURL: '' })

    var options = {
            title: 'Select File / Image',
             quality: 1.0,
              maxWidth: 1000,
              maxHeight: 1000,
              storageOptions: {
                skipBackup: true
              }
        };
    
    ImagePicker.showImagePicker(options, (response) => {
    //ImagePicker.showImagePicker({}, response  => {
     
      uploadFile(response)
                    .then(response => response.json())
                    .then(result => {
                        this.setState({
                            avatarSource: { uri: result.secure_url },
                            imageUrl: result.secure_url,
                            imageId: result.public_id,
                            //uploadingImg: false
                        });
                        console.log(result);
                    })

     })

  
}


 _getPelanggan(){


    this.setState({
          loading: true
      });

  const client = new GraphQLClient(MainApi, {
      headers: {
        Authorization: MainToken,
         }
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
       user{
        email
       }
    }

}`

 const variables = {
              id: this.props.managerId
            }

client.request(allCustomers, variables)
             .then(data => {
               this.setState({
                  dataPelanggan: data.allCustomers,
                  loading: false
              });
               console.log(this.state.dataPelanggan);   


             }); 
  
 }

  _renderPelanggan(){
          
         if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }
                 
          return(

            this.state.dataPelanggan.map((item) => (


                        <Option key={item.id} value ={item.id}>{item.firstName + ' ' +item.lastName}</Option>


                       ))

              )
      
               
 }
  
///////////////

  render() {
    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Pesan Baru'
        />
        <View style={styles.addDrugsBox}>
          <View style={styles.addDrugsButton}>
            <TouchableOpacity onPress={ () => this._pickImage() }>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Image
              source={require('../../img/healer/photoCamera.png')}
              style={{width: 30, height: 25}}
            />:
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
          </View>
          <View style={styles.formBox}>
            
           <Select
            onSelect = {this.onSelect}
            defaultText  = {this.state.pelanggan}
            style = {CommonStyles.textInputFieldx}
            textStyle = {CommonStyles.selectboxLabel}
            backdropStyle  = {{backgroundColor : "#fff"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
  
          {this._renderPelanggan()}
          
        </Select>

        <View style={CommonStyles.textInputField}>
          
            <Image
              source={require('../../img/emma/judul.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 22, height: 22}}
            />

            <TextInput
              placeholder='Judul Pesan'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              returnKeyType="next"
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />
          </View>
            <View style={CommonStyles.textAreaField}>
            
            <TextInput
              placeholder='Deskripsi'
              multiline={true}
              numberOfLines={5}
              style={CommonStyles.areaInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              returnKeyType="done"
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
              onSubmitEditing={this._addPesan}
            />
          </View>
           
          </View>
          <View style={CommonStyles.buttonBox}>
            <GradientButton
              onPressButton={this._addPesan}
              setting={shadowOpt}
              btnText="KIRIM"
            />
          </View>
        </View>
      </View>
    );
  }

  // Go to ListDrugsScreen
  _handleAddDrugs() {
    this.props.navigator.push({
      title: "Drugs List",
      screen: "Healer.ListDrugsScreen"
    });
  }
}


function uploadFile(file) {
  console.log(file);
    return RNFetchBlob.fetch('POST', 'https://api.cloudinary.com/v1_1/emmadtp/image/upload?upload_preset=emmatdp', {
        'Content-Type': 'octet-stream'
    }, [
            { name : 'file', filename : file.fileName, data: RNFetchBlob.wrap(file.path) }
        ])
        .uploadProgress((written, total) => {
        console.log('uploaded', written / total)
    })
}

const ELEMENT_HEIGHT = 440;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT - 75;

const styles = StyleSheet.create({
  addDrugsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spaceHeight * 0.3 + NAV_HEIGHT,
    marginBottom: spaceHeight * 0.18,
  },
  addDrugsButton: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spaceHeight * 0.29,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 15,
    borderColor: 'rgb(150,150,150)',
  },
  formBox: {
    height: 305,
    alignItems: 'center',
    marginBottom: spaceHeight * 0.24,
  },
  selectboxField: {
    width: deviceWidth - 55,
    height: 91,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 25,
    backgroundColor:'#FFFFFF',
  },
  selectboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
