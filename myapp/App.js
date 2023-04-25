import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello World! from Nayan Kumar</Text>
      </View>
      <View>
        <Text>Hello World! from Nayan Kumar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
