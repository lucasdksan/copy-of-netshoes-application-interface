import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface HeadeProps{
  name: string;
}

const Header: React.FC<HeadeProps> = ({name}) => {
  return (
    <View style={styles.contentHeader}>
      <Text style={styles.contentText}>{name}</Text>
    </View>
  );
};

export default Header;
