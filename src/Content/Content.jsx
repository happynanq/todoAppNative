import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AddTodo } from './AddTodo/AddTodo'
import { Todos } from './Todos'

export const Content =()=>{
  const [todos, setTodos] = useState([
    {todo:"Доделать это ", id:0,isCompleted : false},
    {todo:"To clean ", id:1,isCompleted : false},
    {todo:"12 ", id:2,isCompleted : false},
  ])
  // [{todo:"some shit", id : 0, isCompleted : false}]
  const handleSetTodos = (todo)=>{
    const newTodo = {
      todo:todo,
      id:todos.length,
      isCompleted : false
    }
    const newTodos = [...todos, newTodo]  
    setTodos(newTodos)
  }
  const handleCleansing = (id)=>{
    const newTodos = [...todos.filter((e)=>e.id !== id)]
    setTodos(newTodos)
  }
  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <AddTodo handleSetTodos={handleSetTodos}/>
      </View>
      <Todos todos={todos} setTodos={setTodos} handleCleansing={handleCleansing}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})