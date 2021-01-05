import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import { AsyncStorage } from 'react-native';

export default ({ history }) => {
  const [data, setData] = useState();
  
  useEffect(() => { getData() }, [])

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('openedElement');
      if (value !== null) {setData(JSON.parse(value))}
    } catch (error) { console.log(error) }
  };

  return (
    <View>
      <Text style={{textAlign: 'center'}}>{`${data?.title} ${data?.time} ${data?.date}`}</Text>
      <Button title={'Back'} onPress={() => history.push('/buisness')} />
    </View>
  )
}