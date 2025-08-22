import React from "react";
import {Text,View} from "react-native"
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import { Batlogo } from "../../components/Batlogo/BatLogo";
import { BatTextImput } from "../../components/BatTextImput/BatTextImput";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Batlogo/>
            </View>
            <View style={styles.InputContainer}>
               
                <BatButton/>
            </View>
            <Text>Ola mundo</Text>

            <StatusBar style="light" />
        </View>
    )
}

