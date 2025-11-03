import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Image } from 'react-native';
import { AppHeaderProps } from '../const/AppHeader.types';

const AppHeader: React.FC<AppHeaderProps> = ({
    title = 'Blooming Report',
    onBack,
    showBack = true,
    style,
    titleStyle,
}) => {
    return (
        <View style={[styles.container, style]} accessibilityRole="header">
            {showBack && (
                <TouchableOpacity
                    onPress={onBack}
                    accessibilityLabel="Back"
                    accessibilityRole="button"
                    style={styles.backButton}
                >
                    <Image
                        source={require('../res/ArrowLeft.png')}
                        style={styles.backIcon}
                        accessibilityIgnoresInvertColors
                    />
                </TouchableOpacity>
            )}

            <View style={styles.textWrap}>
                <Text style={[styles.title, titleStyle]} numberOfLines={1}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 8,
        marginRight: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    textWrap: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Open Sans',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: -0.18,
        color: '#262626',
    },
});

export default AppHeader;