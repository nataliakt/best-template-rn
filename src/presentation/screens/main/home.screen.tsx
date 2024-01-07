import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { useUserStore } from "stores/user.store";

function HomeScreen() {
  const firstName = useUserStore((state) => state.firstName);
  const updateFirstName = useUserStore((state) => state.updateFirstName);

  useFocusEffect(() => {
    updateFirstName("John");
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome {firstName}!</Text>
    </View>
  );
}

export default HomeScreen;
