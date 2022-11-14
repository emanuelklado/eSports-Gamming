import React, { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import GameCardProps from '../../../interfaces/GameCardProps';
import logoImg from '../../assets/others/logo-nlw-esports.png';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import {SafeAreaView} from 'react-native-safe-area-context'
import { styles } from './styles';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();
  useEffect (() => {
    // ifconfig | grep "inet " |grep -v 127.0.0.1 
  fetch('http://192.168.0.105:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);


function handleOpenCardGame({id, title, bannerUrl}: GameCardProps) {
  navigation.navigate('game', {id, title, bannerUrl})
}

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image 
      source={logoImg}
      style={styles.logo}
      />
      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard data={item}
          onPress={() => handleOpenCardGame(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>      
    </Background>
  );
}