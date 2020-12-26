import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

interface ButtonHomeProps{
  name: string;
}

const ButtonHome: React.FC<ButtonHomeProps> = ({ name, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonS}>
        <RectButton style={styles.button}>
          {children}
        </RectButton>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default ButtonHome;
