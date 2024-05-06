import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaleService from '../pages/AddService/MaleService';
import FemaleService from '../pages/AddService/FemaleService';

const Tab = createMaterialTopTabNavigator();

const AddService = () => {

    return (
        <Tab.Navigator >
            <Tab.Screen name="Male" component={MaleService} />
            <Tab.Screen name="Female" component={FemaleService} />
        </Tab.Navigator>

    )
}

export default AddService
