import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'
import colors from '../assets/colors'
import Illustration from '../assets/illu-icon.svg'
import {LinearGradient} from 'expo-linear-gradient'

const VerifyScreen = () => {

    const [btnPressed, setBtnPressed] =  useState(false)

    const toggle_Btn = () => {
        setBtnPressed(!btnPressed)
        //mock api call
        setTimeout(() => setBtnPressed(false), 1000);
    }

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
                <TouchableOpacity  onPress={toggle_Btn} disabled={btnPressed}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                                    colors={['#FFBD56', '#FFAB28']} style={styles.verifyButton}>
                        {
                            btnPressed ? <ActivityIndicator color={colors.white} />
                                       : <Text style={styles.verifyText}>Verify</Text>
                        }
                    </LinearGradient>
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
    },
    linear_gradient: {
        width: '100%',
        height: '100%'
    }
})
export default VerifyScreen
