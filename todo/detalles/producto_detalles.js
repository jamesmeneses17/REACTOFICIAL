import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const producto_detalles = ({ route }) => {
  const { name } = route.params;

  const SvgComponent = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none">
      <G clipPath="url(#a)">
        <Path
          fill="#fff"
          d="M12 4.636 7.64 4.35 5.998.224 4.356 4.35 0 4.636l3.34 2.837-1.096 4.303 3.754-2.373 3.753 2.373-1.096-4.303L12 4.636Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h12v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );

  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
        <TouchableOpacity style={styles.starButton}>
          <SvgComponent />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <Text style={styles.price}>$5.99</Text>

      <View style={styles.content}>
        <View>
          <Text style={styles.detailTitle}>Size</Text>
          <Text style={styles.detailContent}>Medium 14”</Text>
          <Text style={styles.detailTitle}>Crust</Text>
          <Text style={styles.detailContent}>Thin Crust</Text>
          <Text style={styles.detailTitle}>Delivery in</Text>
          <Text style={styles.detailContent}>30 min</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/preview.png")}
          ></Image>
        </View>
      </View>
      <Text style={styles.ingredients}>Ingredients</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            style={styles.cardImg}
            source={require("../../assets/ing1.png")}
          ></Image>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImg}
            source={require("../../assets/ing2.png")}
          ></Image>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImg}
            source={require("../../assets/ing3.png")}
          ></Image>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Place an order {"  >"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
    padding: 30,
  },
  starContainer: {
    alignItems: "flex-end"
  },
  starButton: {
    backgroundColor: "#F5CA48",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  button: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 62,
    backgroundColor: "#F5CA48",
    borderRadius: 31,
  },
  textButton: {
    fontWeight: "700",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginTop: 20,
    width: 100,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  cardImg: {
    width: 80,
    height: 80,
  },
  ingredients: {
    marginTop: 70,
    fontWeight: "700",
    fontSize: 16,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#CDCDCD",
    marginTop: 25,
  },
  detailContent: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    flexDirection: "row",
  },
  image: {
    top: 40,
    marginLeft: 70,
    width: 296,
    height: 176,
  },
  price: {
    marginTop: 25,
    color: "#E4723C",
    fontSize: 32,
    fontWeight: "600",
  },
  title: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "700",
  },
  header: {
    width: 230,
    fontFamily: "sans-serif",
  },
});

export default producto_detalles;