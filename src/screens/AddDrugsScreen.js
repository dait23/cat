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
import request from 'superagent';
import {Select, Option} from "react-native-chooser";
import { Button, Spinner} from 'native-base';
import SelectContacts from 'react-native-select-contact-android';

import { GraphQLClient } from 'graphql-request'

import {MainApi, No_Avatar, MainToken, Cloudinary_Code, Cloudinary_Link, Cloudinary_Key, Cloudinary_Secret} from './emma/Api';


const CLOUDINARY_UPLOAD_PRESET = Cloudinary_Code;
const CLOUDINARY_UPLOAD_URL = Cloudinary_Link;



export default class AddDrugsScreen extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  constructor(props) {
    super(props);
     this. state = {
      dataPelanggan:[],
      dataLayanan:[],
      dataProduk:[],
      dataGangguan:[],
      dataProgres:[],
      dataq:[],
      datar:[],
      dataw:[],
      allCustomers:[],
      allLayanans:[],
      allProducts:[],
      allGangguans:[],
      allProgreses:[],
      title:'',
      name: '',
      telepon: '',
      deskripsi:'',
      imageUrl:'',
      imageId:'',
      avatarSource: null,
      videoSource: null,
      loading: true,
      pelanggan : "Pilih daftar pelanggan",
      produk : "Pilih daftar produk",
      layanan : "Pilih daftar Layanan",
      gangguan : "Pilih jenis gangguan",
      progres : "Status Progres laporan",
      pelangganId:'',
      produkId:'',
      layananId:'',
      gangguanId:'',
      progresId:'',
     }


