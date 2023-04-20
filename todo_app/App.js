import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
  },
  Ai: {
    padding: 10,
    color: 'black',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default function App() {
  const [state, setState] = useState([]);
  const [sent, setStatement] = useState({
    email: '',
    password: false,
  });

  const handleEmail = (e) => {
    // console.log(e);
    setStatement({ ...sent, email: e });
  };
  const handlePassword = (e) => {
    // console.log(e);
    setStatement({ ...sent, password: e });
  };
  const handleClick = () => {
    console.log(sent, state);
    setState([...state, sent]);
  };
  const handleFilter = (id) => {
    let x = state?.filter((el, index) => {
      return id !== index;
    });
    setState(x);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Nayan Kumar</Text>
        <SafeAreaView style={styles.input}>
          <Text style={{ marginTop: 50 }}>User Name</Text>
          <TextInput
            value={sent.title}
            style={styles.Ai}
            onChangeText={handleEmail}
          />
          <Text style={{ marginTop: 50 }}>password</Text>
          <TextInput
            value={sent.title}
            style={styles.Ai}
            onChangeText={handlePassword}
          />
          <Pressable
            style={{
              borderWidth: 1,
              width: 120,
              borderRadius: 10,
              padding: 10,
              margin: 'auto',
            }}
            onPress={handleClick}
          >
            <Text>I'm pressable!</Text>
          </Pressable>
          <View>
            {state?.map((el, index) => {
              return (
                <View key={index} style={{ flexDirection: 'row', gap: 10 }}>
                  <Text>{el.email}</Text>
                  <Text>{el.password}</Text>
                  <Button title="delete" onPress={() => handleFilter(index)} />
                </View>
              );
            })}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
