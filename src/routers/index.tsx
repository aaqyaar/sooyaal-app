import { fonts } from "@/constants/fonts";
import { LoginScreen, WelcomeScreen } from "@/screens";
import { useTheme } from "@/theme/ThemeProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerBackTitleVisible: false,
            title: "Sign in",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: colors.text,
              fontFamily: fonts.primary.medium,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}