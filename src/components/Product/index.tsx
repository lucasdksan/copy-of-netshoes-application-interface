import React from 'react';
import { ImageSourcePropType, Text, View, Image } from 'react-native';
import { styles } from './styles';

interface ProductProps{
  name: string;
  img: ImageSourcePropType;
  oldValue?: string;
  shipping: string;
  newValue: string;
}

const Product: React.FC<ProductProps> = ({ name, img, oldValue, shipping, newValue }) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.imageProduct}/>
      <View style={styles.content}>
        <Text style={styles.nameProduct}>{name}</Text>
        <Text style={styles.shippingSituation}>{shipping}</Text>
        <Text style={styles.oldValue}>{oldValue}</Text>
        <Text style={styles.newValue}>{newValue}</Text>
      </View>
    </View>
  );
};

export default Product;
