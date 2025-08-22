import React from 'react';
import { View, Text, Image} from 'react-native';

import { styles } from './BatLogoStyle';


export function Batlogo() {
  return (
    <View>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image style={styles.logo}
        source={require('../../../assets/bat-logo.png')}/>
    </View>
  );
}