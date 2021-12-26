import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appStyles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.globalStyles}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to testScreen"
        onPress={() => navigation.navigate('TestScreen')}
      />
    </View>
  );
};

export default HomeScreen;
