import {Navigation} from 'react-native-navigation';

// Sample
//import SideMenu from './SideMenu';

// Project Catcha
import StartUpScreen from './StartUpScreen';
import StartUpLogoScreen from './StartUpLogoScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SettingScreen from './SettingScreen';
import MainServiceScreen from './MainServiceScreen';
import DaftarScreen from './DaftarScreen';
import KomunitasScreen from './KomunitasScreen';
import MabesScreen from './MabesScreen';
import FaqScreen from './FaqScreen';
import PesanScreen from './PesanScreen';
import KontakListScreen from './KontakListScreen';


// import UpdatePassScreen from './UpdatePassScreen';




export function registerScreens() {
  // Project
  Navigation.registerComponent('Fkppi.StartUpScreen', () => StartUpScreen);
  Navigation.registerComponent('Fkppi.StartUpLogoScreen', () => StartUpLogoScreen);
  Navigation.registerComponent('Fkppi.SignInScreen', () => SignInScreen);
  Navigation.registerComponent('Fkppi.SignUpScreen', () => SignUpScreen);
  Navigation.registerComponent('Fkppi.SettingScreen', () => SettingScreen);
  Navigation.registerComponent('Fkppi.MainServiceScreen', () => MainServiceScreen);
  Navigation.registerComponent('Fkppi.DaftarScreen', () => DaftarScreen);
  Navigation.registerComponent('Fkppi.KomunitasScreen', () => KomunitasScreen);
  Navigation.registerComponent('Fkppi.MabesScreen', () => MabesScreen);
  Navigation.registerComponent('Fkppi.FaqScreen', () => FaqScreen);
  Navigation.registerComponent('Fkppi.PesanScreen', () => PesanScreen);
  Navigation.registerComponent('Fkppi.KontakListScreen', () => KontakListyScreen);



  // Navigation.registerComponent('Catcha.UpdatePassScreen', () => UpdatePassScreen);

 
}
