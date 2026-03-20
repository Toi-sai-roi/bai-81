import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ProfileScreen() {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <SafeAreaView style={s.wrapper}>
      {/* Header xanh + avatar */}
      <View style={s.headerBg}>
        <View style={s.avatar}>
          <Text style={{ fontSize: 40 }}>👤</Text>
        </View>
      </View>

      {/* Phần thông tin */}
      <View style={s.infoSection}>
        <Text style={s.name}>Le Tung</Text>
        <Text style={s.role}>Mobile developer</Text>
        <Text style={s.bio}>
          I have above 5 years of experience in native mobile apps development,
          now i am learning React Native
        </Text>

        <TouchableOpacity style={s.btnSignOut} onPress={() => setIsLoggedIn(false)}>
          <Text style={s.btnSignOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const AVATAR_SIZE = 90;

const s = StyleSheet.create({
  wrapper: { flex: 1, width: "100%", maxWidth: 390, alignSelf: "center", backgroundColor: "#fff" },
  headerBg: {
    backgroundColor: "#29b6f6",
    height: 160,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "#ddd",
    borderWidth: 3,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -(AVATAR_SIZE / 2),
  },
  infoSection: {
    marginTop: AVATAR_SIZE / 2 + 12,
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 8,
  },
  name: { fontSize: 20, fontWeight: "700", color: "#1a1a1a", marginTop: 8 },
  role: { color: "#F5A623", fontSize: 14, marginTop: 4 },
  bio: {
    textAlign: "center", color: "#888",
    fontSize: 13, marginTop: 10, lineHeight: 20,
  },
  btnSignOut: {
    backgroundColor: "#F5A623", borderRadius: 8,
    paddingVertical: 12, paddingHorizontal: 36,
    marginTop: 24,
  },
  btnSignOutText: { color: "#fff", fontWeight: "700", fontSize: 15 },
});