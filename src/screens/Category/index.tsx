import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button/index';
import Header from '../../components/Header';
import { Info } from '../../data/Categorydata';
import { styles } from './styles';

const Category: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header name="Categorias"/>
      <ScrollView
        style={styles.list}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 10,
        }}
      >
        {
          Info.map(data => {
            return <Button key={data.name} name={data.name} img={data.image}/>
          })
        }
      </ScrollView>
    </View>
  );
};

export default Category;
