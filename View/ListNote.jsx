import styled from "styled-components/native";

import { StyleSheet, Text, View, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback } from 'react-native';


const MainDiv = styled.View`
    flex-direction: column;
    margin-left:5%;
    margin-right:5%;
`;

const Header = styled.View`
    margin-top: 5%;
    flex-direction: row;
    justify-content: space-around;
    
`;
const ImgHeader = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 20px;
`;
const ImgNote = styled.Image`
    height: 65px;
    width: 65px;
    /* border-radius: 20px; */
`;
const Headerinput = styled.Text`
    margin-bottom: 1%;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.459);
    font-weight: 500;
`;
const HeaderDivText = styled.View`
    justify-content: center;
`;
const NameT = styled.Text`
    font-size: 20px;
    font-weight: 500;
`;


const ContainerDiv = styled.View`
    margin-top:5%;
    flex-direction: row;
    justify-content: space-between;
`;

const ContainerBtn = styled.View`
    width: 150px;
    padding: 25px;
    padding-top: 15px;
    background-color: rgb(197, 209, 146);
    border-radius: 30px;
    align-items: center;
`;
const Textbtn = styled.Text`
    margin-top:5%;
    text-align: center;
    font-size: 30px;
    border-radius: 10px;
    padding: 15px;
    background-color: rgb(114, 217, 139);
    border: 1px;
`;
export const ListNote = ({ navigation })=>{
        return (
            <View>
                <MainDiv>
                    <Header>
                        <HeaderDivText>
                            <NameT>Elizabet</NameT>
                            <Text>Африканский бульдог, 7 лет</Text>
                        </HeaderDivText>
                        <ImgHeader source={require('../image/123.jpg')} ></ImgHeader>
                    </Header>

                    <ContainerDiv>
                        <Headerinput>Выберите запись:</Headerinput>
                    </ContainerDiv>
                

                    <ContainerDiv >
                        <TouchableOpacity>
                        <ContainerBtn style={styles.box}>
                            <ImgNote source={require('../image/vaccine.png')} ></ImgNote>
                            <Text>Вакцинация</Text>
                        </ContainerBtn>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <ContainerBtn style={styles.box}>
                            <ImgNote source={require('../image/lab.png')} ></ImgNote>
                            <Text>Анализы</Text>
                        </ContainerBtn>
                        </TouchableOpacity>
                        
                    </ContainerDiv>

                    <ContainerDiv>
                        <ContainerBtn style={styles.box}>
                            <ImgNote source={require('../image/x-rayy.png')} ></ImgNote>
                            <Text>Узи/рентген</Text>
                        </ContainerBtn>

                        <ContainerBtn style={styles.box}>
                            <ImgNote source={require('../image/cleaning.png')} ></ImgNote>
                            <Text>Проф. меры</Text>
                        </ContainerBtn>
                    </ContainerDiv>

                    <ContainerDiv>
                        <ContainerBtn style={styles.box}>
                            <ImgNote source={require('../image/veterinarian.png')} ></ImgNote>
                            <Text>Посейщение врача</Text>
                        </ContainerBtn>
                    </ContainerDiv>
                    
                    
                    <Textbtn style={styles.box}>Все записи</Textbtn>
                    
                </MainDiv>
            </View>
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
})