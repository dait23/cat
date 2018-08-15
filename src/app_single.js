import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';

registerScreens();

// this will start our app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'Fkppi.StartUpScreen',
  },
   animationType: 'slide-up'
});
