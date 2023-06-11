
import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback,ScrollView } from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import BtnTime from '../components/BtnTime';


export const Vaccination = ({ navigation })=>{
    const [selectedLabel, setSelectedLabel] = React.useState("");
    const [selectedTime, setSelectedTime] = React.useState("");
    const [valueCom, onChangeComment] = React.useState('');

    const dataVac = [
        {key:'1', value:'Препарат1'},
        {key:'2', value:'Препарат2'},
        {key:'3', value:'Препарат3'},
        {key:'4', value:'Препарат4'},
        {key:'5', value:'Препарат5'},
    ]
    const dataTimeVac =[
        {key:'1', value:'Три недели'},
        {key:'2', value:'Раз в год'},
        {key:'3', value:'Раз в пол года'},
    ]
    return (
        <ScrollView>
           <View style={styles.MainDiv}> 
                <Image style={styles.UploadImg} source={require('../image/vaccine.png')}></Image>
                
                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Навание препарата:</Text>
                    <SelectList  
                    setSelected={(val) => setSelectedLabel(val)} 
                    data={dataVac} 
                    save="value"
                    searchPlaceholder="поиск"
                    placeholder = "не выбрано"
                    />
                </View>
                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Повторяемость:</Text>
                    <SelectList  
                    setSelected={(val) => setSelectedTime(val)} 
                    data={dataTimeVac} 
                    save="value"
                    searchPlaceholder="поиск"
                    placeholder = {dataTimeVac[0].value}
                    />
                </View>
                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Дата:</Text>
                    <BtnTime
                    startTime={new Date()}
                    textBtn={"Выбор даты"}
                    ></BtnTime>
                </View>

                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Коментарий:</Text>
                    <TextInput
                    editable 
                    multiline 
                    numberOfLines={3} 
                    style={styles.MyPadding}
                    value={valueCom}
                    maxLength={100}
                    onChangeText={val => onChangeComment(val)}
                    ></TextInput>
                </View>

                <View style={styles.ContainerDiv}>
                    {/* <Button style={styles.TextBtn} title='Сохранить' fontSize={30} padding={15} color={'rgb(114, 217, 139)'}/> */}
                    <Text style={styles.TextBtn}> Сохранить</Text>
                </View>
           </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    MyPadding:{
        padding:10,
         // //    width: '60%',
         //    border: 1,
        borderWidth: 1,
        padding:5,
        paddingLeft: 20,
        fontSize: 20,
        borderRadius: 10,
    },
    UploadImg:{
        borderRadius:30,
        marginTop: '5%',
        width: 140,
        height: 140,
        alignSelf: 'center',
    },
    MainDiv:{
        flexDirection:'column',
        marginLeft: '10%',  
        marginRight: '10%',
    },
    TextInputs:{
        height: 50,
     // //    width: '60%',
     //    border: 1,
        
        borderWidth: 1,
        padding:5,
        paddingLeft: 20,
        fontSize: 20,
        borderRadius: 10,
     },
     ContainerDiv:{
        marginTop: '5%',
    },
    HeaderInput:{
        marginBottom: "1%",
        fontSize: 20,
        // color: 'rgba(0, 0, 0, 0.459)',
        fontWeight: 500,
    },
    TextBtn:{
        textAlign: 'center',
        fontSize: 30,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'rgb(114, 217, 139)',
        borderWidth: 1,
    },
})