import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import { BackIcon } from "@/components";
import { useAppDispatch } from "@/app/store";
import { logout } from "@/features/auth/auth.slice";
import useAuth from "@/hooks/useAuth";

const sectionData = [
  {
    id: 3,
    title: "Change Language",
    icon: "language-outline",
    page: "ChangeLanguage",
  },
  {
    id: 1,
    title: "Favourites",
    icon: "heart-outline",
  },
  {
    id: 2,
    title: "Change Password",
    page: "ChangePassword",
    icon: "lock-closed-outline",
  },

  {
    id: 5,
    title: "About",
    icon: "information-circle-outline",
  },
  {
    id: 6,
    title: "Help",
    icon: "help-circle-outline",
  },
];

export default function SettingsScreen({ navigation }: { navigation: any }) {
  const { colors, dark, setMode } = useTheme();
  const { user } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackIcon navigation={navigation} />,
    });
  }, [dark, navigation]);

  const dispatch = useAppDispatch();

  const handeLogout = async () => {
    await dispatch(logout());
  };
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: colors.primary,
      }}
    >
      <View
        style={{
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.userContainer}
        >
          <Image
            source={{
              uri:
                user?.photoURL ||
                "https://www.moveo.it/wp-content/uploads/2018/10/empty-avatar.png",
            }}
            style={styles.avatar}
          />
          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              fontFamily: fonts.primary.regular,
              marginStart: 10,
            }}
          >
            {user?.name}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          ...styles.sectionList,
          backgroundColor: colors.primary,
        }}
      >
        <FlatList
          data={sectionData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => item.page && navigation.navigate(item.page)}
            >
              <Ionicons name={item.icon as any} size={24} color={colors.text} />
              <Text style={{ color: colors.text, paddingLeft: 10 }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 10,
            maxWidth: "100%",
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
            onPress={() => setMode(dark ? "light" : "dark")}
          >
            <Ionicons
              name={dark ? "moon-outline" : "sunny-outline"}
              size={24}
              color={colors.text}
            />
            <Text style={{ color: colors.text, paddingLeft: 10 }}>
              {dark ? "Dark Mode" : "Light Mode"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons name="trash-outline" size={24} color={colors.text} />
            <Text style={{ color: colors.text, paddingLeft: 10 }}>
              {"Delete Account"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handeLogout}
          >
            <Ionicons name="log-out-outline" size={24} color={colors.text} />
            <Text style={{ color: colors.text, paddingLeft: 10 }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    height: 60,
    width: "100%",
    marginVertical: 10,

    alignItems: "center",
    flexDirection: "row",
    paddingStart: 15,
    borderRadius: 0,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  sectionList: {
    width: "100%",
    marginVertical: 10,
    paddingStart: 10,
    borderRadius: 0,
  },
});
