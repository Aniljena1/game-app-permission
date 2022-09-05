import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../utils/colors'

export default function NumberCOntainer({ children }) {
  return (
    <View style={ styles.container}>
      <Text style={ styles.numberText}> { children } </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Color.primary700,
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center',
    },
    numberText:{
        color:Color.primary700,
        fontSize:30,
        fontWeight:'bold'
    }

})