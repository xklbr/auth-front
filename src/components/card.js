import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

export function Card({ title, subtitle, variant }) {
  return (
    <View
      style={tw.style(
        `flex flex-row justify-start items-center bg-gray-800 rounded-lg px-3 py-4 w-full ${
          variant || null
        }`
      )}
    >
      <View
        style={tw.style(
          'flex justify-center items-center bg-sky-700 border-sky-500 h-14 w-14 rounded-full border-2'
        )}
      >
        <MaterialIcons name="storefront" size={30} color="#e2e8f0" />
      </View>
      <View style={tw.style('px-2')}>
        <Text style={tw.style('text-slate-100 text-base font-semibold w-full')}>
          {title}
        </Text>
        <Text style={tw.style('text-slate-400 text-base font-medium')}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
