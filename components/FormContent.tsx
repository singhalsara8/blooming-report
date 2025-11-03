import React, { useState } from 'react';
import { FarmerDetails, FormContentProps } from '../const/FormContent.types';
import { StyleSheet, View } from 'react-native';
import FarmerProfileForm from './FarmerProfileForm';
import { useMMKVBoolean } from 'react-native-mmkv';

const FormContent: React.FC<FormContentProps> = ({

}) => {
    const [isContentInvalid, setIsContentInvalid] = useMMKVBoolean("isFormContentInvalid");
    return (
        <View style={styles.container}>
            <FarmerProfileForm isContentInvalid={isContentInvalid} setIsContentInvalid={setIsContentInvalid} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default FormContent;