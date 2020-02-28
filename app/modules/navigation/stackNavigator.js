import { createStackNavigator } from 'react-navigation-stack';
import RegistrationScreen from '../../views/authenticationFlow/registrationScreen/registrationScreen/registrationScreen';
import RegisterScreen from '../../views/authenticationFlow/registrationScreen/registerScreen/registerScreen';
import RegisterScreen4 from '../../views/authenticationFlow/registrationScreen/registerScreen4/registerScreen4';
import RegisterScreen1 from '../../views/authenticationFlow/registrationScreen/registerScreen1/registerScreen';
import RegisterScreen2 from '../../views/authenticationFlow/registrationScreen/registerScreen2/registerScreen2';
import RegisterScreen3 from '../../views/authenticationFlow/registrationScreen/registerScreen3/registerScreen3';
import TabBarNavigator from './tabNavigator';
import SignUp from '../../views/authenticationFlow/registrationScreen/signUp/signUp'

const navigationOptions = {
    headerMode: 'none',
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export const AuthenticationStack = createStackNavigator({
    RegistrationScreen,
    SignUp,
    RegisterScreen,
    RegisterScreen4,
    RegisterScreen1,
    RegisterScreen2,
    RegisterScreen3
}, navigationOptions);

export const AppStack = createStackNavigator({
    TabBarNavigator
}, navigationOptions);
