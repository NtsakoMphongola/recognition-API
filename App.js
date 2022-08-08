import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SpeechtoText from './speechtoText';

export default function App() {
  return (
    <View style={styles.container}>
     
      <SpeechtoText />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4519',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
