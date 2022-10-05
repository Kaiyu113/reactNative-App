import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "../common/TextInput";
import Button from "../common/Button";
import { useForm } from "react-hook-form";
import Axios from "axios";
const SignUp = () => {
  const { control, handleSubmit, watch, getValues } = useForm();
  const Nav = useNavigation();
  const pwd = watch("password");
  const formData = getValues();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const PASSWORD_REGEX =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const { company, password, firstname, lastname, email } = formData;
  const onSignupPress = () => {
    //console.log("SignUp");
    //Nav.navigate("SignIn");

    Axios.post(
      "https://localhost:5000/api/users/",
      {
        headers: {
          Accept: "application/json, text/plain, /",
          "Content-Type": "multipart/form-data",
        },
      },
      formData
    )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const onSignonPress = () => {
    //Nav.navigate("SignIn");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.inputs}>
          <Input
            name="firstname"
            control={control}
            rules={{ required: "First name is required" }}
          />

          <Input
            name="lastname"
            control={control}
            rules={{ required: "Last name is required" }}
          />

          <Input
            name="company"
            control={control}
            rules={{ required: "Company is required" }}
          />

          <Input
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />

          <Input
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  "Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character",
              },
            }}
          />
          <Input
            name="repeatpassword"
            control={control}
            rules={{
              required: "Repeat password is required",
              validate: (value) => value === pwd || "password do not match",
            }}
          />

          <Button text="SIGN UP" onPress={handleSubmit(onSignupPress)} />
          <Button
            text="Already have account? Sign in"
            onPress={onSignonPress}
            type="TERTIARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#51C60",
    margin: 0,
  },
  inputs: {
    alignItems: "center",
  },
});
export default SignUp;
