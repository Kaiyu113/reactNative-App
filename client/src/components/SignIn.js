import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import React from "react";
import logo from "../../assets/logo.png";
import Input from "../common/TextInput";
import Button from "../common/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
const SignIn = () => {
  const Nav = useNavigation();
  const { height } = useWindowDimensions();

  const { control, handleSubmit } = useForm();

  const onLoginPress = (data) => {
    console.warn(data);
    Nav.navigate("Home");
  };
  const onSignup = () => {
    //console.warn("onSignup");
    Nav.navigate("SignUp");
  };

  return (
    <View style={styles.root}>
      <Image
        source={logo}
        style={[styles.logo, { height: height * 0.5 }]}
        resizeModo="contain"
      />
      <View>
        <Text style={styles.text}>Username</Text>
        <Input
          name="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <Text style={styles.text}>Password</Text>
        <Input
          name="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be minimum 6 characters long",
            },
          }}
        />
        <Button text="LOGIN" onPress={handleSubmit(onLoginPress)} />
        <Button
          text="Don't have an account? Sign up here"
          onPress={onSignup}
          type="TERTIARY"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingTop: 100,
  },

  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 250,
  },
});
export default SignIn;
