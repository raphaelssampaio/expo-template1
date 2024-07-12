import { Text, View } from 'react-native'
import tw from '../styles/tailwind'

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-slate-300 items-center justify-center`}>
      <Text style={tw`text-2xl text-slate-900`}>
        Raphael's Expo Template (1)
      </Text>
    </View>
  )
}
