import React, {useState} from 'react';
import {View, Text, StyleSheet , TextInput, Button, Alert} from 'react-native';

export const  AddTodo =  ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
       if(value.length > 0){
        onSubmit(value)
        setValue('')
       }
       else{
        Alert.alert('empty field')
       }

  }

  return(
    <View>
      <TextInput 
        style = {styles.input}
        onChangeText = {text =>{
          setValue(text)
        }}
        value = {value}
        placeholder = 'add your work title'
        autoCorrect={false}
        
      />
      <Button title = "add" onPress={pressHandler}/>
    </View>
    )
  
} 

const styles = StyleSheet.create({
   input:{
     borderStyle: 'solid',
     borderWidth: 2,
     borderColor: 'green',
     marginBottom:10,
     marginTop:10,
     fontSize:20,
     padding:10
     
   }
});   