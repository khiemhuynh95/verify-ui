import React,{useState, useEffect, useCallback} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'
import colors from '../assets/colors'
import Illustration from '../assets/illu-icon.svg'
import {LinearGradient} from 'expo-linear-gradient'
import AnimatedCodeField from './code_field/AnimatedCodeField'
import CountDown from 'react-native-countdown-component'

const VerifyScreen = () => {
    // 2 issues: Resend btn needs to clear comfirmation code and reset timer countdown

    const [btnPressed, setBtnPressed] =  useState(false)
    
    const [seconds, setSeconds] = useState(60);
  

    const toggle_Btn = () => {
        setBtnPressed(!btnPressed)
        //mock api call
        setTimeout(() => {
            setBtnPressed(false)
            //alert
        }, 1000);
    }

    const handle_resendBtn = () => {
        setSeconds(60)
    }

    return (
        <View style={styles.root}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Check your email</Text>
                <Text style={styles.text}>We've sent the code to the email on your device</Text>
            </View>
            <View style={styles.imageContainer}>
                <Illustration/>
            </View>
            <View style={styles.verifyButtonContainer}>
                <TouchableOpacity style={btnPressed && {opacity: 0.5}} onPress={toggle_Btn} disabled={btnPressed}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                                    colors={['#FFBD56', '#FFAB28']} style={styles.verifyButton}>
                        {
                            btnPressed ? <ActivityIndicator style={styles.indicator} color={colors.white}/>
                                       : <Text style={styles.verifyText}>Verify</Text>
                        }
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <AnimatedCodeField />

            <View style={styles.line}>
                <Text style={{color: colors.text.light,fontSize: 12, lineHeight: 14, letterSpacing: 0.02, marginRight: 23}}>
                    Code expires in: 
                </Text>
                <CountDown
                        size={14}
                        until={seconds}
                        
                        onFinish={() => alert('Code Expired!')}
                        digitStyle={{marginHorizontal: -4}}
                        digitTxtStyle={styles.timer}
                        style={{marginHorizontal: -10, right: 12}}
                        separatorStyle={styles.timer}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: null, s: null}}
                        showSeparator
                />
                
            </View>
            <View style={[styles.line,{marginTop: 10}]}>
                <Text style={{color: colors.text.light,fontSize: 12, lineHeight: 14, marginRight: 4, letterSpacing: 0.02}}>
                    Didn’t receive code?
                </Text>
                <TouchableOpacity onPress={handle_resendBtn}>
                    <Text style={styles.resendText}>Resend Code</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    root: {
        height: '100%',
    },
    textWrapper: {
        marginHorizontal: 90
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
        color: colors.text.dark,
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
        position: 'absolute'
        
    },
    verifyButtonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 35
    },
    verifyButton: {
        
        marginHorizontal: 24,
        backgroundColor: colors.yellow,
        
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 26,
    },
    linear_gradient: {
        width: '100%',
        height: '100%'
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timer: {
        fontSize: 12, 
        lineHeight: 14,
        color: colors.yellow,
        letterSpacing: 0.02,
        
    },
    timerWrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    resendText: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 14,
        textAlign: 'center',
        letterSpacing: 0.02,
        color: colors.yellow
    },
    indicator: {
        position: 'absolute'
    }
    
})
export default VerifyScreen
