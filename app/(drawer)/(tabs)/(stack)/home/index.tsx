import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }




  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton className="mb-2" onPress={() => router.push("/products")}>
          Productos
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Profile
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Settings
        </CustomButton>

        
        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-2" color="primary">
            Productos 2
          </CustomButton>
        </Link>

        <CustomButton className="mb-2" onPress={onToggleDrawer}>
          Abrir menú
        </CustomButton>



      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
