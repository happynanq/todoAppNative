import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export const Todo =({todo, id, handleCleansing})=>{
  const handlePress=()=>{
    handleCleansing(id)
  }
  return(
    <View style={style.container}>
      <Text style={style.text}>{todo}</Text>
      <Button
        onPress={handlePress}
        style={style.button} 
        title="X"
        
        color="#841584"
      />
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    width:"100%",
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    paddingTop:10
  },
  text:{},
  
})