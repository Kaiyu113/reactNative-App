import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "../common/TextInput";
import Button from "../common/Button";
import { useForm } from "react-hook-form";
import { update, reset } from "../../features/authSlice";
const Edit = () => {
  const { control, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const formData = getValues();
  const { user, message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess) {
      Nav.navigate("HOME");
    }

    if (!user) {
      console.log("user empty");
      Nav.navigate("SignIn");
    }
    return () => {
      dispatch(reset());
    };
  }, [user, Nav, isError, message, isSuccess, dispatch]);
  console.log(formData);
  const Nav = useNavigation();
  const onBackHome = () => {
    console.log("Home");
    Nav.navigate("Home");
  };
  console.log(formData);
  const onUpdate = () => {
    dispatch(update(formData));
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Update Info</Text>
        <View>
          <Input
            name="age"
            control={control}
            rules={{ required: "age is required" }}
          />
          <Input
            name="eyeColor"
            control={control}
            rules={{ required: "eyeColor is required" }}
          />
          <Input
            name="company"
            control={control}
            rules={{ required: "company is required" }}
          />
          <Input
            name="phone"
            control={control}
            rules={{ required: "phone is required" }}
          />
          <Input
            name="address"
            control={control}
            rules={{ required: "address name is required" }}
          />
          <Button text="Update" onPress={handleSubmit(onUpdate)} />
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
