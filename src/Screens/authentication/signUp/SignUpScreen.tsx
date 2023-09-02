import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSignUpMutation } from '../../../services/AuthenticationService'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../store/user/UserSlice'

const SignUpScreen = ({
  navigation
}) => {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [passConfirm, setPassConfirm] = useState("")

  const [triggerSignUp, result] = useSignUpMutation()
  console.log(result);

  const dispatch = useDispatch()

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken
        })
      )
    }
  }, [result])
  
  

  const onHandleChangeEmail = (newValue) => {
    setEmail(newValue)
    // console.log(newValue);
    
  }

  // const onHandleChangePass = (newValue) => {
  //   setPass(newValue)
  //   // console.log(newValue);
  // }

  const onHandleChangePassConfirm = (newValue) => {
    setPassConfirm(newValue)
    // console.log(newValue);
  }

  const handleSubmit = () => {
    console.log(email, pass, passConfirm);
    //esto lo saqué de la documentacion de firebase
    const request = {
      email: email,
      password: pass,
      returnSecureToken: true
    }
    triggerSignUp(request)
    
    setEmail("")
    setPass("")
    setPassConfirm("")
    console.log("Enviar registro");
  }

  return (
    <View style={styles.container}>
      {/* <Text>Register (falta seleccionar idioma)</Text> */}
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
        onChangeText={(text) => setPass(text)}
        // onChangeText={onHandleChangePass}
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
      <Text style={styles.text}>You have an account?</Text>
      <Pressable onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.login}>Login</Text>
      </Pressable>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    // borderColor: "black",
    // borderWidth: 1,
    // width: 500,
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
  login: {
    color: "blue"
  },
  text: {
    backgroundColor: "red"
  }
})