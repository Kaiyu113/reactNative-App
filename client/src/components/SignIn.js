import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { React, useEffect } from "react";
import logo from "../../assets/logo.png";
import Input from "../common/TextInput";
import Button from "../common/Button";
import { login, reset } from "../../features/authSlice";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
const SignIn = () => {
  const Nav = useNavigation();
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const { control, handleSubmit, watch } = useForm();
  const formData = watch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      console.log("successful sign up");
      Nav.navigate("Home");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, Nav, dispatch]);

  const onLoginPress = () => {
    dispatch(login(formData));
  };

  const onSignup = () => {
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
          name="email"
          control={control}
          rules={{ required: "email is required" }}
        />
        <Text style={styles.text}>password</Text>
        <Input
          name="password"
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
