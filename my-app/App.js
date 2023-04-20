import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Todo from './Components/Todo';

export default function App() {
  const [state, setState] = useState(0);
  const handleChange = () => {
    setState((prev) => prev + 1);
  };
  const handleClick = () => {
    setState((sub) => sub - 1);
  };
  return (
    <View style={styles.container}>
      <Todo />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello World</Text>
      <Text>First Mobile React-Native App</Text>
      <Text>NAYAN KUMAR</Text>
      <Text>{state}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button disabled={state === 10} title="ADD" onPress={handleChange} />
        <Button disabled={state === 0} title="SUBTRACT" onPress={handleClick} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: '10px',
    border: '1px solid black',
  },
});
