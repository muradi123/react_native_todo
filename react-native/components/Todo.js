import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Todo =  ({todo, onRemove}) => {
 const  longPressHandler = () =>{
   onRemove(todo.id)
 }
 
 return (
     <TouchableOpacity activeOpacity={0.7}
     onLongPress={longPressHandler}>
      <View style={styles.todo}>
        <Text style={styles.todoText}>{todo.title}</Text>
     </View>
     </TouchableOpacity>
    
 )
}


const styles = StyleSheet.create({
 todo:{
  backgroundColor:'green',
  padding:10,
  marginTop:5,
 },

 todoText:{
  color:'yellow',
  fontSize:16,
 }
});