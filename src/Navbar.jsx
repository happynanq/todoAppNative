import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Navbar =()=>{
  return(
    <View style={style.topBar}>
      <Text>Todo App</Text>
    </View>
  )
}

const style = StyleSheet.create({
  topBar:{
    height:70,
    width:"100%",
    backgroundColor:"#FF5733",
    alignItems:"center",
    justifyContent:"flex-end",
    paddingBottom:10
  },
  text:{

  }
})