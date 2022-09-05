import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../../componenets/Title'
import PrimaryButton from '../../componenets/PrimaryButton'

export default function GameOverScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <PrimaryButton onPress={() => navigate('Home')}>Re Start</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center',
    borderColor:'red'
  }
})