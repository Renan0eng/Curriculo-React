import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
        <Title />
        <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5C29',
    alignItems: 'start',
    justifyContent: 'start',
    padding: 10,
  },
});
