import ShowFullScreenImage from "@/components/ShowFullScreenImage";
import {
  CreatePostScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
  ChangeLanguageScreen,
  ChangePasswordScreen,
} from "@/screens";
import { useTheme } from "@/theme/ThemeProvider";
import { Link } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "@/constants/fonts";
import SinglePostScreen from "@/screens/single-post/single-post";
import useAuth from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user } = useAuth();
  const { colors } = useTheme();

  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
          },

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Link
                to={"/Settings"}
                style={{
                  marginRight: 10,
                }}
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={colors.text}
                />
              </Link>
              {/* <ToggleMode /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },

          headerShadowVisible: false,
          headerBackTitle: "",

          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
          // headerRight: () => <ToggleMode />,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerBackVisible: false,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackTitle: "",

          // headerRight: () => <ToggleMode />,
        }}
        initialParams={{
          userId: user?.id,
        }}
      />

      <Stack.Screen
        name="FullScreenImage"
        component={ShowFullScreenImage}
        options={{
          // headerShown: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          // headerShown: false,
          headerTitle: "Create a Post",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
          // headerShadowVisible: false,

          // headerRight: () => <ToggleMode />,
        }}
        initialParams={{
          step: 1,
        }}
      />

      {/* <Stack.Screen
        name="CreatePostContent"
        component={CreatePostScreen}
        options={{
          // headerShown: false,
          headerTitle: "Create a Post",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
          // headerShadowVisible: false,

          // headerRight: () => <ToggleMode />,
        }}
        initialParams={{
          step: 2,
        }}
      /> */}

      <Stack.Screen
        name="Post"
        component={SinglePostScreen}
        options={{
          // headerShown: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
          },

          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="ChangeLanguage"
        component={ChangeLanguageScreen}
        options={{
          headerTitle: t("change-language") as string,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerTitle: t("change-password") as string,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
