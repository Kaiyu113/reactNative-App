import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Fontisto, FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { me, reset, Onlogout, update } from "../../features/authSlice";

const Home = () => {
  // const [image, setImage] = useState("");
  const Nav = useNavigation();

  const dispatch = useDispatch();
  const { user, message, isError, info, isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   console.log("user empty");
    //   Nav.navigate("SignIn");
    // }

    dispatch(me());
    //setImage(info.picture);
    return () => {
      dispatch(reset());
    };
  }, [user, Nav, isError, message, dispatch]);
  //user, Nav, isError, info, dispatch
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
      dispatch(
        update({
          picture: result.uri,
        })
      );
    }
    // setImage(result.uri)
    dispatch(me());
  };
  if (isLoading) {
    <div>is loading</div>;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Ionicons
            name="chevron-back"
            size={35}
            color="black"
            onPress={() => dispatch(Onlogout())}
          />
          <Fontisto name="more-v" size={24} color="black" />
        </View>
        <View style={{ alignSelf: "center" }}>
          <Image
            source={{
              uri: info.picture,
            }}
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
          {info.name ? (
            <Text style={{ fontWeight: "200", fontSize: 40 }}>
              {info.name.firstname} {info.name.lastname}
            </Text>
          ) : null}
          <Text>Balance:{info.balance}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Button onPress={onBalance} text={`$ ${info.balance}`} />
          </View>
          <View style={styles.buttonBox}>
            <Button onPress={onEdit} text="EDIT" />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{ fontWeight: "200", fontSize: 25 }}>
            company:{info.company}
          </Text>
          <Text style={{ fontWeight: "200", fontSize: 25 }}>
            age:{info.age}
          </Text>
          <Text style={{ fontWeight: "200", fontSize: 25 }}>
            address:{info.address}
          </Text>
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
