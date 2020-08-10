import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from'@react-native-community/async-storage';

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';



const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
    if (response) {
      const favoritedTeachers = JSON.parse(response);
      const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
        return teacher.id
      })

      setFavorites(favoritedTeachersIds);
    }
  })}

  useFocusEffect(() =>{
    loadFavorites();
  })

  function hendleToggleFiltersList() {
    setIsFiltersVisible(!isFiltersVisible);
  };

  async function hendleFiltresSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });
    setIsFiltersVisible(false);
    setTeachers(response.data);
    loadFavorites();
  }

  return (
  <View style={styles.container}>
    
    <PageHeader 
      title="Proffys Disponíveis"
      headerRight={(
        <BorderlessButton onPress={hendleToggleFiltersList}>
          <Feather name="filter" size={25} color="#FFF"/>
        </BorderlessButton>
      )}
    >

      { isFiltersVisible && (
        <View style={styles.searchForm}>
        <Text style={styles.label}>Matéria</Text>
          <TextInput
            style={styles.input}
            value={subject}
            onChangeText={text => setSubject(text)}
            placeholder="Qual a matéria?"
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>

            <Text style={styles.label}>Dia da Semana</Text>
            <TextInput
              style={styles.input}
              value={week_day}
              onChangeText={text => setWeekDay(text)}
              placeholder="Qual o dia?"
            />
            
            </View>

            <View style={styles.inputBlock}>

            <Text style={styles.label}>Horário</Text>
            <TextInput
              style={styles.input}
              value={time}
              onChangeText={text => setTime(text)}
              placeholder="Qual Horário?"
            />
            
            </View>
          </View>

          <RectButton onPress={hendleFiltresSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Buscar</Text>

          </RectButton>

      </View>
      )}
      
    </PageHeader>

    <ScrollView
    style={styles.teacherList}
    contentContainerStyle={{
      paddingHorizontal: 16,
      paddingBottom:24
    }}
    >
      {teachers.map((teacher: Teacher) => {
      return (
      <TeacherItem 
      key={teacher.id} 
      teacher={teacher}
      favorited={favorites.includes(teacher.id)}
     />)
      })}
    </ScrollView>

  </View>
  )
}

export default TeacherList;