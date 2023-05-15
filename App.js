import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useState,useEffect } from 'react';
import { Navigation } from './View/MyStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';




export default function App() {
    /*const db = SQLite.openDatabase("superbase.db");
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
            tx.executeSql('insert into profile (name)  VALUES ("alex")')
        },);

        db.transaction(tx => {
                tx.executeSql('SELECT name FROM profile', null,
                  (transaction, resultSet) => setname(resultSet.rows._array),
                  (transaction, error) => console.log(error));
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
*/
    return (
        <NavigationContainer>
            <Navigation></Navigation>
        </NavigationContainer>

  );
}

