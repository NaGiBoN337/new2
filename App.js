import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { PetProfile  } from './components/PetProfile';
import styled from "styled-components/native";
import * as SQLite from 'expo-sqlite';
import { useState,useEffect } from 'react';


const Mybar =  styled.View`
    height: 30px;
`;
const C_btn = styled.Button`
   font-size: 24px;
   justify-content: 'center';
`;

const StyledView = styled.View`
  margin-top: 50%;
  text-align: "center";
`

export default function App() {
    const db = SQLite.openDatabase("superbase.db");
    const [isLoad, SetisLoad] = useState(true);
    const [name, setname] = useState([]);
    
    useEffect(()=>{
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE profile (id_profile	INTEGER,name TEXT, PRIMARY KEY(id_profile AUTOINCREMENT))')
          });
    console.log("bd create");
    },[]);

    const create_name = ()=>{
        db.transaction(tx => {
            tx.executeSql('insert into profile (name)  VALUES ("alex")')},
            );

        db.transaction(tx => {
                tx.executeSql('SELECT name FROM profile', null,
                  (txObj, resultSet) => setname(resultSet.rows._array),
                  (txObj, error) => console.log(error)
                );
              });  
      console.log('name');  
      SetisLoad(false);
    };


    if(isLoad){
        return(
            <StyledView>
                <Text>Создайте профили..</Text>
                <Button title="Create new profile" onPress={create_name}></Button>
            </StyledView>
        );
    }

    return (
    <View>
       <StatusBar style="inverted" hidden={false}/>
       <Mybar></Mybar>
       
       <PetProfile
        post ={{
            name : "elizabet",
            age : "7",
            'gender' : require('./image/man.png'),
            'frofileImg': require('./image/123.jpg'),
        }}
       ></PetProfile>

       
       <C_btn title="Create new profile"></C_btn>

    </View>
    
  );
}

