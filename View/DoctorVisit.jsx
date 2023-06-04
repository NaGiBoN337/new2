
import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback,ScrollView } from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'



export const DoctorVisit = ({ navigation })=>{
    const [valueCom, onChangeComment] = React.useState('');
 
    return (
        <ScrollView>
           <View style={styles.MainDiv}> 
                <Image style={styles.HeaderImg} source={require('../image/veterinarian.png')}></Image>
                
                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Навание проверки:</Text>
                    <TextInput numberOfLines={4} style={styles.TextInputs} placeholder=''></TextInput>
                </View>
    
                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Дата:</Text>
                    <TextInput numberOfLines={4} style={styles.TextInputs} placeholder="Сделать пик даты"></TextInput>
                </View>

                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Прикрепить фото\документ:</Text>
                    <Image style={styles.UploadImg} source={require('../image/upload.png')}></Image>
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
    HeaderImg:{
        borderRadius:30,
        marginTop: '5%',
        width: 140,
        height: 140,
        alignSelf: 'center',
    },
    UploadImg:{
        borderRadius:30,
        marginTop: '5%',
        width: 100,
        height: 100,
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