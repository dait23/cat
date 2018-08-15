import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export const NAV_TAB_HEIGHT = 95;
export const NAV_HEIGHT = 45;
export const TAB_HEIGHT = 50;

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const shadowOpt = {btnWidth: deviceWidth - 55, btnHeight: 45}

// Only for FindDoctors, FindHospital, Appointment screens
export const spaceHeight = deviceHeight -  375 - 45;

// Only for Intro screens
export const introSpaceHeight = deviceHeight - 364;

// Common gradient colors
export const blueGradient = {
  colors: ['rgb(152, 0, 0)', 'rgb(178, 0, 0)'],
  colorsStart: {x: 0.2, y: 0.4},
  colorsEnd: {x: 1.0, y: 1.0}
}

export const fkppiGradient = {
  colors: ['rgb(162, 152, 117)', 'rgb(137, 128, 106)'],
  colorsStart: {x: 0.2, y: 0.4},
  colorsEnd: {x: 1.0, y: 1.0}
}

// CommonStyles
export default CommonStyles = StyleSheet.create({
  normalPage: {
    position: 'relative',
    flex: 1,
    backgroundColor: "#fbfbfb",
  },
  mainPage: {
    position: 'relative',
    flex: 1,
  },
  normalSinglePage: {
    flex: 1,
    backgroundColor: "#fbfbfb",
  },
  singlePagePurple:{
   flex: 1,
   backgroundColor: '#35285e',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
  },

  wrapperBox: {
    marginTop: 10,
    marginBottom: 20,
  },
  noTabScrollView: {
    marginTop: NAV_HEIGHT,
  },
  noTabScroll: {
    marginTop: deviceHeight * 0.01,
  },
  smallWrapperBox: {
    marginTop: 20,
    marginBottom: 20,
  },
  scrollView: {
    marginTop: NAV_HEIGHT,
    marginBottom: TAB_HEIGHT, 
  },
  // Color
  whiteColor: {
    color: '#FFFFFF',
  },
  greyColor: {
    color: 'rgb(105,105,105)',
  },
  lightgreyColor: {
    color: 'rgb(150,150,150)',
  },
  blackColor: {
    color: 'rgb(19,19,19)',
  },
  greenColor:{
    color:'#7cc233',
  },
  softBlueColor: {
    color: 'rgb(152, 0, 0)',
  },
  darkSkyBlueColor: {
    color: 'rgb(127, 0, 0)',
  },
  periBlueColor: {
    color: 'rgb(228,14,39)',
  },
  
  yellowColor: {
    color: 'rgb(255,191,32)',
  },


  // Text 
  extraLargeText: {
    height: 52,
    fontSize: 40,
    fontFamily: 'Roboto',
  },
  titleText: {
    fontSize: 28,
    lineHeight: 40,
    fontFamily: 'Roboto',
  },
   forgotText: {
    fontSize: 25,
    lineHeight: 30,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 30
  },
  itemHeaderText: {
    fontSize: 17,
    lineHeight: 20 
  },
  mediumText: {
    fontSize: 20,
  },
   headerText: {
    fontSize: 22,
  },
  normalText: {
    fontSize: 15,
    lineHeight: 23
  },
  smallText: {
    fontSize: 13,
    lineHeight: 30 
  },
  pesanText: {
    fontSize: 12.5,
    lineHeight:20 
  },
  shortSmallText: {
    fontSize: 13,
    lineHeight: 23 
  },
  light: {
    fontFamily: 'Roboto-Light',
  }, 
  regularBold: {
    fontFamily: 'Roboto',
  }, 
  mediumBold: {
    fontFamily: 'Roboto-Medium',
  }, 
  semiBold: {
    fontFamily: 'Roboto-SemiBold',
  }, 
  extraBold: {
    fontFamily: 'Roboto-Bold',
  }, 
  // Image
  borderRadius: {
    borderRadius: 200,
  },
  // Item box
  itemWhiteBox: {
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  buttonField:{
    flexDirection: 'row',
    width: deviceWidth - 100,
    height: 60,
    marginBottom: 25,
    borderColor:'#7cc233',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor:'#7cc233',
  },
   buttonFieldLogin:{
    flexDirection: 'row',
    width: deviceWidth - 100,
    height: 50,
    marginBottom: 25,
    borderColor:'#404f3d',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor:'#404f3d',
    alignItems: 'center' 
  },
   buttonFieldYellow:{
    flexDirection: 'row',
    width: deviceWidth - 100,
    height: 50,
    marginBottom: 25,
    borderColor:'#ffbf20',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor:'#ffbf20',
    alignItems: 'center' 
  },

  fotBox:{
    flexDirection: 'row',
    width: deviceWidth - 100,
    height: 60,
    marginBottom: 25,
    borderStyle: 'solid',
    borderRadius: 0,
    alignItems: 'center' ,
    justifyContent: 'space-between',
  },
   buttonFieldFb:{
    flexDirection: 'row',
    width: deviceWidth - 100,
    height: 50,
    marginBottom: 25,
    borderColor:'#173B89',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor:'#173B89',
    alignItems: 'center' 
  },

  buttonFieldGoogle:{
    flexDirection: 'row',
    width: deviceWidth - 100,
    height: 50,
    marginBottom: 25,
    borderColor:'#dc4e41',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor:'#dc4e41',
    alignItems: 'center' 
  },

  // Form Styles
  textInputField: {
    flexDirection: 'row',
    width: deviceWidth - 100,
    height: 60,
    marginBottom: 0,
    borderColor:'rgb(229,229,229)',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 0,
    backgroundColor:'#FFFFFF',
  },
  textAreaField: {
    flexDirection: 'row',
    width: deviceWidth - 55,
    height: 150,
    marginBottom: 25,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor:'#fbfbfb',
  },
  textInputFieldx: {
    flexDirection: 'row',
    width: deviceWidth - 55,
    height: 45,
    paddingLeft:20,
    paddingTop:5,
    marginBottom: 25,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor:'#132b51',
  },
  textInput: {
    width: deviceWidth - 100,
    height: 50,
    paddingLeft: 0,
    textAlign:'center',
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto',
    
  },
  textInputx: {
    width: deviceWidth - 150,
    height: 60,
    paddingLeft: 0,
    textAlign:'center',
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto',
    
  },
   areaInput: {
    width: deviceWidth - 800,
    height: 150,
    paddingLeft: 10,
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  selectboxField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 800,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor:'rgb(229,229,229)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    backgroundColor:'#FFFFFF',
  },
  selectboxLabel: {
    color: 'rgb(150,150,150)',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  // Button Styles
  backButton: {
    flex: 1,
    alignItems: 'center',
    width: 41,
    height: 41 
  },
  nextButton: {
    flex: 1,
    alignItems: 'center',
    width: 60,
    height: 60 
  },
  // Intro pages styles
  introPageImageBox: {
    alignItems: 'center',
    marginTop: introSpaceHeight * 0.33,
  },
  introPageTextBox: {
    alignItems: 'center',
    marginTop: introSpaceHeight * 0.27,
  },
  introPageSubText: {
    width: deviceWidth - 75,
    height: 60,
    marginTop: 15,
    color: 'rgb(105,105,105)',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  introPageButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: introSpaceHeight * 0.27,
    marginBottom: 20,
  },
  introPageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  // StartScreens 
  labelField: {
    marginTop: 30 + NAV_HEIGHT,
    marginBottom: 25,
    paddingLeft: (deviceWidth - (deviceWidth - 55))/2,
  },
  pickerBox: {
    position: 'relative',
    height: 402,
    flexDirection: 'row',
    marginBottom: 15,
  },
  selectedOption: {
    position: 'absolute',
    top: deviceHeight/2.6 + NAV_HEIGHT,
    width: deviceWidth,
    height: 75,
  },
  // Form Screens
  screenTitleBox: {
    height: 75,
    marginTop: (spaceHeight * 0.3) + NAV_HEIGHT,
    marginBottom: spaceHeight * 0.15,
    paddingLeft: (deviceWidth - (deviceWidth - 55))/2,
  },
  buttonBox: {
    height: 60,
    width: deviceWidth - 800,
    alignItems: 'center',
    backgroundColor: '#7cc233'
  },
  // Circle edit button
  editButton: {
    position: 'absolute',
    top: 25, 
    right: 15,
    elevation: 12,
  },
});
