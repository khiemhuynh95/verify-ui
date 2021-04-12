import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'
import Illustration from '../assets/illu-icon.svg'

const VerifyScreen = () => {
    return (
        <View style={styles.root}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Check your email</Text>
                <Text style={styles.text}>We've sent the code to the email on your device</Text>
            </View>
            <View style={styles.imageContainer}>
                <Illustration></Illustration>
            </View>
            <View style={styles.verifyButtonContainer}>
                <TouchableOpacity style={styles.verifyButton}>
                        <Text style={styles.verifyText}>Verify</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    root: {
        
        height: '100%',
        // backgroundColor: 'red'
    },
    textWrapper: {
        marginHorizontal: 95
    },
    title: {
        marginTop: 80,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center',
        letterSpacing: 0.03,
        color: colors.text.dark
    },
    text: {
        marginTop: 16,
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: 0.02,
        color: colors.text.dark
    },
    imageContainer: {
        marginTop: 40,
         alignSelf: 'center'
    },

    verifyText: {
        color: colors.white,
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    verifyButtonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 35
    },
    verifyButton: {
        
        marginHorizontal: 24,
        backgroundColor: colors.yellow,
        paddingVertical: 17,
        borderRadius: 8,
        alignItems: 'center',
    }
})
export default VerifyScreen
