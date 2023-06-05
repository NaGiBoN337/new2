
import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback,ScrollView } from 'react-native';
import React from 'react';




export const Preventive = ({ navigation })=>{
   //const [valueCom, onChangeComment] = React.useState('');
 
    return (
        <ScrollView>
           
                <Image style={styles.HeaderImg} source={require('../image/cleaning.png')}></Image>
                <View style = {styles.MainDiv}>
                    <View style={styles.ContainerDiv} >
                        <TouchableOpacity onPress={() => navigation.navigate('Гигиена')}>
                        <View style={[styles.box,styles.ContainerBtn]}>
                            <Image style={styles.ImgNote} source={require('../image/shampoo.png')}></Image>
                            <Text>Гигиена</Text>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <View style={[styles.box,styles.ContainerBtn]}>
                            <Image style={styles.ImgNote} source={require('../image/procedure.png')}></Image>
                            <Text>Регулярные процедуры</Text>
                        </View>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.ContainerDiv}>
                        <TouchableOpacity>
                        <View style={[styles.box,styles.ContainerBtn]}>
                            <Image style={styles.ImgNote} source={require('../image/medicine1.png')} ></Image>
                            <Text>Лекарства</Text>
                        </View>
                       </TouchableOpacity>
                    </View>
     
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    box:{
        elevation: 10,
        shadowColor: "#000000",
        shadowOffset: {width: -15, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    MainDiv:{
        height: 800,
        flexDirection: "column",
        marginLeft:"5%",
        marginRight:"5%",
    },
    Header:{
        marginTop:"5%",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ImgNote:{
        height: 65,
        width: 65,
        // borderRadius:20,
    },
    Headerinput:{
        marginBottom:"1%",
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.459)',
        fontWeight: "500",
    },
    HeaderDivText:{
        justifyContent:'center',
    },
    NameT:{
        fontSize: 20,
        fontWeight: "500",
    },
    ContainerDiv:{
        marginTop: "5%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ContainerBtn:{
        width: 150,
        padding: 25,
        paddingTop: 15,
        backgroundColor: 'rgb(197, 209, 146)',
        borderRadius: 30,
        alignItems: 'center',
    },
    Texbtn:{
        marginTop:'5%',
        textAlign: 'center',
        fontSize: 30,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'rgb(114, 217, 139)',
        border:1 ,
    },
    HeaderImg:{
        borderRadius:30,
        marginTop: '5%',
        width: 140,
        height: 140,
        alignSelf: 'center',
    },
    
})