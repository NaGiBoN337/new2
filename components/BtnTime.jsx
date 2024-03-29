import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Image,Button,TouchableOpacity,FlatList,TouchableWithoutFeedback } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

const BtnTime = ({ startTime,textBtn }) => {
    const [selectedDate, setSelectedDate] = useState(new Date(startTime));
    const [showPicker, setShowPicker] = useState(false);
  
    const handleButtonPress = () => {
      setShowPicker(true);
    };
  
    const handleDateChange = (event, date) => {
      setShowPicker(false);
      if (date) {
        setSelectedDate(date);
      }
    };
  
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    };

  return (
    <View style={styles.MyView}>
      <Text style={styles.TextBtn}>{formatDate(selectedDate)}</Text>
      <Text onPress={handleButtonPress} style={[styles.TextBtn,styles.styleBtn]}>{textBtn}</Text>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default BtnTime;



const styles = StyleSheet.create({
    MyView:{
        justifyContent:'space-around',
        flexDirection: 'column',
    },
    TextBtn:{
        fontSize: 20,
    },
    styleBtn:{
        borderBottomWidth: 1,
    },
    
})