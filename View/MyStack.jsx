import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { ListPet} from "./page_listpet"
import { Create_profile } from './page_create_prof';
import { ListNote } from './ListNote';
import { EditProf } from './EditProf';
import { Vaccination } from './Vaccination';

const Stack = createNativeStackNavigator();


export const Navigation = () => {
    return(
        <Stack.Navigator>
            
            <Stack.Screen name="Список профилей" component={ListPet} />
            <Stack.Screen name="Создание нового профиля" component={Create_profile} />
            <Stack.Screen name="Меню" component={ListNote} />
            <Stack.Screen name='Редактирование' component={EditProf}/>
            <Stack.Screen name='Вакцинация' component={Vaccination}/>
        </Stack.Navigator>
    )
}