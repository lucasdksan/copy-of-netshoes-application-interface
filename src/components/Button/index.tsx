import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, Image, ImageSourcePropType } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

interface ButtonProps{
  img: ImageSourcePropType;
  name: string;
}

const Button: React.FC<ButtonProps> = ({img, name}) => {
  return (
    <View style={styles.container}>
      <RectButton style={styles.buttom}>
        <Image source={img} style={styles.img}/>
        <Text style={styles.text}>{name}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#6c757d" />
      </RectButton>
    </View>
  );
};

export default Button;
