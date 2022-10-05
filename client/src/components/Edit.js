import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "../common/TextInput";
import Button from "../common/Button";
const Edit = () => {
  const [name, setName] = useState({ first: "", last: "" });
  const [password, setPassword] = useState("");
  const Nav = useNavigation();
  const onBackHome = () => {
    console.warn("SignUp");
    Nav.navigate("Home");
  };
  const onUpdate = () => {
    console.warn("Updated");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Update Info</Text>
        <View>
          <Input placeholder="First Name" value={name.first} />

          <Input placeholder="Last Name" value={name.last} />

          <Input placeholder="age" />

          <Input placeholder="company" />
          <Input placeholder="address" />

          <Input placeholder="phone" />

          <Input placeholder="email" />

          <Input placeholder="password" />
          <Input placeholder="repeat password" />

          <Button text="Update" onPress={onUpdate} />
          <Button text="Back to Home" onPress={onBackHome} type="TERTIARY" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",

    paddingTop: 50,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#51C60",
    margin: 0,
  },
});
export default Edit;
