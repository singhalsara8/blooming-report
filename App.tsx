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
import { FarmerProfileSchema } from './db/schemas/FarmerProfileSchema';
import { LandDetailsSchema } from './db/schemas/LandDetailsSchema';

function App() {

  return (
    <SafeAreaProvider>
      <RealmProvider schema={[FarmerProfileSchema, LandDetailsSchema]} schemaVersion={4} >
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
