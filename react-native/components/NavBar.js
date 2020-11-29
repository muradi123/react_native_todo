import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NavBar = ({title}) => {
return(
 <View style={styles.navbar}>
     <Text style={styles.text}>{title}</Text>
 </View>
)
}


const styles = StyleSheet.create({
 navbar: {
  height:80,
  backgroundColor:'blue',
  alignItems:'center',
  justifyContent:"center",
  paddingTop:20
 },

 text: {
  color:'red',
  fontSize:20,
  letterSpacing:1.5
 },
})