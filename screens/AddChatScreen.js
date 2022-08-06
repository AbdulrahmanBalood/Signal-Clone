import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Input, Button, Image } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";
const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const creatChat = async()=> {
    await db.collection('chats').add({
        chatName: input
    }).then(()=> {
        navigation.goBack()
    })
    .catch((error)=> alert(error.message))
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add New Chat",
      headerBackTitle: "Chats",
    });
  }, []);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter Chat Name"
        value={input}
        onChangeText={(text) => {
          setInput(text);
        }}
        leftIcon={<Icon name="wechat" type="antdesign" size={24} color='black' />}
      />
      <Button onPress={creatChat} title="Create new Chat"/>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {},
});
