import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({ history }) => {
  return (
    <View>
      <Text style={{textAlign: 'center'}}>ToDo list</Text>
      <Button title={'Change page'} onPress={() => history.push('/buisness')} />
    </View>
  )
}