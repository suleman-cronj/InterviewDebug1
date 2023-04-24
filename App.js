import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const ListItem = ({item}) => (
  <View style={styles.listItem}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([...items, text]);
    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something"
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity onPress={handleAddItem} style={styles.button}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: 'lightgray',
    padding: 16,
    marginVertical: 8,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;
