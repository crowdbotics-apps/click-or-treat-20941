import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera4120397Navigator from '../features/Camera4120397/navigator';
import BlankScreen17120396Navigator from '../features/BlankScreen17120396/navigator';
import Settings120364Navigator from '../features/Settings120364/navigator';
import Settings120347Navigator from '../features/Settings120347/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera4120397: { screen: Camera4120397Navigator },
BlankScreen17120396: { screen: BlankScreen17120396Navigator },
Settings120364: { screen: Settings120364Navigator },
Settings120347: { screen: Settings120347Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
