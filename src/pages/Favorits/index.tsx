import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native'

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles'

// import { Container } from './styles';

const Favorits: React.FC = () => {

  const [favorites, setFavorites] = useState<number[]>([]);


  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
    if (response) {
      const favoritedTeachers = JSON.parse(response);

      setFavorites(favoritedTeachers);
    }
  })}


  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
    <PageHeader title="Meus Proffys Favoritos!"/>

    <ScrollView
    style={styles.teacherList}
    contentContainerStyle={{
      paddingHorizontal: 16,
      paddingBottom:24
    }}
    >
      {favorites.map((teacher: Teacher) => {
        return (
          <TeacherItem
          key={teacher.id}
          teacher={teacher}
          favorited
          />
        );
      })}
    </ScrollView>
  </View>
    )
}

export default Favorits;
