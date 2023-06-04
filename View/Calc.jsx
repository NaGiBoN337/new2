
import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback,ScrollView } from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'



export const Calc = ({ navigation })=>{
    const [valueCom, onChangeComment] = React.useState('');
 
    return (
        <ScrollView>
           <Image style={styles.Graphic} source={require('../image/Grafic.png')}></Image>
           <View style={styles.HeaderView}>
                <Text style={styles.TextTitle}>Новая запись:</Text>
                <View style={styles.NewViewlist}>
                    <TextInput 
                    style={styles.TextInputs}
                    keyboardType="numeric"
                    placeholder='21 кг'
                    ></TextInput>
                    <Text style={styles.BtnAdd}>Добавить</Text>
                </View>
           </View>
           <View style={styles.HeaderViewAll}>
                <Text style={styles.TextTitle}>Все записи:</Text>

                <TouchableOpacity>
                    <Text style={styles.TExtNote}>{'->'} 03.06.2023
                        <Text> Вес: 25 кг</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.TExtNote}>{'->'} 02.06.2023
                        <Text> Вес: 25.2 кг</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.TExtNote}>{'->'} 28.05.2023
                        <Text> Вес: 25.4 кг</Text>
                    </Text>
                </TouchableOpacity>

           </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    TExtNote:{
        marginTop: 10,
        fontSize: 20,
        borderBottomWidth:0.5,
        marginRight: '10%',
    },
    BtnAdd:{
        height: 50,
        marginLeft: 15,
        borderWidth: 1,
        padding:5,
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: 'rgb(114, 217, 139)',
    },
    NewViewlist:{
        flexDirection:'row',
    },
    TextTitle:{
        marginBottom: "1%",
        fontSize: 20,
        // color: 'rgba(0, 0, 0, 0.459)',
        fontWeight: 500,
    },
    HeaderViewAll:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: '5%',
    },
    HeaderView:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: '5%',
        borderBottomWidth: 1,
    },
    Graphic:{
        width: '100%',
        height: 300,
    }, 
    TextInputs:{
        height: 50,
        width: '25%',
     //    border: 1,
        borderWidth: 1,
        padding:5,
        paddingLeft: 20,
        fontSize: 20,
        borderRadius: 10,
     },
})