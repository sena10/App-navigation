// Página 1 (Home.js)
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    
       <View style={styles.container}>
      <Text style={styles.headerText}>LOJASONLINE</Text>
      <Text></Text>
      <Text style={styles.description}>VOLTE SEMPRE</Text>
      <Text style={styles.description}>OBRIGADO! COMPRA COM SUCESSO</Text>
   

    </View>
 )};
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#f6f6f6',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  invoiceContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  invoiceHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  description: {
    textAlign: 'center',
    marginTop: 50,
    color: 'blue',
    borderColor: 'green',
    fontWeight: 'bold',
    
    



  },
});
export default Home;
