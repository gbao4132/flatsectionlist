import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import flatlist from './components/flatlist';
import sectionlistt from './components/sectionlistt';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatList">
        <Stack.Screen name="FlatList" component={flatlist} options={{ title: 'Danh sách sản phẩm (FlatList)' }} />
        <Stack.Screen name="SectionList" component={sectionlistt} options={{ title: 'Danh sách nhóm (SectionList)' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
