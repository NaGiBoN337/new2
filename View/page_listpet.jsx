import { PetProfile  } from '../components/PetProfile';
import { Btncreate } from "../components/Btncreate";
import styled from "styled-components/native";
import { StyleSheet, Text, View, Image,Button,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';

const Textbtn = styled.Text`
    text-align: center;
    font-size: 30px;
    border-radius: 10px;
    padding: 15px;
    background-color: rgb(114, 217, 139);
    border: 1px;
`;

export const ListPet = ({ navigation })=>{
    return (
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Меню')}>
            <PetProfile 
            post ={{
                name : "elizabet",
                age : "7",
                'gender' : require('../image/woman.png'),
                'frofileImg': require('../image/123.jpg'),
            }}
            ></PetProfile>
        </TouchableOpacity>
        <TouchableOpacity >
            <PetProfile 
            post ={{
                name : "patrik",
                age : "3",
                'gender' : require('../image/man.png'),
                'frofileImg': require('../image/321.jpg'),
            }}
            ></PetProfile>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Создание нового профиля')}>
            <Textbtn> Создать профиль</Textbtn>
        </TouchableOpacity>
        </View>

    );
}
