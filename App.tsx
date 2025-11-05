/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Form from './components/Form';
import { RealmProvider } from '@realm/react';

function App() {

  return (
    <SafeAreaProvider>
      <RealmProvider>
      <Form />
      </RealmProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
