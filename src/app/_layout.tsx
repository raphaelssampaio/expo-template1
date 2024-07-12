import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native'
import tw from '../styles/tailwind'

export default function RootLayout() {
  return (
    <SafeAreaView style={tw`flex-1 bg-slate-300`}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  )
}
