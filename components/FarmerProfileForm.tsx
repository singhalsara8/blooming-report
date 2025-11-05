import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { CONTACT_NUMBER_KEY, FarmerProfileFormProps, FULL_NAME_KEY, genderOptions, GENDER_KEY, stateOptions, STATE_KEY, villageOptions, VILLAGE_KEY, BLOCK_KEY, STREET_KEY, PLOT_KEY } from '../const/FarmerProfileForm.types';
import { Picker } from '@react-native-picker/picker';
import { useFormState } from '../hooks/useFormState';

const FarmerProfileForm: React.FC<FarmerProfileFormProps> = ({

}) => {
    const {
        handleFarmerProfileChange,
        fullName,
        showNameError,
        contactNumber,
        showContactError,
        gender,
        showGenderError,
        state,
        village,
        block,
        street,
        plot
    } = useFormState();

    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 120 }} >
            <View style={styles.container}>
                <Text style={styles.label}>1. Enter full name*</Text>
                <TextInput
                    placeholder="Enter name"
                    value={fullName}
                    onChangeText={(text: string) => handleFarmerProfileChange(FULL_NAME_KEY, text)}
                    style={[styles.textInput]}
                />
                {showNameError && <Text style={styles.errorText}>Please enter a valid name.</Text>}
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>2. Contact number*</Text>
                <TextInput
                    placeholder="Enter mobile number"
                    value={contactNumber}
                    onChangeText={(text) => handleFarmerProfileChange(CONTACT_NUMBER_KEY, text)}
                    keyboardType="numeric"
                    maxLength={10}
                    style={styles.textInput}
                />
                {showContactError && <Text style={styles.errorText}>Please enter a valid contact number.</Text>}
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>3. Select Gender*</Text>
                {genderOptions.map((option) => {
                    const selected = option.value === gender;
                    return (
                        <TouchableOpacity
                            key={option.value}
                            onPress={() => handleFarmerProfileChange(GENDER_KEY, option.value)}
                            activeOpacity={0.7}
                            style={styles.optionRow}
                        >
                            <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
                                {selected && <View style={styles.radioInner} />}
                            </View>

                            <Text style={styles.optionLabel}>{option.label}</Text>
                        </TouchableOpacity>
                    );
                })}
                {showGenderError && <Text style={styles.errorText}>Please select a gender.</Text>}
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>4. Location</Text>

                <Text style={[styles.label, styles.subLabel]}>Select State</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={state}
                        onValueChange={(value) => handleFarmerProfileChange(STATE_KEY, value)}
                        mode="dropdown"
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        <Picker.Item
                            label="Select state..."
                            value=""
                            enabled={false}
                            color="#999"
                        />
                        {stateOptions.map((opt, index) => (
                            <Picker.Item
                                key={index}
                                label={opt.label}
                                value={opt.value}
                                style={styles.pickerValue}
                            />
                        ))}
                    </Picker>
                </View>

                <Text style={[styles.label, styles.subLabel]}>Select Village</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={village}
                        onValueChange={(value) => handleFarmerProfileChange(VILLAGE_KEY, value)}
                        mode="dropdown"
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        <Picker.Item
                            label="Select village..."
                            value=""
                            enabled={false}
                            color="#999"
                        />
                        {villageOptions.map((opt, index) => (
                            <Picker.Item
                                key={index}
                                label={opt.label}
                                value={opt.value}
                                style={styles.pickerValue}
                            />
                        ))}
                    </Picker>
                </View>

                <Text style={[styles.label, styles.subLabel]}>Enter Block name</Text>
                <TextInput
                    placeholder="Enter block name"
                    value={block}
                    onChangeText={(value) => handleFarmerProfileChange(BLOCK_KEY, value)}
                    style={styles.textInput}
                />

                <Text style={[styles.label, styles.subLabel]}>Enter Street name/number</Text>
                <TextInput
                    placeholder="Enter street name/number"
                    value={street}
                    onChangeText={(value) => handleFarmerProfileChange(STREET_KEY, value)}
                    keyboardType="numeric"
                    maxLength={6}
                    style={styles.textInput}
                />

                <Text style={[styles.label, styles.subLabel]}>Enter Plot Number</Text>
                <TextInput
                    placeholder="03/03/2025"
                    value={plot}
                    onChangeText={(value) => handleFarmerProfileChange(PLOT_KEY, value)}
                    style={styles.textInput}
                />
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
    subLabel: {
        marginTop: 18,
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#CBCBCB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioOuterSelected: {
        borderColor: '#D4391A',
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#D4391A',
    },
    optionLabel: {
        marginLeft: 12,
        color: '#262626',
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
    },
    pickerContainer: {
        marginTop: 6,
        borderWidth: 0.5,
        borderColor: '#CBCBCB',
        borderRadius: 6,
        overflow: 'visible',
        backgroundColor: '#FFFFFF',
    },
    picker: {
        width: '100%',
    },
    pickerItem: {
        fontSize: 14,
    },
    pickerValue: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0
    },
    errorText: {
        marginTop: 10,
        color: '#ff6961',
        backgroundColor: 'transparent'
    },
});

export default FarmerProfileForm;
