import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";
const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center rounded-full h-24 w-24 bg-white">
          <Text className="text-3xl font-work-black text-primary">GF</Text>
        </View>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />


    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
