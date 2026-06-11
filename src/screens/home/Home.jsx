import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import styles from "./Home.styles";

export default function Home() {
  const [onlineData, setOnlineData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setOnlineData(data))
      .catch((err) => console.log(err));
  }, []);

  const _renderItem = ({ item }) => (
    <View style={styles.itemCon}>
      <Image
        source={{
          uri: item.avatar_url,
        }}
        style={styles.itemImage}
      />

      <Text style={styles.item}>{item.login} </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={onlineData} renderItem={_renderItem} />
    </View>
  );
}
