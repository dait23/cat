import {
  Platform,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

export const noNavTabbarNavigation = {
  orientation: 'portrait',
  navBarHidden: true,
  tabBarHidden: true,
  statusBarBlur: false,
  statusBarColor: 'rgba(162,153,117,1)',
}

export const appSingleNavigation = {
  navBarHidden: true,
  orientation: 'portrait',
  //statusBarColor: '#fff',
  statusBarTextColorSchemeSingleScreen: '#000',
}

export const singleScreenNavigation = {
  orientation: 'portrait',
  navBarHidden: true,
  tabBarHidden: true,
  //statusBarColor: '#fff',
  statusBarTextColorScheme: '#000',
}
