import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appStyles';

const TestScreen = () => {
  // navigation hook
  const navigation = useNavigation();

  // secondary effects
  useEffect(() => {
    navigation.setOptions({
      title: 'Test',
    });
  }, []);

  return (
    <View style={styles.globalStyles}>
      <Text>TestScreen</Text>
      <Button
        title="Go to config"
        onPress={() => navigation.navigate('ConfigScreen')}
      />
    </View>
  );
};

export default TestScreen;
