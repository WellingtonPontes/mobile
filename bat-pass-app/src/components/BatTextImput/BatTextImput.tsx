import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextImputStyle';

interface BatTextImputProps{
  pass:string
}

export function BatTextImput(props : BatTextImputProps) {
  return (
        <TextInput style={styles.inputer}

        placeholder= 'PASSWORD'
        value={props.pass}
        />
  );
}