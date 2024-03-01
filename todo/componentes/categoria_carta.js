import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const categoria_carta = ({ name, imgSrc, onPress, isSelected }) => {
  const buttonContent = ">";

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, { backgroundColor: isSelected ? "#F5CA48" : "#fff" }]}>
        <Image source={imgSrc} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
        <View style={[styles.button, { backgroundColor: isSelected ? "#fff" : "#F26C68" }]}>
          <Text style={[styles.buttonContent, { color: isSelected ? "black" : "#fff" }]}>{buttonContent}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    height: 177,
    width: 105,
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#EBEBED"
  },
  image: {
    marginTop: 10,
    height: 70,
    width: 70
  },
  text:{
    marginTop: 5,
    fontWeight: "600"
  },
  button: {
    marginTop: 20,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15
  },
  buttonContent:{
    marginTop: -7,
    fontSize: 30,
    marginLeft: 2
  }
});

export default categoria_carta;