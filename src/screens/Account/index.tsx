import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ButtonAccount from '../../components/ButtonAccount';
import Header from '../../components/Header/index';
import { styles } from './styles';

const Account: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header name='Sua Conta'/>
      <View style={styles.welCome}>
        <Text style={styles.welComeText}>Olá visitante!</Text>
        <Text style={styles.welComeLink}>ACESSAR OU CRIAR UMA CONTA</Text>
      </View>
      <ScrollView style={styles.scrollview}>
        <View style={styles.FirstArea}>
          <ButtonAccount name='Pedidos'/>
          <ButtonAccount name='Devoluções'/>
          <ButtonAccount name='Vales'/>
          <ButtonAccount name='Seus dados'/>
          <ButtonAccount name='Endereços'/>
          <ButtonAccount name='Covid-19'/>
          <ButtonAccount name='Regulamentos'/>
        </View>
        <View style={styles.SecondArea}>
          <ButtonAccount name='Ir para Zattini'/>
          <ButtonAccount name='Avalie nosso Aplicativo'/>
          <ButtonAccount name='Central de Relacionamentos'/>
          <ButtonAccount name='Sobre o aplicativo'/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;
