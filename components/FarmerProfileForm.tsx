import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useMMKVBoolean, useMMKVString } from 'react-native-mmkv';
import { FULL_NAME_KEY, NAME_ERROR_KEY, CONTACT_NUMBER_KEY, CONTACT_ERROR_KEY, FarmerProfileFormProps } from '../const/FarmerProfileForm.types';

const FarmerProfileForm: React.FC<FarmerProfileFormProps> = ({
    isContentInvalid = false,
    setIsContentInvalid
}) => {
    const [fullName, setFullName] = useMMKVString(FULL_NAME_KEY);
    const [nameError, setNameError] = useMMKVBoolean(NAME_ERROR_KEY);

    const [contactNumber, setContactNumber] = useMMKVString(CONTACT_NUMBER_KEY);
    const [contactError, setContactError] = useMMKVBoolean(CONTACT_ERROR_KEY);

    const handleChange = React.useCallback((field: string, newValue: string) => {
        const trimmedValue = newValue.trim();
        switch (field) {
            case FULL_NAME_KEY:
                setFullName(trimmedValue);
                const isNameInvalid = trimmedValue === "";
                setNameError(isNameInvalid);
                setIsContentInvalid(isContentInvalid || isNameInvalid);
                break;
            case CONTACT_NUMBER_KEY:
                setContactNumber(trimmedValue);
                const tenDigitRegex: RegExp = /^\d{10}$/;
                const isNumberInvalid = tenDigitRegex.test(trimmedValue);
                setContactError(isNumberInvalid);
                setIsContentInvalid(isContentInvalid || isNumberInvalid);
                break;
        }
    }, [isContentInvalid]);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>1. Enter full name*</Text>
                <TextInput
                    placeholder="Enter name"
                    value={fullName}
                    onChangeText={(text: string) => handleChange(FULL_NAME_KEY, text)}
                    style={[styles.textInput]}
                />
                {nameError && <Text style={styles.errorText}>Please enter a valid name.</Text>}
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>2. Contact number*</Text>
                <TextInput
                    placeholder="Enter mobile number"
                    value={contactNumber}
                    onChangeText={(text) => handleChange(CONTACT_NUMBER_KEY, text)}
                    keyboardType="numeric"
                    maxLength={10}
                    style={styles.textInput}
                />
                {contactError && <Text style={styles.errorText}>Please enter a valid contact number.</Text>}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderColor: '#CBCBCB',
        borderWidth: 0.5,
    },
    textInput: {
        paddingVertical: 19,
        paddingHorizontal: 16,
        marginTop: 6,
        backgroundColor: '#FFFFFF',
        borderColor: '#CBCBCB',
        borderRadius: 6,
        borderWidth: 0.5,
    },
    label: {
        color: '#262626',
        letterSpacing: 0,
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 18,
        marginBottom: 6
    },
    errorText: {
        marginTop: 10,
        color: '#ff6961',
        backgroundColor: 'transparent'
    },
});

export default FarmerProfileForm;
