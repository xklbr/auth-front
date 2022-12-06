import { Text, Pressable, Image, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

export function ButtonNav({
  title,
  onPress,
  iconCircle,
  icon,
  size,
  color,
  backGround = 'bg-gray-700',
}) {
  return (
    <Pressable
      style={tw.style(
        `justify-center items-center rounded-md border border-transparent ${backGround} shadow-md mt-6 px-4 py-2 w-40 h-48`
      )}
      onPress={onPress}
    >
      <View
        style={tw.style(
          `justify-center items-center rounded-full border-2 border-${iconCircle}-500 bg-${iconCircle}-700 w-18 h-18`
        )}
      >
        <MaterialIcons name={`${icon}`} size={`${size}`} color={`${color}`} />
      </View>
      <Text style={tw.style('text-slate-100 text-lg font-semibold mt-5')}>
        {title}
      </Text>
    </Pressable>
  );
}
