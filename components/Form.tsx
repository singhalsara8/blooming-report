import React from 'react';
import { FormProps } from '../const/Form.types';
import AppHeader from './AppHeader';
import FormButton from './FormButton';
import FormContent from './FormContent';
import FormHeader from './FormHeader';
import { StyleSheet, View } from 'react-native';
import { useFormState } from '../hooks/useFormState';

const Form: React.FC<FormProps> = () => {
    const {
        currentStep,
        setCurrentStep,
        isFormInvalid,
        onFormButtonClick,
        onBackButtonClick
    } = useFormState();
    React.useEffect(() => {
        if (!currentStep) {
            setCurrentStep(1);
        }
    }, []);
    return (
        <View style={styles.container}>
            <AppHeader onBack={onBackButtonClick}/>
            <FormHeader currentStep={currentStep ?? 0} />
            <FormContent currentStep={currentStep ?? 0}/>
            <FormButton buttonLabel="Submit" loading={false} onPress={onFormButtonClick} disabled={isFormInvalid} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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