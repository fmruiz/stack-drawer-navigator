import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appStyles';

const ConfigScreen = ({navigation}) => {
  return (
    <View style={styles.globalStyles}>
      <Text>ConfigScreen</Text>

      <Button title="Go to TestScreen" onPress={() => navigation.pop()} />
      <Button title="Go to HomeScreen" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default ConfigScreen;
