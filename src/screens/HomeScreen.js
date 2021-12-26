import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appStyles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.globalStyles}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to testScreen"
        onPress={() => navigation.navigate('TestScreen')}
      />

      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() =>
          navigation.navigate('PersonScreen', {
            name: 'Frank',
          })
        }>
        <Text>Go to Person with TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
