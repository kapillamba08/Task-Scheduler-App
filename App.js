import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalInput from './Components/GlobalInput';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        {
          title: newTodo,
          user: 'Kapil Lamba',
        },
      ]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <GlobalInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />
        {/* You can also use Pressable instead of TouchableOpacity */}
        <ScrollView style={{ width: '100%' }}>
          <View style={styles.todoView}>
            {todos.map((item, index) => (
              <View key={index} style={styles.todoItem}>
                <Text style={styles.todoText}>
                  {item.title} - {item.user}
                </Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteTodo(index)}
                >
                  <Text style={{ color: 'white' }}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  todoView: {
    flexDirection: 'column',
    borderTopWidth: 2,
    borderColor: 'black',
    padding: 20,
    gap: 15,
  },
  todoItem: {
    backgroundColor: '#E6E6FA',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
});
