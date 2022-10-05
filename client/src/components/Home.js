import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState } from "react";
import Button from "../common/Button";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Fontisto, FontAwesome } from "@expo/vector-icons";
//import ImagePicker from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
const Home = () => {
  const [image, setImage] = useState(null);
  const Nav = useNavigation();

  const onLogout = () => {
    Nav.navigate("SignIn");
  };
  const onEdit = () => {
    Nav.navigate("Edit");
  };
  const onBalance = () => {
    console.warn("Balance");
  };
  const onSelectPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Ionicons
            name="chevron-back"
            size={35}
            color="black"
            onPress={onLogout}
          />
          <Fontisto name="more-v" size={24} color="black" />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.selectPhoto}>
          <FontAwesome
            name="camera"
            size={24}
            color="black"
            onPress={onSelectPhoto}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={{ fontWeight: "200", fontSize: 40 }}>Name</Text>
          <Text>Balance:300</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Button onPress={onBalance} text="BALANCE" />
          </View>
          <View style={styles.buttonBox}>
            <Button onPress={onEdit} text="EDIT" />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{ fontWeight: "200", fontSize: 25 }}>company</Text>
          <Text style={{ fontWeight: "200", fontSize: 25 }}>Name</Text>
          <Text style={{ fontWeight: "200", fontSize: 25 }}>Name</Text>
          <Text style={{ fontWeight: "200", fontSize: 25 }}>Name</Text>
          <Text style={{ fontWeight: "200", fontSize: 25 }}>Name</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  infoContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "center",
  },
  buttonBox: {
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginHorizontal: 16,
  },
  selectPhoto: {
    position: "absolute",
    top: 230,
    right: 96,
  },
});
export default Home;
