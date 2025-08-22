import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextImput } from '../BatTextImput/BatTextImput';
import generatePass from '../../services/passwordService';


import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass

        setPass(generateToken)
    }
    function handleCopyButton() {
        Clipboard.setStringAsync(pass)
    }
  return (
    <View >
         <BatTextImput pass={pass}
         
         />
       
        <Pressable style={styles.button}
        onPress={handleGenerateButton}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable style={styles.button}
        onPress={handleCopyButton}
        >
            <Text style={styles.text}>⚡COPY</Text>
        </Pressable>
       

    </View>
  );
}