import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'; // Certifique-se de importar o StyleSheet desta forma

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Página Inicial</Text>
      <Button title="Próxima Página" onPress={() => navigation.navigate('Page2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;
