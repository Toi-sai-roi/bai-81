import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SignInScreen({ navigation }: any) {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <SafeAreaView style={s.wrapper}>
      <View style={s.container}>
        <Text style={s.title}>Sign In</Text>

        <Text style={s.label}>Email ID</Text>
        <TextInput
          style={s.input}
          placeholder="Enter your email here!"
          placeholderTextColor="#bbb"
          keyboardType="email-address"
        />

        <Text style={s.label}>Password</Text>
        <TextInput
          style={s.input}
          placeholder="Enter your password here!"
          placeholderTextColor="#bbb"
          secureTextEntry
        />

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={s.forgot}>For got password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.btnPrimary} onPress={() => setIsLoggedIn(true)}>
          <Text style={s.btnPrimaryText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={s.orText}>Or sign in with</Text>

        <View style={s.row}>
          <TouchableOpacity style={s.btnGoogle}>
            <Text style={s.btnGoogleText}>G  Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.btnFacebook}>
            <Text style={s.btnFacebookText}>f  Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={s.signUpText}>
            Not yet a member? <Text style={s.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrapper: { flex: 1, width: "100%", maxWidth: 390, alignSelf: "center", backgroundColor: "#fff" },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 40 },
  title: { fontSize: 24, fontWeight: "700", textAlign: "center", marginBottom: 28, color: "#1a1a1a" },
  label: { fontSize: 13, color: "#555", marginBottom: 6, marginTop: 14 },
  input: {
    borderWidth: 1, borderColor: "#ddd", borderRadius: 8,
    padding: 12, fontSize: 14, color: "#333",
  },
  forgot: { color: "#F5A623", textAlign: "right", marginTop: 8, fontSize: 13 },
  btnPrimary: {
    backgroundColor: "#F5A623", borderRadius: 8,
    paddingVertical: 14, alignItems: "center", marginTop: 20,
  },
  btnPrimaryText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  orText: { textAlign: "center", color: "#888", marginVertical: 16, fontSize: 13 },
  row: { flexDirection: "row", gap: 12 },
  btnGoogle: {
    flex: 1, borderWidth: 1, borderColor: "#ddd", borderRadius: 8,
    paddingVertical: 12, alignItems: "center",
  },
  btnGoogleText: { fontWeight: "600", fontSize: 14 },
  btnFacebook: {
    flex: 1, backgroundColor: "#3b5998", borderRadius: 8,
    paddingVertical: 12, alignItems: "center",
  },
  btnFacebookText: { color: "#fff", fontWeight: "600", fontSize: 14 },
  signUpText: { textAlign: "center", marginTop: 20, color: "#888", fontSize: 13 },
  signUpLink: { color: "#F5A623", fontWeight: "600" },
});