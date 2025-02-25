// import CustomButton from '@/components/shared/CustomButton'
import { products } from "@/store/products.store";
import { Link } from "expo-router";
// import { router } from 'expo-router'
import { View, Text, FlatList } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-5">
      {/* <Text>ProductsScreen</Text> */}

      <FlatList
        keyExtractor={(item) => item.id}
        data={products}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>

            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link className="text-primary" href={`/tabs/products/${item.id}`}>Ver detalles</Link>
            </View>
          </View>
        )}
      />

      {/* <CustomButton color="secondary" onPress={()=> router.push("/home")}>Home</CustomButton> */}
    </View>
  );
};
export default ProductsScreen;
