import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [items, setItems] = useState([]); 

  const addOrSave = () => {
    if (text.trim() === '') return;

    if (editingId !== null) {
      setItems(
        items.map((item) =>
          item.id === editingId ? { ...item, text: text.trim() } : item
        )
      );
      setEditingId(null);
    } else {
      setItems([...items, { id: Date.now(), text: text.trim(), done: false }]);
    }
    setText(''); 
  };

  const toggleDone = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const startEdit = (item) => {
    setText(item.text);
    setEditingId(item.id);
  };

  const cancelEdit = () => {
  setEditingId(null);
  setText('');
  };
  
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    if (id === editingId) {
      setEditingId(null);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TO DO LIST</Text>

      <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Enter Item"
            placeholderTextColor="#ccc" 
            value={text}
            onChangeText={setText}
          />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.addButton} onPress={addOrSave}>
            <Text style={styles.addButtonText}>
              {editingId !== null ? 'SAVE' : 'ADD'}
            </Text>
          </TouchableOpacity>
        </View>
        {editingId !== null && (
          <TouchableOpacity style={styles.cancelButton} onPress={cancelEdit}>
            <Text style={styles.cancelButtonText}>CANCEL</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.empty}>No items yet. Add your first one!</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={[styles.checkbox, item.done && styles.checkboxDone]}
              onPress={() => toggleDone(item.id)}
            >
              {item.done && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>

            <Text style={[styles.itemText, item.done && styles.itemTextDone]}>
              {item.text}
            </Text>

            <TouchableOpacity onPress={() => startEdit(item)}>
              <Text style={styles.action}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={styles.action}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#128F55'
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 44,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    color: '#000',               
  },
  buttonWrapper: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  addButton: {
  backgroundColor: '#128F55',  
  paddingVertical: 12,
  paddingHorizontal: 18,
  borderRadius: 6,
},
addButtonText: {
  color: '#FFFF',         
  fontWeight: 'bold',
  fontSize: 15,
},
cancelButton: {
  backgroundColor: '#FFFF',
  paddingVertical: 12,
  paddingHorizontal: 14,
  borderRadius: 6,
  marginLeft: 8,
},
cancelButtonText: {
  color: '#128F55',        
  fontWeight: 'bold',
  fontSize: 15,
},
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 30,
    fontSize: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#128F55',
    borderRadius: 6,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: '#ffff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  checkboxDone: {
    borderColor: '#ffff',
  },
  checkmark: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffff',
  },
  itemTextDone: {
    textDecorationLine: 'line-through',
    color: '#A1E2C4',
  },
  action: {
    color: '#ffff',
    marginLeft: 12,
    fontSize: 14,
  },
});