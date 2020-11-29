import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {NavBar} from './components/NavBar';
import {AddTodo} from './components/AddTodo';
import {Todo} from './components/Todo';

export default function App() {
  const [todos, setTodos ]= useState([]);

  const addTodos = (title) => {
    const newTodo = {
      id:Date.now().toString(),
      title:title
    };

    setTodos((prevTodos) =>{
      return [...prevTodos, newTodo]
    })
   
}

  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo =>{
     return todo.id !== id;
    }))
}

  return (
  <View style={styles.container}>
     <NavBar title="todo app"/>  
      <View style={styles.todo}>
         <AddTodo onSubmit={addTodos}/>
         <FlatList
           keyExtractor={item => item.id}
           data={todos}
           renderItem={({item}) =>{
           return <Todo todo={item}  onRemove={removeTodo}/>
           }}
         />
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  },

  todo: {
    marginHorizontal:20,
    marginVertical:'2%'
  }
  
});
