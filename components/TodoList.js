import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle}) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({item}) => {
        return (
          // <View>
          //   <Text>{item.text}</Text>
          // </View>
          <TodoItem
            id={item.id}
            text={item.text}
            done={item.done}
            onToggle={onToggle}
          />
        );
      }}
      keyExtractor={itemm => itemm.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default TodoList;
