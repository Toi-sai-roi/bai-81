import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function SignUpScreen({ navigation }: any) {
  return (
    <SafeAreaView style={s.wrapper}>
      <View style={s.container}>
        <Text style={s.title}>Tạo tài khoản</Text>
        <Text style={s.sub}>Điền thông tin để đăng ký</Text>

        <View style={s.placeholder}>
          <Text style={s.placeholderText}>[ Form đăng ký ở đây ]</Text>
        </View>

        <TouchableOpacity style={s.btnPrimary}>
          <Text style={s.btnPrimaryText}>Đăng ký</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={s.link}>← Quay lại đăng nhập</Text>
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
    maxWidth: 390, // iPhone 14 width
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