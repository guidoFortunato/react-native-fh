import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";

const HomeScreen = () => {
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
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
