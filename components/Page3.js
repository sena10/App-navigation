import { Center } from 'native-base';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Page3 = ({ navigation }) => {
  // Dados do Invoice
  const invoiceData = {
    invoiceNumber: '*****',
    invoiceDate: '*****',
    dueDate: '*****',
    amountDue: '*****',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Confira Seus Dados</Text>
  
      {/* Invoice */}
      <View style={styles.invoiceContainer}>
        <Text style={styles.invoiceHeader}>Endereço</Text>
        <Text style={styles.label}>NUMERO DA IDENTIFICAÇÃO DO PEDIDO</Text>
        <Text style={styles.value}>{invoiceData.invoiceNumber}</Text>
        <Text style={styles.label}>CEP</Text>
        <Text style={styles.value}>{invoiceData.invoiceDate}</Text>
        <Text style={styles.label}>Estado</Text>
        <Text style={styles.value}>{invoiceData.dueDate}</Text>
        <Text style={styles.label}>Capital</Text>
        <Text style={styles.value}>{invoiceData.amountDue}</Text>
        <Text style={styles.label}>Número da casa</Text>
        <Text style={styles.value}>{invoiceData.amountDue}</Text>
        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.value}>{invoiceData.amountDue}</Text>
        
        <Button
          style={styles.button}
          title="COMPARTILHAR"
          onPress={() => console.log('Share')}
        />
        <Button
          style={styles.button}
          title="SALVAR"
          onPress={() => console.log('Save')}
        />
         <Button
        title="AVANÇAR"
        onPress={() => navigation.navigate('Page4')}
        color="#3498db" // Cor do botão
      />
      </View>
    </View>
  );
};

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
});

export default Page3;
