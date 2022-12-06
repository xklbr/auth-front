import { View, Text, ActivityIndicator } from 'react-native';
import tw from 'twrnc';

export function Spinner({ title = 'Loading' }) {
  return (
    <View style={tw.style('flex justify-center items-center w-full h-full')}>
      <ActivityIndicator size="large" color="#0ea5e9" />
      <Text style={tw.style('text-sky-500 text-lg font-semibold mt-3')}>
        {title}
      </Text>
    </View>
  );
}
