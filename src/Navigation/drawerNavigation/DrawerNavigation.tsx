import { createDrawerNavigator } from '@react-navigation/drawer';
import Test1 from '../../screens/Test1';
import Test2 from '../../screens/Test2';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {


    return (
        <Drawer.Navigator initialRouteName="test1">
            <Drawer.Screen name="test1" component={Test1} />
            <Drawer.Screen name="test2" component={Test2} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
