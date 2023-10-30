import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, FlatList, StyleSheet, Alert } from 'react-native';

const Home = ({ navigation }) => {
  const options = [
    { id: 1, title: 'Casa', image: 'https://img.icons8.com/color/70/000000/cottage.png' },
    { id: 1, title: 'Pessoa', image: 'https://img.icons8.com/color/70/000000/administrator-male.png' },
    { id: 2, title: 'Curtidas', image: 'https://img.icons8.com/color/70/000000/filled-like.png' },
    { id: 3, title: 'Curti', image: 'https://img.icons8.com/color/70/000000/facebook-like.png' },
    { id: 4, title: 'Desligar', image: 'https://img.icons8.com/color/70/000000/shutdown.png' },
    { id: 5, title: 'Carros', image: 'https://img.icons8.com/color/70/000000/traffic-jam.png' },
    { id: 6, title: 'Video Gamer', image: 'https://img.icons8.com/dusk/70/000000/visual-game-boy.png' },
    { id: 8, title: 'Fazenda', image: 'https://img.icons8.com/flat_round/70/000000/cow.png' },
    { id: 9, title: 'Programação', image: 'https://img.icons8.com/color/70/000000/coworking.png' },
    { id: 9, title: 'Configurações', image: 'https://img.icons8.com/nolan/70/000000/job.png' },
  ];

  const clickEventListener = () => {
    navigation.navigate('Page3');
  };



  return (
   

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={options}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity style={styles.card} onPress={() => clickEventListener(item)}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
              </TouchableOpacity>

              <View style={styles.cardHeader}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#f6f6f6',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#f6f6f6',
  },
  listContainer: {
    alignItems: 'center',
  },
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
});

export default Home;
