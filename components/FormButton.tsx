import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    View,
} from 'react-native';
import { FormButtonProps } from '../const/FormButton.types';

const FormButton: React.FC<FormButtonProps> = ({
    buttonLabel,
    onPress,
    disabled = false,
    loading = false,
}) => {
    const isDisabled = disabled || loading;

    return (
        <View style={styles.buttonContainer} pointerEvents="box-none">
            <TouchableOpacity
                onPress={isDisabled ? undefined : onPress}
                disabled={isDisabled}
                style={[styles.button, isDisabled && styles.buttonDisabled]}
                accessibilityRole="button"
                accessibilityState={{ disabled: isDisabled }}
                accessibilityLabel={buttonLabel}
            >
                <View style={styles.content}>
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonLabel}>
                            {buttonLabel}
                        </Text>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 16,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#F5F5F5',
    },
    button: {
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#D4391A',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 4,
    },
    buttonDisabled: {
        backgroundColor: '#BDBDBD',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'Open Sans',
        lineHeight: 24,
        letterSpacing: -1,
        textAlign: 'center',
    },
});

export default FormButton;