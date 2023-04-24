import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const User = ({user}) => (
  <View style={styles.user}>
    <Text style={styles.name}>{user.name}</Text>
  </View>
);

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={users}
          renderItem={item => <User />}
          keyExtractor={user => user.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    backgroundColor: 'lightgray',
    padding: 16,
    marginVertical: 8,
    borderRadius: 4,
  },
  name: {
    fontSize: 16,
  },
});

export default App;
