import styled from "styled-components/native";
import { StyleSheet, Text, View, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { TextInput} from 'react-native';
import React from 'react';

import { launchImageLibrary } from "react-native-image-picker";

const TextName = styled.TextInput`
    height: 50px;
    /* width: 60%; */
    border: 1px;
    padding: 5px;
    padding-left: 20px;
    font-size: 20px;
    border-radius: 10px;
`;

const DivImg =  styled.View`
   /* border: 1px;
   border-color: rgba(118, 211, 12, 0.5); */
   flex-direction: row;
   justify-content: space-around;
`;

const ContainerDiv = styled.View`
    margin-top:5%;
`;
const MainDiv = styled.View`
    flex-direction: column;
    margin-left:10%;
    margin-right:10%;
`;
const ImgGender = styled.Image`
    width: 90px;
    height: 90px;
    opacity: 0.5;
`;

const UploadImg = styled.Image`
    margin-top: 5%;
    width: 140px;
    height: 140px;
    align-self: center;
    
`;
const Headerinput = styled.Text`
    margin-bottom: 1%;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.459);
    font-weight: 500;
`;
const Textbtn = styled.Text`
    text-align: center;
    font-size: 30px;
    border-radius: 10px;
    padding: 15px;
    background-color: rgb(114, 217, 139);
    border: 1px;
`;

export const Create_profile = ({ navigation })=>{

const [selected, setSelected] = React.useState("");

const data = [
    {key:'1', value:'Кошка'},
    {key:'2', value:'Собака'},
    {key:'3', value:'Кролик'},
    {key:'4', value:'Лошадь'},
    {key:'5', value:'Тушканчик'},
]
var [ isPress, setIsPress ] = React.useState(false);

var touchProps1 = {
  style: isPress ? styles.btnPress : styles.btnNormal, 
};
var touchProps2 = {
    style: isPress ? styles.btnNormal : styles.btnPress, 
  };
//import { launchImageLibrary } from "react-native-image-picker"; - пример импорта
loadPhoto = async () => {
    try {
      const res = await launchImageLibrary(
        {mediaType: 'photo'},
        pickerRes => pickerRes,
      );
      if (res.assets) {
        console.log(res.assets);
      }
    } catch (e) {
      console.log('Error', e);
    }
};

    return (
        <View>
            <TouchableWithoutFeedback onPress={ loadPhoto}>
                <UploadImg source={require('../image/selectgen2.png')} ></UploadImg>
            </TouchableWithoutFeedback>
            <MainDiv>
                <ContainerDiv>
                    <Headerinput>Кличка:</Headerinput>
                    <TextName maxLength={25} placeholder="Введите имя:"/>
                </ContainerDiv>
                <ContainerDiv>
                    <Headerinput>Выберите вид:</Headerinput>
                    <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                    searchPlaceholder="поиск"
                    placeholder = "не выбрано"
                    />
                </ContainerDiv>
                <ContainerDiv>
                    <Headerinput>Возраст в годах:</Headerinput>
                    <TextName maxLength={2} placeholder="мне 7 лет" keyboardType = 'numeric'/>
                </ContainerDiv>
                <ContainerDiv>
                    <Headerinput>Гендер:</Headerinput>
                    <DivImg >
                        <TouchableWithoutFeedback onPress={() => setIsPress(true)}>
                            <ImgGender source={require('../image/man.png')} {...touchProps1}></ImgGender>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => setIsPress(false)}>
                            <ImgGender source={require('../image/woman.png')} {...touchProps2}></ImgGender>
                        </TouchableWithoutFeedback>
                    </DivImg>
                </ContainerDiv>
                <ContainerDiv>
                    
                        
                        <Textbtn onPress={() => navigation.navigate('Список профилей')}>Создать</Textbtn>
                    
                </ContainerDiv>
            </MainDiv>
            
        </View>
    );
}
var styles = StyleSheet.create({
    btnNormal: {
        opacity:0.5,
    },
    btnPress: {
        opacity:1,
    }
  });