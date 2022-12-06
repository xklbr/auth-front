import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { ButtonMain } from 'components';
import Images from 'assets/images';

import { AuthRegisterForm } from 'features/auth';

export function AuthRegister() {
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
          <ButtonMain type="back" onPress={() => navigation.goBack()} />
          <View style={tw.style('flex justify-center items-center w-full')}>
            <Image source={Images.register} style={tw.style('h-80 w-80')} />
          </View>
          <View style={tw.style('flex justify-start items-start w-full px-10')}>
            <Text style={tw.style('text-slate-300 text-2xl font-bold')}>
              Register
            </Text>
            <Text style={tw.style('text-slate-300 text-base font-medium mt-1')}>
              Create your new account!
            </Text>
          </View>
          <AuthRegisterForm />
          <View
            style={tw.style('flex justify-start items-start w-full mt-5 px-9')}
          >
            <Text style={tw.style('text-slate-400 text-base font-medium')}>
              Already have an account?
              <ButtonMain
                title="Login"
                type="plain"
                textVariant="underline"
                onPress={() => navigation.navigate('Login')}
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
