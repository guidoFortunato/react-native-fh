import CustomButton from "@/components/shared/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeft = (canGoBack: boolean | undefined) => {

    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "grid-outline"}
            size={20}
            color="black"
            className="mr-5"
            onPress={() => onHeaderLeft(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "HomeScreen",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products Screen",
          // animation: "flip"
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile Screen",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings Screen",
        }}
      />
    </Stack>
  );
};
export default StackLayout;
