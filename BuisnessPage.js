import React, {useState, useEffect} from 'react';
import { AsyncStorage } from 'react-native';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default ({ history }) => {
  const [value, onChangeText] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => { getData() }, [])

  const setOpenedElement = async (element) => {
    try {
      await AsyncStorage.setItem('openedElement', JSON.stringify(element))
    } catch(error) { console.log(error) }
    history.push('/todo-info')
  }

  const addNewElement = async (title) => {
    try {
      setData([...data, {title, date: getDate(), time: getTime()}])
      await AsyncStorage.setItem('items', JSON.stringify(
        [...data, {title: title, date: getDate(), time: getTime()}]
      ))
    } catch(error) { console.log(error) }
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('items');
      if (value !== null) { setData(JSON.parse(value))}
    } catch (error) { console.log(error) }
  };

  const getDate = () => {
    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const getMounth = date.getMonth() + 1; // January = 0
    const mounth = getMounth < 10 ? `0${getMounth}` : getMounth;
    return `${day}/${mounth}/${date.getFullYear()}`
  }

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hours}:${minutes}`
  }
  
  return (
    <View style={styles.listContainer}>
      <View style={{flexDirection: 'row', flex: 1, height: 40, minHeight: 40}}>
        <TextInput
          style={styles.inputStyles}
          onChangeText={text => onChangeText(text)}
          placeholder={'Enter todo name...'}
          value={value}
        />
        <Button 
          style={styles.submitButton}
          title={'Apply'} 
          onPress={() => addNewElement(value)} 
        />
      </View>
      <View style={styles.list}>
        {data.map((element, index) => {
          return (
            <View  key={index} style={styles.listElement} >
              <Text 
                style={styles.elementText}
                onPress={() => setOpenedElement(element)}
              >{`${index + 1}. ${element?.title}`}</Text>
              <Text 
                style={styles.elementText}
                onPress={() => setOpenedElement(element)}
              >{element?.time}</Text>
              <Text 
                style={styles.elementText}
                onPress={() => setOpenedElement(element)}
              >{element?.date}</Text>
            </View>
          )
        })}
      </View>
      {/* <Text style={{textAlign: 'center'}}>List</Text> */}
      <View style={styles.buttonContainer}>
        <Button title={'Change page'} onPress={() => history.push('/')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 50,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch',
  },

  listElement: {
    textAlign: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  elementText: {
    marginLeft: 5,
    marginRight: 5,
  },

  list: {
    flex: 9,
    overflow: 'scroll',
  },

  buttonContainer: {
    flex: 1,
  },

  inputStyles: { 
    // height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },

  submitButton: {
    backgroundColor: 'deepskyblue'
  }
});