import React from 'react';
import {Button, View} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const MyButton: React.FC<ButtonProps> = ({title, onPress}) => (
  <View>
    <Button title={title} onPress={onPress} />
  </View>
);

export default MyButton;
