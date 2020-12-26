import React from 'react';
import { Text, View, TextInput, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import ButtonHome from '../../components/ButtonHome';
import Product from '../../components/Product/index';
import { ProductsInfo } from '../../data/ProductList';
import { styles } from './styles';
import Esports from '../../assets/roupasEsp.png';
import logo from '../../assets/netshoes.png';
import sign from '../../assets/Screenshot.png';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image 
            source={logo}
            style={styles.image}
          />
          <TextInput style={styles.search} >
            <AntDesign name="search1" size={20} color="white" />
            <Text style={styles.nameSearch}>Buscar por</Text>
          </TextInput>
        </View>
        <RectButton style={styles.Cep}>
          <View style={styles.CepStruct}>
            <Feather name="map-pin" size={22} color="white" />
            <Text style={styles.CepStructName}>Informe seu CEP</Text>
          </View>
          <Ionicons name="ios-arrow-forward" size={24} color="white" />
        </RectButton>
      </View>
        <ScrollView
          style={styles.listProduct}
          contentContainerStyle={{
            paddingHorizontal: 0,
            paddingBottom: 0,
          }}
        >
          <View style={styles.exclusive}>
            <MaterialCommunityIcons name="truck-fast" size={22} color="white" />
            <Text style={styles.textExclusive}>EXCLUSIVO NO APP</Text>
            <Text style={styles.textFree}>FRETE GRÁTIS ACIMA DE R$ 49,99*</Text>
            <View style={styles.content}>
              <Text style={styles.contentText}>*CONSULTE NO REGULAMENTO AS REGIÕES PARTICIPANTES.</Text>
            </View>
          </View>
          <Image
            source={sign}
            style={styles.singStyle}
          />
          <View style={styles.listButtons}>
            <ButtonHome name='Masculino'>
              <Entypo name="man" size={22} color="#6c757d" />
            </ButtonHome>
            <ButtonHome name='Feminino'>
              <Ionicons name="ios-woman" size={22} color="#6c757d" />
            </ButtonHome>
            <ButtonHome name='Calçados'>
              <MaterialCommunityIcons name="shoe-formal" size={22} color="#6c757d" />
            </ButtonHome>
            <ButtonHome name='Esportes'>
              <AntDesign name="Trophy" size={22} color="#6c757d" />
            </ButtonHome>
            <ButtonHome name="Ver Tudo">
              <AntDesign name="bars" size={22} color="#6c757d"/>
            </ButtonHome>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.textList}>Novidades que chegaram pra você</Text>
            <ScrollView
              horizontal
              style={styles.listProducts}
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
          <View style={styles.coronaContainer}>
            <View style={styles.coronaContent}>
              <Text style={styles.coronaTextone}>NETSHOES E VOCÊ</Text>
              <Text style={styles.colorTexttwo}>JUNTOS CONTRA O CORONAVÍRUS</Text>
            </View>
            <RectButton style={styles.buttonClick}>
              <Text style={styles.buttonClickText}>CLIQUE AQUI E SAIBA MAIS {">"} </Text>
            </RectButton>
          </View>
          <View style={styles.esportsContainer}>
            <Image
              source={Esports}
              style={styles.esportImage}
            />
            <View style={styles.esportsTexts}>
              <View style={styles.esportsExclusive}>
                <Text style={styles.esportsExclusiveText}>EXCLUSIVO!</Text>
              </View>
              <Text style={styles.esportsTextone}>PREÇOS QUE VOCÊ SÓ ENCONTRA { '      ' } <Text style={styles.esportsTexttwo}>NO APP</Text></Text>
              <View style={styles.exportBox}>
                <RectButton style={styles.exportButton}>
                  <Text style={styles.exportColorButton}>CLIQUE E CONFIRA {">"}</Text>
                </RectButton>
              </View>
            </View>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.textList}>Mais Vendidos</Text>
            <ScrollView
              horizontal
              style={styles.listProducts}
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
        </ScrollView>
    </View>
  );
};

export default Home;
