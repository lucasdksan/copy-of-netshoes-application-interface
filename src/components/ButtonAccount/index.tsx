import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

interface ButtonAccountProps{
  name: string;
}

const ButtonAccount: React.FC<ButtonAccountProps> = ({name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonArea}>
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>{ name }</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="#adb5bd" />
        </RectButton>
      </View>
    </View>
  );
};

export default ButtonAccount;
