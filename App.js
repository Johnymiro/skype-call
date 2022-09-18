import React, { useCallback } from "react";
import {
  TouchableOpacity,
  Alert,
  Button,
  Dimensions,
  Linking,
  StyleSheet,
  View,
  Text,
} from "react-native";

const getCallURL = (name) => `skype:${name}?call`;

const OpenURLButton = ({ url, children, color, style }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: Dimensions.get("window").width / 1.5,
        backgroundColor: color,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "#F0FFFF",
          fontFamily: "Cochin",
        }}
        //color="#F0FFFF"
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const contacts = [
  {
    name: "echo123",
    color: "#008080",
    title: "Call Johny",
  },
  {
    name: "echo123",
    color: "#4682B4",
    title: "Call Sole",
  },
  {
    name: "echo123",
    color: "#008080",
    title: "Call Test",
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      {contacts.map((contact) => {
        return (
          <OpenURLButton
            style={styles.button}
            color={contact.color}
            url={getCallURL(contact.name)}
          >
            {contact.title}
          </OpenURLButton>
        );
      })}
      {/*    <OpenURLButton
        style={styles.button}
        color="#008080"
        url={getCallURL("echo123")}
      >
        Call Johny
      </OpenURLButton>
      <OpenURLButton color="#4682B4" url={""}>
        Call Sole
      </OpenURLButton>
      <OpenURLButton color="#8FBC8F" url={""}>
        Call Test
      </OpenURLButton> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  button: { width: Dimensions.get("window").width / 2, height: 80 },
});

export default App;
