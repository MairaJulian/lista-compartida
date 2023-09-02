import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {

  const onHandleChangeEmail = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <View style={styles.container}>
      {/* <Text>Login (falta seleccionar idioma)</Text> */}
      <TextInput 
        style={styles.input} 
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        value={""}
        onChangeText={onHandleChangeEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder='Password'
        secureTextEntry
        value={""}
        // onChangeText={(text) => setPass(text)}
        // onChangeText={onHandleChangePass}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.textButton}>Login</Text>
      </Pressable>
      <Text>You do not have an account?</Text>
      <Pressable onPress={()=>navigation.navigate('Sign Up')}>
        <Text style={styles.signup}>Sign Up</Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  input: {
    borderBottomColor: "gray", //traer color del archivo de colores
    borderBottomWidth: 1,
    marginTop: 20,
    width: 250
  },
  button: {
    borderWidth: 1,
    borderColor: "blue", //traer color del archivo de colores
    backgroundColor: "blue", //traer color del archivo de colores
    marginTop: 15,
    width: 80,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    color: "white", //traer color del archivo de colores
  },
  signup: {
    color: "blue"
  }
})