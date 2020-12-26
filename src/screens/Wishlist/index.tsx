import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import imagewarning from '../../assets/Image.png';
import { styles } from './styles';

const Wishlist: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header name="Lista de desejos"/>
      <View style={styles.warningsView}>
        <Text style={styles.warningsTitle}>Seus produtos favoritos aqui</Text>
        <Text style={styles.warningsText}> Sua lista ainda está vazia, mas com o ícone de favoritos (❤️), você deixa tudo salvo aqui pra ver sempre que quiser.</Text>
      </View>
      <Image source={imagewarning} style={styles.warningImage}/>
      <RectButton style={styles.keepBuyingButton}>
        <Text style={styles.keepBuyingText}>CONTINUAR COMPRANDO</Text>
      </RectButton>
    </View>
  );
};

export default Wishlist;
