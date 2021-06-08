import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Todo } from './Todo'

export const Todos =({todos, handleCleansing})=>{
  return(
    <View style={style.container}>
      {todos.map(e=><Todo todo={e.todo} key={e.id} id={e.id} handleCleansing={handleCleansing}/>)}
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    width:"100%",
    
  }
})