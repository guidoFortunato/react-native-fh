import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        
      }}
    >
      <Stack.Screen 
        name="home/index"
        options={{
          title: 'HomeScreen',
        }}
      />
      <Stack.Screen 
        name="products/index"
        options={{
          title: 'Products Screen',
          // animation: "flip"
        }}
      />
      <Stack.Screen 
        name="profile/index"
        options={{
          title: 'Profile Screen',
        }}
      />
      <Stack.Screen 
        name="settings/index"
        options={{
          title: 'Settings Screen',
        }}
      />
        
    </Stack>
  )
}
export default StackLayout