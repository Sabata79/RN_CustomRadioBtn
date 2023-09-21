import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles/styles';
import Radiobutton from './components/Radiobutton';
import { useState } from 'react';

export default function App() {

  const [test, setTest] = useState('No radio button selected');

  const options = [
    {
      label: 'Test 1',
      value: 1,
    },
    {
      label: 'Test 2',
      value: 2,
    },
  ];

  return (
    <View style={styles.container}>
      <Radiobutton options={options} onPress={(value) => setTest(value)} />
      <Text style={styles.resultText}>Radiobutton value is</Text>
      <Text style={styles.resultText}>{test}</Text>
    </View>
  );
}
