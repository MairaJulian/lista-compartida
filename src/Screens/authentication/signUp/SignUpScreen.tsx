import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const SignUpScreen = () => {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [passConfirm, setPassConfirm] = useState("")

  const onHandleChangeEmail = (newValue) => {
    setEmail(newValue)
    console.log(newValue);
    
  }

  const onHandleChangePass = (newValue) => {
    setPass(newValue)
    console.log(newValue);
  }

  const onHandleChangePassConfirm = (newValue) => {
    setPassConfirm(newValue)
    console.log(newValue);
  }

  const handleSubmit = () => {
    setEmail("")
    setPass("")
    setPassConfirm("")
    console.log("Enviar registro");
  }

  return (
    <View>
      <Text>Register (falta seleccionar idioma)</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        value={email}
        onChangeText={onHandleChangeEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder='Password'
        secureTextEntry
        value={pass}
        onChangeText={onHandleChangePass}
      />
      <TextInput 
        style={styles.input} 
        placeholder='Password Confirm'
        secureTextEntry
        value={passConfirm}
        onChangeText={onHandleChangePassConfirm}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.textButton}>Register</Text>
      </Pressable>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "gray", //traer color del archivo de colores
    borderBottomWidth: 1,
    marginTop: 15
  },
  button: {
    borderWidth: 1,
    borderColor: "blue", //traer color del archivo de colores
    backgroundColor: "blue", //traer color del archivo de colores
    marginTop: 15
  },
  textButton: {
    color: "white", //traer color del archivo de colores
    justifyContent: "center",
    textAlign: "center"
  }
})