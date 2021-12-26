import React from 'react';
import {Text, View} from 'react-native';

const PersonScreen = ({route}) => {

    const { params } = route;

  return (
    <View>
      <Text>{params.name}</Text>
    </View>
  );
};

export default PersonScreen;
