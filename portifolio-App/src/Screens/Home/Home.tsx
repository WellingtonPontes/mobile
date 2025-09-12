import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { skills } from '../skills/Skills';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { styles } from '../Home/HomeStyle';

// Definir tipos TypeScript para as rotas
type RootStackParamList = {
  Home: undefined;
  Skills: undefined;
};

// Tipo para a navegação
type HomeScreenNavigationProp = {
  navigate: (route: keyof RootStackParamList) => void;
};

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Não foi possível abrir a URL", err));
  };

  const linkedinUrl = "https://www.linkedin.com/in/wellington-pontes-556402176";
  const githubUrl = "https://github.com/WellingtonPontes";

  return (
    <View style={styles.container}>
      
          <Image
            style={styles.img}
            source={require('../../../assets/perfil.jpg')}
          />

      <Text style={styles.nome}>WELLINGTON FRANCISCO SOUZA PONTES</Text>
           {/* Botão LinkedIn */}
      <TouchableOpacity
        style={[styles.button, styles.linkedinButton]}
        onPress={() => handlePress(linkedinUrl)}
      >
        {/* Usando o ícone 'linkedin' do MaterialCommunityIcons */}
        <Icon name="linkedin" size={24} color="#FFFFFF" style={styles.icon} />
        <Text style={styles.buttonText}>LinkedIn</Text>
      </TouchableOpacity>

      {/* Botão GitHub */}
      <TouchableOpacity
        style={[styles.button, styles.githubButton]}
        onPress={() => handlePress(githubUrl)}
      >
        {/* Usando o ícone 'github' do MaterialCommunityIcons */}
        <Icon name="github" size={24} color="#FFFFFF" style={styles.icon} />
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>

      {/* Botão Portfólio */}
      <TouchableOpacity
        style={[styles.button, styles.portfolioButton]}
        onPress={() => navigation.navigate('Skills')}
      >
        <Icon name="application-brackets-outline" size={24} color="#FFFFFF" style={styles.icon} />
        <Text style={styles.buttonText}>Habilidades</Text></TouchableOpacity>

    </View>
  );
}

// Configuração do Navigator
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions:{
    headerStyle:{
      backgroundColor: '#73a3cf',
    }
  },
  screens: {
    Home: HomeScreen,
    Skills: skills, // Certifique-se que 'skills' é um componente React válido
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}