import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Product from '../../components/Product/index';
import { ProductsInfo } from '../../data/ProductList';
import { styles } from './styles';

const Cart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header name="Carrinho"/>
      <View style={styles.warning}>
        <Text style={styles.warningText}>Seu carrinho está vazio</Text>
        <Text style={styles.warningMiniText}>Adicione produtos clicando no botão Comprar na página de produto</Text>
        <RectButton style={styles.warningButton}>
          <Text style={styles.warningButtonText}>IR PARA A LOJA</Text>
        </RectButton>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.textList}>Mais Populares</Text>
        <ScrollView
          horizontal
          style={styles.listProduct}
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingBottom: 10,
          }}
        >
          {
            ProductsInfo.map((info)=>{
              return <Product 
                        img={info.img} 
                        name={info.name}
                        newValue={info.newValue}
                        oldValue={info.oldValue}
                        shipping={info.shipping}
                        key={info.name}
                      />
            })
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default Cart;
