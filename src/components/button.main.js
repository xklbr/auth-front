import { Text, Pressable } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

export function ButtonMain({
  title,
  onPress,
  type,
  variant = '',
  textVariant = '',
}) {
  const baseStyle = {
    primary: `flex items-center px-4 py-2 w-10/12 rounded-md border-transparent bg-blue-600 shadow-sm ${variant}`,
    secondary: `flex items-center mt-6 px-4 py-2 w-10/12 rounded-md border-transparent bg-slate-300 shadow-sm ${variant}`,
    plain: `flex items-center bg-transparent ${variant}`,
    back: 'absolute top-12 left-5 rounded-full border-transparent bg-transparent p-1.5 z-10',
    circle: `flex justify-center items-center w-40 h-40 rounded-full border-4 border-slate-300 bg-blue-600 ${variant}`,
    logout:
      'absolute top-12 right-5 rounded-full border-transparent bg-transparent p-1.5 z-10',
  };
  return (
    <Pressable
      style={tw.style(
        `${
          type === 'primary'
            ? baseStyle.primary
            : type === 'plain'
            ? baseStyle.plain
            : type === 'back'
            ? baseStyle.back
            : type === 'logout'
            ? baseStyle.logout
            : type === 'circle'
            ? baseStyle.circle
            : baseStyle.secondary
        }`
      )}
      onPress={onPress}
    >
      {type === 'back' && (
        <Ionicons
          name="ios-chevron-back-circle-outline"
          size={40}
          color="#cbd5e1"
        />
      )}
      {type === 'logout' && (
        <Ionicons name="log-out-outline" size={40} color="#cbd5e1" />
      )}
      <Text
        style={tw.style(
          `${
            type === 'primary' || type === 'plain'
              ? 'text-slate-300'
              : 'text-slate-900'
          } text-lg font-semibold mx-1 ${textVariant}`
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
}