     this._getPelanggan = this._getPelanggan.bind(this);
     this._getLayanan = this._getLayanan.bind(this);
     this._getProduk = this._getProduk.bind(this);
     this._getGangguan = this._getGangguan.bind(this);
     this._getProgres = this._getProgres.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onSelect2 = this.onSelect2.bind(this);
    this.onSelect3 = this.onSelect3.bind(this);
     this.onSelect4 = this.onSelect4.bind(this);
     this.onSelect5 = this.onSelect5.bind(this);
     this.cariKontak = this.cariKontak.bind(this);
      this._addTiket = this._addTiket.bind(this);
  
  }



  onSelect(value, label) {
    this.setState({pelangganId : value, pelanggan: label});
  }

  onSelect2(value, label) {
    this.setState({produkId : value, produk: label});
  }

  onSelect3(value, label) {
    this.setState({layananId : value, layanan: label});
  }
    onSelect4(value, label) {
    this.setState({gangguanId : value, gangguan: label});
  }

  onSelect5(value, label) {
    this.setState({progresId : value, progres: label});
  }
  

   componentDidMount(){

    let that = this;

    that._getPelanggan();
    that._getLayanan();
    that._getProduk();
    that._getGangguan();
    that._getProgres();
   }

  componentWillUnmount(){
 let that = this;

    that._getPelanggan();
    that._getLayanan();
    that._getProduk();
    that._getGangguan();
     that._getProgres();

  }

 



  _pickImage() {
    this.setState({ uploadURL: '' })

    var options = {
            title: 'Select Avatar',
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


 cariKontak(){

   SelectContacts.pickContact({timeout: 45000}, (err, contact) => {

  if (err){
    if(typeof err === 'object'){
      if (err.message == "user canceled") {
        console.log("user hit back button in contact picker");
      } else if (err.message == "timed out") {
        console.log("timed out");
      } else if (err.message == "android version not supported") {
        console.log("invalid android version");
      }
    }
    // log out err object
    console.log(err)
  } else {

     this.setState({
      
                            name: contact.name,
                            telepon: contact.phoneNumbers[0].number,
                            //uploadingImg: false
                        });  
    console.log(contact.name);
    console.log(contact.phoneNumbers[0].number);
    /**
    Sample contact:
    {
      id: "100",
      name: "John Doe",
      phoneNumbers: [ {"number": "+1-555-555-5555"} ],
      emailAddresses: [ {"email": "john.doe@email.com"} ]
    }
    **/
  }

})

  }

_addTiket(){

const client = new GraphQLClient(MainApi, {
  headers: {
      Authorization: MainToken,
    },
  })

const mut = `mutation(

               $title: String, 
               $description: String, 
               $name: String, 
               $phone: String,
               $imageId:String,
               $imageUrl:String,
               $customer: ID,
               $manager: ID,
               $layanan: ID,
               $gangguan:ID,
               $produk:ID,
               $progres: ID,

     ){
  createTicket(

      title: $title,
      description: $description,
      name: $name,
      phone: $phone,
      imageId:$imageId,
      imageUrl: $imageUrl,
      customerId: $customer,
      managerId: $manager,
      layananId:$layanan,
      gangguanId:$gangguan,
      productId:$produk,
      progresId: $progres,


    ){
      id
    }
}
`

      const variables = {
        title: this.state.title,
        name: this.state.name,
        phone: this.state.telepon,
        description: this.state.deskripsi,
        imageId: this.state.imageId,
        imageUrl: this.state.imageUrl,
        customer :this.state.pelangganId,
        manager : this.props.managerId,
        layanan :this.state.layananId,
        produk :this.state.produkId,
        gangguan :this.state.gangguanId,
        progres :this.state.progresId,
      }
       
      client.request(mut, variables)
     .then(data => {
       
        ToastAndroid.show('Tiket Berhasil dibuat', ToastAndroid.SHORT);
            this.props.navigator.push({
            passProps: {
             managerId: this.props.managerId,
            },
            screen: "Healer.SettingsScreen"
          });
    
         console.log(data);

        
     }) 
  .catch(err => {

     if (err.response.errors[0].code == '3022'){
       
       ToastAndroid.show('Tiket Gagal dibuat', ToastAndroid.SHORT);

     }
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

 ////////////////////////////////
_getLayanan(){

    
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


client.request(Query)
             .then(data => {
               this.setState({
                dataLayanan:data.allLayanans,
                loading: false
              });
               console.log(this.state.dataLayanan);

             }); 



 }

_getProduk(){

    
    this.setState({
          loading: true
      });

   const client = new GraphQLClient(MainApi, {
      headers: {
        Authorization: MainToken,
         },
      })



 const QueryP = `query customer{

allProducts(orderBy: createdAt_DESC){
    id
    title
    
  }

}`


client.request(QueryP)
             .then(data => {
               this.setState({
                dataProduk:data.allProducts,
                loading: false
              });
               console.log(this.state.dataProduk);

             }); 



 }


_getGangguan(){

    
    this.setState({
          loading: true
      });

   const client = new GraphQLClient(MainApi, {
      headers: {
        Authorization: MainToken,
         },
      })



 const QueryX = `query customer{

allGangguans(orderBy: createdAt_DESC){
    id
    title
    
  }

}`


client.request(QueryX)
             .then(data => {
               this.setState({
                dataGangguan:data.allGangguans,
                loading: false
              });
               console.log(this.state.dataGangguan);

             }); 



 }

_getProgres(){

    
    this.setState({
          loading: true
      });

   const client = new GraphQLClient(MainApi, {
      headers: {
        Authorization: MainToken,
         },
      })



 const QueryW = `query customer{

allProgreses(orderBy: createdAt_DESC){
    id
    title
    
  }

}`


client.request(QueryW)
             .then(data => {
               this.setState({
                dataProgres:data.allProgreses,
                loading: false
              });
               console.log(this.state.dataProgres);

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


_renderLayanan(){
          
         if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }
                 
          return(

            this.state.dataLayanan.map((item) => (


                        <Option key={item.id} value ={item.id}>{item.title}</Option>


                       ))

              )
      
               
 }

 _renderProduk(){
          
         if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }
                 
          return(

            this.state.dataProduk.map((item) => (


                        <Option key={item.id} value ={item.id}>{item.title}</Option>


                       ))

              )
      
               
 }

 _renderGangguan(){
          
         if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }
                 
          return(

            this.state.dataGangguan.map((item) => (


                        <Option key={item.id} value ={item.id}>{item.title}</Option>


                       ))

              )
      
               
 }

 _renderProgres(){
          
         if (this.state.loading) {
      return (<View>

                <Spinner color='red' />
             </View>)
    }
                 
          return(

            this.state.dataProgres.map((item) => (


                        <Option key={item.id} value ={item.id}>{item.title}</Option>


                       ))

              )
      
               
 }


//////////
  

 
  render() {
     
             
    
    return (
            <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Lapor Gangguan'
        />
        <ScrollView
         style={CommonStyles.scrollView}
        >

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
           <Icon
            style={{fontSize: 20, textAlign: 'center'}}
            name="chevron-thin-down"
            color="rgb(229,229,229)"
          />
         
          {this._renderPelanggan()}
          
        </Select>

        <Select
            onSelect = {this.onSelect2}
            defaultText  = {this.state.produk}
            style = {CommonStyles.textInputFieldx}
            textStyle = {CommonStyles.selectboxLabel}
            backdropStyle  = {{backgroundColor : "#fff"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
           <Icon
            style={{fontSize: 20, textAlign: 'center'}}
            name="chevron-thin-down"
            color="rgb(229,229,229)"
          />
           {this._renderProduk()}
          
        </Select>
        <Select
            onSelect = {this.onSelect3}
            defaultText  = {this.state.layanan}
            style = {CommonStyles.textInputFieldx}
            textStyle = {CommonStyles.selectboxLabel}
            backdropStyle  = {{backgroundColor : "#fff"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
           <Icon
            style={{fontSize: 20, textAlign: 'center'}}
            name="chevron-thin-down"
            color="rgb(229,229,229)"
          />
       
           {this._renderLayanan()}
        </Select>

        <Select
            onSelect = {this.onSelect4}
            defaultText  = {this.state.gangguan}
            style = {CommonStyles.textInputFieldx}
            textStyle = {CommonStyles.selectboxLabel}
            backdropStyle  = {{backgroundColor : "#fff"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
           <Icon
            style={{fontSize: 20, textAlign: 'center'}}
            name="chevron-thin-down"
            color="rgb(229,229,229)"
          />
          {this._renderGangguan()}
          
        </Select>

        <Select
            onSelect = {this.onSelect5}
            defaultText  = {this.state.progres}
            style = {CommonStyles.textInputFieldx}
            textStyle = {CommonStyles.selectboxLabel}
            backdropStyle  = {{backgroundColor : "#fff"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
           <Icon
            style={{fontSize: 20, textAlign: 'center'}}
            name="chevron-thin-down"
            color="rgb(229,229,229)"
          />
          {this._renderProgres()}
          
        </Select>


        <View style={CommonStyles.textInputField}>
          
            <Image
              source={require('../../img/emma/judul.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />

            <TextInput
              placeholder='Judul Laporan'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              returnKeyType="next"
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />
          </View>
      
       
          <Button block rounded success onPress={this.cariKontak} style={{marginBottom:20}}>
            <Text style={{color:'#fff',fontSize:16,fontFamily: 'Poppins-SemiBold'}}>Pilih daftar kontak</Text>
          </Button>

          <View style={CommonStyles.textInputField}>
          
            <Image
              source={require('../../img/emma/user.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 17, height: 22}}
            />

            <TextInput
              placeholder='Nama Kontak'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              returnKeyType="next"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </View>
          <View style={CommonStyles.textInputField}>
            <Image
              source={require('../../img/emma/phone.png')}
              style={{position:'absolute',bottom: 12,left: 20,width: 20, height: 22}}
            />
            <TextInput
              placeholder='Kontak telepon (+62)'
              style={CommonStyles.textInput}
              underlineColorAndroid='transparent'
              keyboardType="phone-pad"
              ref="signUpPass1"
              onChangeText={(telepon) => this.setState({telepon})}
              value={this.state.telepon}
            />
          </View>
          <View style={CommonStyles.textAreaField}>
            
            <TextInput
              placeholder='Deskripsi'
              multiline={true}
              numberOfLines={4}
              style={CommonStyles.areaInput}
              underlineColorAndroid='transparent'
              keyboardType="default"
              ref="signUpPass1"
              returnKeyType="done"
              onChangeText={(deskripsi) => this.setState({deskripsi})}
              value={this.state.deskripsi}
              onSubmitEditing={this._addTiket}
            />
          </View>
          <View style={CommonStyles.buttonBox}>
            <GradientButton
              onPressButton={this._addTiket}
              setting={shadowOpt}
              btnText="KIRIM"
            />
          </View>
          </View>
           
        </View>
        </ScrollView>
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
    marginTop: spaceHeight * 0.01 + NAV_HEIGHT,
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
    marginBottom: spaceHeight * 3,
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
