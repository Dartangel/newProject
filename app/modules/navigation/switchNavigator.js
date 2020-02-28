import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from '../../views/splashScreen/splashScreen';
import { AuthenticationStack, AppStack } from './stackNavigator';
import { ROUTERS } from '../../services/constants';

export default SwitchNavigator = createAppContainer(createSwitchNavigator(
  {
    SplashScreen,
    App: AppStack,
    Auth: AuthenticationStack,
  },
  {
    initialRouteName: ROUTERS.SplashScreen,
  }
));