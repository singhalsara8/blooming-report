import React from 'react';
import { FormProps } from '../const/Form.types';
import AppHeader from './AppHeader';
import FormButton from './FormButton';
import FormContent from './FormContent';
import FormHeader from './FormHeader';
import { StyleSheet, View } from 'react-native';
import { useMMKVNumber } from 'react-native-mmkv';

const Form: React.FC<FormProps> = ({

}) => {
    const [currentStep, setCurrentStep] = useMMKVNumber("currentStep");
    React.useEffect(() => {
        setCurrentStep(2);
    }, []);
    return (
        <View style={styles.container}>
            <AppHeader />
            <FormHeader totalSteps={5} currentStep={Number(currentStep)} />
            <FormContent />
            <FormButton buttonLabel="Submit" loading={false} onPress={() => { } } />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});

export default Form;