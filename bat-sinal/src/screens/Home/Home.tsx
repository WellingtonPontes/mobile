import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput,  SafeAreaView, Pressable } from 'react-native';

import { styles } from '../Home/style';


export function Home() {
    const [condicao, setCondicao] = useState(true);
    const [texto, setTexto] = useState('');

    // O conteúdo que será exibido na tela
    const conteudoExibido = condicao ? (
        <SafeAreaView style={styles.containerLogo}>
       
            <Text style={styles.texto}>Pedir Ajuda</Text>
            <TouchableOpacity onPress={() => setCondicao(false)}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/batLogo.png')}
                />
            </TouchableOpacity>
        </SafeAreaView>
    ) : (
        <SafeAreaView style={styles.containerForms}>
        <ScrollView contentContainerStyle={styles.containerFormsConteudo}>
        <Text style={styles.label} >Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome completo'
        />
        <Text style={styles.label} >Email</Text>
        <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address" 
        autoCapitalize="none"
      />
        <Text style={styles.label}>Discricão</Text>
      <TextInput
          editable
          placeholder='Descreva oque voce precisa de ajuda'
          multiline={true}
          numberOfLines={4}
          maxLength={400}
          onChangeText={setTexto}
          style={[styles.input,styles.textarea ]}
        />
    
    <Pressable 
    style={styles.botao}
    onPress={() => setCondicao(true)}>
    <Text>Pedir ajuda</Text>
    </Pressable>

        </ScrollView>
        </SafeAreaView>
    );

    return (
        <>
            {conteudoExibido}
        </>
    );
}