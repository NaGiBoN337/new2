
import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'



export const Vaccination = ({ navigation })=>{
    const [selected, setSelected] = React.useState("");
    const [valueCom, onChangeComment] = React.useState('');

    const data = [
        {key:'1', value:'Препарат1'},
        {key:'2', value:'Препарат2'},
        {key:'3', value:'Препарат3'},
        {key:'4', value:'Препарат4'},
        {key:'5', value:'Препарат5'},
    ]
    return (
        <View>
           <View style={styles.MainDiv}> 
                <Image style={styles.UploadImg} source={require('../image/vaccine.png')}></Image>
                
                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Навание препарата:</Text>
                    <SelectList  
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                    searchPlaceholder="поиск"
                    placeholder = "не выбрано"
                    />
                </View>

                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Дата:</Text>
                    <TextInput numberOfLines={4} style={styles.TextInputs} value={"Сделать пик даты"}></TextInput>
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
        </View>
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