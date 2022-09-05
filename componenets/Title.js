import { StyleSheet, Text, View } from 'react-native'
import { Color } from '../utils/colors'

export default function Title({ children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color: 'white',
        textAlign:'center',
        borderWidth:2,
        borderColor: Color.primary700,
        padding:12,
    }
})