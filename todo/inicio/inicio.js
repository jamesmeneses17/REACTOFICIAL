import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CardCategory from "../componentes/categoria_carta";
import DetailsCard from "../componentes/detalles_carta";

const inicio = () => {
  
  const [selectedCard, setSelectedCard] = useState("Pizza");
  const handleCardPress = (cardName) => {
    setSelectedCard(cardName);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={require("../../assets/avatar.jpeg")}
            style={styles.avatarImage}
          />
        </View>
        <View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
        </View>
      </View>
      <Text style={styles.food}>Food</Text>
      <Text style={styles.title}>Delivery</Text>
      <View style={styles.searchContainer}>
        <Image style={styles.lupa} source={require('../../assets/lupa.png')}></Image>
        <TextInput style={styles.search} placeholder="Search" />
      </View>
      <Text style={styles.categoriesText}>Categories</Text>
      <View style={styles.cardsContainer}>
        <CardCategory name="Pizza" imgSrc={require('../../assets/pizza.png')} onPress={() => handleCardPress("Pizza")} isSelected={selectedCard === "Pizza"} />
        <CardCategory name="Seafood" imgSrc={require('../../assets/seafood.png')} onPress={() => handleCardPress("Seafood")} isSelected={selectedCard === "Seafood"} />
        <CardCategory name="Soft Drinks" imgSrc={require('../../assets/drink.png')} onPress={() => handleCardPress("Soft Drinks")} isSelected={selectedCard === "Soft Drinks"} />
      </View>

      <Text style={styles.categoriesText}>Popular</Text>
      <View style={styles.cardDetailsContainer}>
        <DetailsCard></DetailsCard>
        <DetailsCard></DetailsCard>
    
      </View>

      <View style={styles.end}></View>
    
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    padding: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  line: {
    width: 25,
    height: 3,
    marginTop: 5,
    backgroundColor: "black",
  },
  food: {
    fontSize: 16,
    fontWeight: "400",
    color: "#313234"
  },
  title: {
    fontSize: 32,
    fontWeight: "700"
  },
  searchContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  search: {
    height: 40,
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CDCDCD"
  },
  lupa: {
    height: 30,
    width: 30
  },
  categoriesText: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "700"
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  end: {
    height: 40
  }
});

export default inicio;