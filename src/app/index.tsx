import { Text, View } from 'react-native'
import tw from '../styles/tailwind'
import { Ionicons } from '@expo/vector-icons'

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-slate-300 items-center justify-center`}>
      <Text style={tw`text-2xl text-slate-900 font-bold`}>
        Raphael's Expo Template (1)
      </Text>
      <View style={tw`w-80 h-50 rounded-2xl bg-slate-50 mt-5 p-4 shadow-lg`}>
        <Text style={tw`text-xl text-slate-500 font-semibold`}>
          Clean Expo Project with:
        </Text>
        <View style={tw`mt-5 gap-2`}>
          <View style={tw`flex-row items-center gap-2`}>
            <Ionicons name='star' color={'#059669'} />
            <Text style={tw`text-lg text-emerald-600`}>Expo Router</Text>
          </View>
          <View style={tw`flex-row items-center gap-2`}>
            <Ionicons name='star' color={'#059669'} />
            <Text style={tw`text-lg text-emerald-600`}>
              TailwindCSS with TWRNC
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
