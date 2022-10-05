import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
const Input = ({ secureTextEntry, name, control, rules = {} }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#000000" },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              style={styles.input}
              placeholder={name}
              secureTextEntry={secureTextEntry}
              onBlur={onBlur}
            />
          </View>
          <View style={styles.messageContainer}>
            {error && (
              <Text style={{ color: "red" }}>{error.message || "Error"}</Text>
            )}
          </View>
        </>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#FAEBD7",

    width: 323,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  messageContainer: {
    //paddingHorizontal: 20,
  },
});
export default Input;
