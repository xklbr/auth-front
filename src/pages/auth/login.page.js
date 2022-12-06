import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  Keyboard,
} from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { ButtonMain } from 'components';
import Images from 'assets/images';
import { AuthLoginForm } from 'features/auth';

export function AuthLogin() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={tw.style(
            'flex justify-center items-center bg-gray-900 h-full w-full'
          )}
        >
          <View style={tw.style('flex justify-center items-center w-full')}>
            <Image source={Images.login} style={tw.style('h-80 w-80 mt-12')} />
          </View>
          <View style={tw.style('flex justify-start items-start w-full px-10')}>
            <Text style={tw.style('text-slate-300 text-2xl font-bold')}>
              Login
            </Text>
            <Text style={tw.style('text-slate-300 text-base font-medium mt-1')}>
              Login to your account
            </Text>
          </View>
          <AuthLoginForm />
          <View
            style={tw.style('flex justify-start items-start w-full mt-5 px-9')}
          >
            <Text style={tw.style('text-slate-400 text-base font-medium')}>
              You don't have an account?
              <ButtonMain
                title="Register"
                type="plain"
                textVariant="underline"
                onPress={() => navigation.navigate('Register')}
              />
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
