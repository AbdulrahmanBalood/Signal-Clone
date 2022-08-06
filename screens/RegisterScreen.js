import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Input, Button, Image, Text } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
//h3 style={{ marginBottom: 50 }}
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imgUrl ||
            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text h3 style={{ marginBottom: 50 }}>
        Register
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Input
          placeholder="Img (Optional)"
          value={imgUrl}
          onChangeText={(text) => {
            setImgUrl(text);
          }}
          onSubmitEditing={register}
        />
      </View>
      <Button
        raised
        containerStyle={styles.button}
        title="Register"
        onPress={register}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
