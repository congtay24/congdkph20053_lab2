import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Styles/Style";

export default function Home(props) {
  const navigation = props.navigation;

  const data = {
    name: "Đào Khắc Công",
    phone: "0368247967",
    email: "congdkph20053@fpt.edu.vn",
    majors: "Lập trình mobile",
    birthday: "24/10/2003",
  };

  return (
    <View style={styles.container}>
     
      <Pressable
        android_ripple={{ color: "#CC99FF" }}
        style={styles.buttonNext}
        onPress={() => navigation.navigate("Profile", { data })}
      >
        <Text style={styles.textButton}>Thông tin cá nhân</Text>
      </Pressable>
    </View>
  );
}
