import React, { Component } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  RefreshControl
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import CommonStyles from '../styles/CommonStyles';
import ListItem from '../components/ListItem';
import CustomTabBar from '../components/CommonTabBar';
import GradientNavigationBar from '../elements/GradientNavigationBar';

 var ID = '1';

export default class ListCustomerScreen extends Component {
  constructor(props) {
    super(props);
    this. state = {
      refreshing: false,
      doctorsList: [
        {
          id: 0,
          doctorAva: 'https://pbs.twimg.com/profile_images/848802469077549056/HqAfzEDT_400x400.jpg',
          doctorName: 'Google Indonesia',
          career: 'Basic Services',
          distanceText: 12345600,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
         isSpecial: false 
        },
        {
          id: 1,
           doctorAva: 'https://pbs.twimg.com/profile_images/848802469077549056/HqAfzEDT_400x400.jpg',
           doctorName: 'Google Indonesia',
          career: 'Basic Services',
          distanceText: 12345600,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
          isSpecial: false 
        },
        {
          id: 2,
          doctorAva: 'https://pbs.twimg.com/profile_images/848802469077549056/HqAfzEDT_400x400.jpg',
           doctorName: 'Google Indonesia',
          career: 'Basic Services',
         distanceText: 12345600,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
          isSpecial: false 
        },
        {
          id: 3,
           doctorAva: 'https://pbs.twimg.com/profile_images/848802469077549056/HqAfzEDT_400x400.jpg',
           doctorName: 'Google Indonesia',
          career: 'Basic Services',
          ddistanceText: 12345600,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
          isSpecial: false 
        },
        {
          id: 4,
           doctorAva: 'https://pbs.twimg.com/profile_images/848802469077549056/HqAfzEDT_400x400.jpg',
           doctorName: 'Google Indonesia',
          career: 'Basic Services',
          distanceText: 12345600,
          doctorAvaWidth: 70,
          doctorAvaHeight: 70,
          isSpecial: false 
        },
      ]
    }
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }



  render() {

    return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText='Daftar Pelanggan'
          isBack={false} 
        />
        <ScrollView 
          style={CommonStyles.scrollView}
           refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }


          >
          <View style={CommonStyles.smallWrapperBox}>
            {
              this.state.doctorsList.map((item, index) => (
                <ListItem
                  key={item.id}
                  imageUrl={item.doctorAva}
                  itemTitle={item.doctorName}
                  careerText={item.career}
                  distanceText={item.distanceText}
                  imageWidth={item.doctorAvaWidth}
                  imageHeight={item.doctorAvaHeight}
                  isSpecial={item.isSpecial}
                  onPressButton={this._handleClickListDoctorsItem.bind(this)}
                />
              ))
            }
          </View>
        </ScrollView>
        <CustomTabBar
          navigator={this.props.navigator}
          isActive='tab2'
        />
      </View>
    );
  }

  // Goto DoctorDetailsScreen
  _handleClickListDoctorsItem() {
    this.props.navigator.push({
      title: "Customer Details",
      passProps: {

       name :"Customer Details"
      },
      screen: "Healer.DoctorDeatailsScreen"
    });
  }
}
