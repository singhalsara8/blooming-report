import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, ViewStyle, TextStyle } from 'react-native';
import { FormHeaderProps, formLabels } from '../const/FormHeader.types';

const FormHeader: React.FC<FormHeaderProps> = ({ totalSteps, currentStep }) => {

    const renderStep = (index: number) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (<React.Fragment key={`step-${stepNumber}`}>
            <View style={styles.stepWrap}>
                <View style={[styles.circle, isCompleted && styles.circleCompleted, isActive && styles.circleActive]}>
                </View>
                <Text
                    style={[
                        styles.stepNumber
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {String(stepNumber)}
                </Text>
            </View>

            {stepNumber < totalSteps && (
                <View
                    style={[
                        styles.connector,
                        stepNumber < currentStep ? styles.connectorCompleted : styles.connectorPending,
                    ]}
                />
            )}
        </React.Fragment>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.indicatorContainer} accessibilityRole="progressbar" accessibilityValue={{ now: currentStep, min: 1, max: totalSteps }}>
                    <View style={styles.stepsRow}> {Array.from({ length: totalSteps }).map((_, i) => renderStep(i))} </View>
                </View>
            </View>

            <Text style={styles.stepText} numberOfLines={2} ellipsizeMode="tail">
                {formLabels[currentStep - 1]}
            </Text>
        </View >
    );
};

const PRIMARY = '#D4391A';
const INACTIVE = '#CBCBCB';
const TEXT = '#262626';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 12,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomColor: '#CBCBCB',
        borderLeftColor: '#CBCBCB',
        borderRightColor: '#CBCBCB',
        borderBottomWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        marginBottom: 12,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    stepsRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    stepWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 16,
        height: 16,
        borderRadius: 16,
        backgroundColor: INACTIVE,
        borderWidth: 1.5,
        borderColor: INACTIVE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleActive: {
        backgroundColor: PRIMARY,
        borderColor: PRIMARY,
    },
    circleCompleted: {
        backgroundColor: PRIMARY,
        borderColor: PRIMARY,
    },
    circleText: {
        fontFamily: 'Open Sans',
        fontWeight: '600',
        fontSize: 14,
        color: INACTIVE,
    },
    circleTextActive: {
        color: '#fff',
    },
    stepNumber: {
        marginTop: 6,
        fontFamily: 'Open Sans',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'center',
        color: TEXT,
    },
    stepNumberActive: {
        color: TEXT,
    },
    stepLabel: {
        marginTop: 6,
        fontFamily: 'Open Sans',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'center',
        color: TEXT,
    },
    connector: {
        height: 2,
        flex: 1,
        marginTop: 7,
        marginHorizontal: 0,
        borderRadius: 1,
    },
    connectorCompleted: {
        backgroundColor: PRIMARY,
    },
    connectorPending: {
        backgroundColor: INACTIVE,
    },
    stepText: {
        marginTop: 15,
        fontFamily: 'Open Sans',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: -0.18,
        textAlign: 'center',
        color: TEXT,
        alignSelf: 'center',
    },
});


export default FormHeader;
