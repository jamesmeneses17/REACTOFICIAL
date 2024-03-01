import { useNavigation } from '@react-navigation/native';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const detalles_carta = () => {

  const navigation = useNavigation();

  const handleDetailsPress = (name) => {
    navigation.navigate('Detalles', { name: name});
  };

  const SvgComponent = () => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={10}
    fill="none"
  >
    <Path
      fill="#F5CA48"
      d="M11.835 2.534a.469.469 0 0 0-.51-.065L8.762 3.718 6.354.943a.469.469 0 0 0-.708 0L3.239 3.718.674 2.469a.469.469 0 0 0-.654.558l1.781 5.86c.06.197.242.332.449.332h7.5a.469.469 0 0 0 .448-.333l1.781-5.859a.469.469 0 0 0-.144-.493Z"
    />
  </Svg>
  )

  const SvgComponent2 = () => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      fill="none"
    >
      <Path
        fill="#313234"
        d="m10 3.864-3.634-.24L4.998.188 3.63 3.625 0 3.864l2.784 2.363-.914 3.586 3.128-1.977 3.128 1.977-.914-3.586L10 3.864Z"
      />
    </Svg>
  )

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View>
          <View style={styles.header}>
            <SvgComponent />
            <Text style={styles.title}>Top of the week</Text>
          </View>
          <Text style={[styles.title, {marginLeft: 25, color: "#313234"}]}>Primavera Pizza</Text>
          <Text style={styles.small}>Weight 540 gr</Text>
          <View style={[{flexDirection: "row"}]}>
            <TouchableOpacity style={styles.button} onPress={() => handleDetailsPress("Primavera Pizza")}>
              <Text style={[{fontSize: 20}]}>+</Text>
            </TouchableOpacity>
            <View style={[{marginTop: 30}, {flexDirection: "row"}, {alignItems: "center"}, {marginLeft: 15}]}>
              <SvgComponent2/>
              <Text style={[{marginLeft: 5}]}>5.0</Text>
            </View>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/preview.png')}></Image>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    height: 161,
    borderRadius: 25,
    backgroundColor: "white",
    overflow: 'hidden',
    ...Platform.select({
      android: {
        elevation: 4,
      }
    }),
  },
  content: {
    flexDirection: "row",
  },
  header: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  title:{
    marginLeft: 10,
    fontWeight: "600"
  },
  imageContainer:{
    overflow: 'hidden',
  },
  image:{
    marginLeft: 20,
    marginTop: 20,
    width: 210,
    height: 125
  },
  small:{
    marginLeft: 30,
    fontSize: 12,
    color: "#C4C4C4"
  },
  button: {
    top: 14,
    width: 90,
    height: 53,
    backgroundColor: "#F5CA48",
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default detalles_carta;