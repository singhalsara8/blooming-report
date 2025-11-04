import React, { useState } from 'react';
import { FarmerDetails, FormContentProps } from '../const/FormContent.types';
import { StyleSheet, View } from 'react-native';
import FarmerProfileForm from './FarmerProfileForm';
import { useMMKVBoolean } from 'react-native-mmkv';
import LandDetailsForm from './LandDetailsForm';

const FormContent: React.FC<FormContentProps> = ({
    currentStep
}) => {
    return (
        <View style={styles.container}>
            {currentStep === 1 && <FarmerProfileForm />}
            {currentStep === 2 && <LandDetailsForm />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default FormContent;