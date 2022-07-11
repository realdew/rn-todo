import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '1번입니다.', done: true},
    {id: 2, text: '2번입니다.', done: false},
    {id: 3, text: '3번입니다.', done: true},
  ]);

  const onInsert = text => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    console.log('nextId: ', nextId);
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
    console.log('새로 추가됨', todo);
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo
    );
    setTodos(nextTodos);
    console.log('onToggle 호출됨 : ', id);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today} />
        {todos.length === 0 ? <Empty /> : <TodoList todos={todos} onToggle={onToggle} />}
        <AddTodo onInsert={onInsert} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
