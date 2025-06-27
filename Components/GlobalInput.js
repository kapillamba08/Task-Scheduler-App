import React from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function GlobalInput({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <View style={styles.container}>
    <View style={styles.innerView}>
      <TextInput
        style={styles.inputElement}
        placeholder="Add ToDo"
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 35,
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  inputElement: {
    borderColor: 'black',
    borderWidth: 2,
    width: '75%',
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  buttonStyle: {
    backgroundColor: '#D5D6EA',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
