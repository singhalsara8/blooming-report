import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { LandUnitDetails, LandHoldingOptions } from '../const/LandDetailsForm.types';
import { Picker } from '@react-native-picker/picker';

const LandDetailsForm: React.FC = () => {
    const [areaUnit, setAreaUnit] = React.useState<string>('sq_m');
    const [plantationArea, setPlantationArea] = React.useState<string>('');
    const [landHolding, setLandHolding] = React.useState<string | null>(null);

    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: 120 }} >

            <View style={styles.container}>
                <Text style={styles.label}>Select unit for Area*</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={areaUnit}
                        onValueChange={(v) => setAreaUnit(String(v))}
                        mode="dropdown"
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        {LandUnitDetails.map((value, index) => (
                            <Picker.Item key={index} label={value} value={value} style={styles.pickerValue} />
                        ))}
                    </Picker>
                </View>
            </View>

            {/* 
            <View>
                <Text style={styles.label}>Area of plantation*</Text> */}
            {/* <TextInput
                    placeholder="Enter area of Plantation" */}
            {/* //     value={fullName}
                //     onChangeText={(text: string) => handleFarmerProfileChange(FULL_NAME_KEY, text)}
                //     style={[styles.textInput]}
                 /> */}
            {/* // {showNameError && <Text style={styles.errorText}>Please enter a valid name.</Text>} */}
            {/* <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={plantationArea}
                        onValueChange={(v) => setPlantationArea(String(v))}
                        mode="dropdown"
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        {plantationAreaOptions.map((o) => (
                            <Picker.Item key={o.value} label={o.label} value={o.value} />
                        ))}
                    </Picker>
                </View> */}
            {/* </View> */}

            <View style={styles.container}>
                <Text style={[styles.label, { marginTop: 12 }]}>Land Holding</Text>
                {LandHoldingOptions.map((option) => {
                    const selected = option.value === landHolding
                    return (
                        <TouchableOpacity
                            key={option.value}
                            onPress={() => setLandHolding(option.value)}
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
            </View>
        </ScrollView>
    );
};

const PRIMARY = '#D4391A';
const INACTIVE = '#CBCBCB';
const TEXT = '#262626';

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
    label: {
        color: '#262626',
        letterSpacing: 0,
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 18,
        marginBottom: 6
    },

    /* picker */

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

    /* radio */
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
        borderColor: INACTIVE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioOuterSelected: {
        borderColor: PRIMARY,
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: PRIMARY,
    },
    optionLabel: {
        marginLeft: 12,
        color: TEXT,
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
    },
});

export default LandDetailsForm;