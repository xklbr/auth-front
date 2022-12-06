import { View, Text, Pressable, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc';

export function InputMessage({ type, message, btn, btnTitle, onPress }) {
  return (
    <View style={tw.style('w-10/12 flex flex-row items-center')}>
      <Feather
        name={`${type === 'info' ? 'alert-circle' : 'x-circle'}`}
        size={15}
        color={`${type === 'info' ? '#fdba74' : '#fda4af'}`}
      />
      <Text
        style={tw.style(
          `text-${
            type === 'info' ? 'amber' : 'rose'
          }-300 text-sm font-medium ml-1`
        )}
      >
        {message}
      </Text>
      {btn && (
        <Pressable onPress={onPress}>
          <Text
            style={tw.style(
              `text-${
                type === 'info' ? 'amber' : 'rose'
              }-300 text-sm font-medium ml-1 underline`
            )}
          >
            {btnTitle}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
