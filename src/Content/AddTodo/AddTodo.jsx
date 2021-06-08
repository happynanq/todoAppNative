import React, { useState } from 'react'
import {  TextInput, View, StyleSheet, Button, Keyboard } from 'react-native'

export const AddTodo =({handleSetTodos})=>{
  const [text, setText] = useState('')
  const handleSubmit=()=>{
    if(!text){return }
    handleSetTodos(text)
    setText("")
    Keyboard.dismiss()
  }
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.tInpit}
        placeholder="Type Todo"
        onChangeText={t=>setText(t)}
        onSubmitEditing={handleSubmit}
        value={text}
      />
      
      <Button
        title="Add todo"
        onPress={handleSubmit}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    // flex:1,
    width:"100%",
    flexDirection:'row',
    // backgroundColor:"red",
    justifyContent:"space-between",

  },
  tInpit:{
    // width:"30%"
  }
})