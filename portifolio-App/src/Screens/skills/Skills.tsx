import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './SkillsStyle'

export function skills() {
  return (
 <View style={styles.container}>
      
          <Image
            style={styles.img}
            source={require('../../../assets/perfil.jpg')}
          />

      <Text style={styles.nome}>Minhas Habilidades</Text>
          
           {/* Botão language-python */}
      <TouchableOpacity
        style={[styles.button, styles.linkedinButton]}
      >
        <Text style={styles.buttonText}>Python</Text>
        <Icon name="language-python" size={30} color="#FFFFFF" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
      </TouchableOpacity>

      {/* Botão GitHub */}
      <TouchableOpacity
        style={[styles.button, styles.linkedinButton]}
      >
        <Text style={styles.buttonText}>JAVA</Text>
        <Icon name="language-java" size={30} color="#FFFFFF" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
      </TouchableOpacity>

      {/* Botão Portfólio */}
      <TouchableOpacity
        style={[styles.button, styles.linkedinButton]}
      >
        <Text style={styles.buttonText}>JAVASCRIPT</Text>
        <Icon name="language-javascript" size={30} color="#FFFFFF" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.linkedinButton]}
      >
        <Text style={styles.buttonText}>React Native</Text>
        <Icon name="react" size={30} color="#FFFFFF" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.linkedinButton]}
      >
        <Text style={styles.buttonText}>PHP</Text>
        <Icon name="language-php" size={30} color="#FFFFFF" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.linkedinButton]}
      >
        <Text style={styles.buttonText}>HTML</Text>
        <Icon name="language-html5" size={30} color="#FFFFFF" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
        <Icon name="star" size={30} color="#fbff00ff" style={styles.icon} />
      </TouchableOpacity>

    </View>
  );
}