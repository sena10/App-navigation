import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/home';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Tela Inicial' }} // Defina o título desejado
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{ title: 'Voltar' }}
        />
        <Stack.Screen
          name="Page3"
          component={Page3}
          options={{ title: 'Voltar' }}
        />
        <Stack.Screen
          name="Page4"
          component={Page4}
          options={{ title: 'Voltar' }}
        />
        <Stack.Screen
          name="Page5"
          component={Page5}
          options={{ title: 'Voltar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
