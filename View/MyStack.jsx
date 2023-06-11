import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { ListPet} from "./page_listpet"
import { Create_profile } from './Create_profile';
import { ListNote } from './ListNote';
import { EditProf } from './EditProf';
import { Vaccination } from './Vaccination';
import { Analyses } from './analyses';
import { Xray } from './Xray';
import { DoctorVisit } from './DoctorVisit';
import { Calc } from './Calc';
import { Preventive } from './Preventive';
import { Hygiene } from './Hygiene';
import { Notes } from './Notes';
const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Список профилей" component={ListPet} />
            <Stack.Screen name="Создание нового профиля" component={Create_profile} />
            <Stack.Screen name="Меню" component={ListNote} />
            <Stack.Screen name='Редактирование' component={EditProf}/>
            <Stack.Screen name='Вакцинация' component={Vaccination}/>
            <Stack.Screen name='Анализы' component={Analyses}/>
            <Stack.Screen name='Рентген' component={Xray}/>
            <Stack.Screen name='Посейщение врача' component={DoctorVisit}/>
            <Stack.Screen name='Калькулятор веса' component={Calc}/>
            <Stack.Screen name='Профилактические меры' component={Preventive}/>
            <Stack.Screen name='Гигиена' component={Hygiene}/>
            <Stack.Screen name='Основные записи' component={Notes}/>
        </Stack.Navigator>
    )
}