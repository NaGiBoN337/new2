
import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback } from 'react-native';
import React from 'react';


export const EditProf = ({ navigation })=>{
    const [name, onChangeName] = React.useState('Elizabet');
    const [breed, onChangebreed] = React.useState('Африканский бульдог');
    const [age, onChangeage] = React.useState('7 лет');

    return (
        <View>
           <View style={styles.MainDiv}> 
                <Image style={styles.UploadImg} source={require('../image/123.jpg')}></Image>

                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Имя:</Text>
                    <TextInput style={styles.TextInputs} 
                    onChangeText={onChangeName}
                    value={name}
                    ></TextInput>
                </View>
                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Порода:</Text>
                    <TextInput style={styles.TextInputs} 
                    onChangeText={onChangebreed}
                    value={breed}
                    ></TextInput>
                </View>
                <View style={styles.ContainerDiv}>
                    <Text style={styles.HeaderInput}>Возраст:</Text>
                    <TextInput style={styles.TextInputs} 
                    onChangeText={onChangeage}
                    value={age}
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
        // marginBottom: "1%",
        fontSize: 20,
        // color: 'rgba(0, 0, 0, 0.459)',
        // fontWeight: 500,
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