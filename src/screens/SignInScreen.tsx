import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SignInScreen({ navigation }: any) {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <SafeAreaView style={s.wrapper}>
      <View style={s.container}>
        <Text style={s.logo}>🏠</Text>
        <Text style={s.title}>Chào mừng trở lại</Text>
        <Text style={s.sub}>Đăng nhập để tiếp tục</Text>

        <TouchableOpacity style={s.btnPrimary} onPress={() => setIsLoggedIn(true)}>
          <Text style={s.btnPrimaryText}>Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.btnOutline} onPress={() => navigation.navigate("SignUp")}>
          <Text style={s.btnOutlineText}>Tạo tài khoản mới</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={s.link}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 390,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  logo: {
    fontSize: 36,
    textAlign: "center",
    marginTop: 28,
    marginBottom: 4,
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: "#e8f0fe",
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#1a1a1a",
    marginTop: 4,
  },
  sub: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 20,
  },
  btnPrimary: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  btnPrimaryText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  btnOutline: {
    borderWidth: 1.5,
    borderColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  btnOutlineText: {
    color: "#007AFF",
    fontSize: 15,
    fontWeight: "600",
  },
  btnDanger: {
    backgroundColor: "#ff3b30",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 16,
  },
  link: {
    color: "#007AFF",
    textAlign: "center",
    marginTop: 6,
    fontSize: 13,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  cardBody: {
    fontSize: 12,
    color: "#aaa",
  },
  placeholder: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  placeholderText: {
    color: "#aaa",
    fontSize: 13,
  },
});