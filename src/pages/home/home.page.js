import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { logout } from 'features/auth';

import { ButtonNav } from 'components/button.navigation';
import Images from 'assets/images';
import { ButtonMain } from 'components/button.main';

export function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLogout = async () => {
    await AsyncStorage.removeItem('USER_AUTH');
    return dispatch(logout());
  };

  return (
    <View
      style={tw.style(
        'flex justify-center items-center bg-gray-900 h-full w-full'
      )}
    >
      <ButtonMain type="logout" onPress={onLogout} />
      <View style={tw.style('h-96 w-full flex items-center justify-center')}>
        <Image source={Images.logo} style={tw.style('h-52 w-52 mt-12')} />
      </View>
      <View style={tw.style('flex justify-start items-start w-full px-3')}>
        <Text style={tw.style('text-slate-300 text-3xl font-bold mx-3')}>
          Home
        </Text>
        <View
          style={tw.style(
            'flex flex-row justify-between items-start w-full px-3'
          )}
        >
          <ButtonNav
            title="Stores"
            iconCircle="sky"
            icon="storefront"
            size="40px"
            color="#e2e8f0"
            onPress={() => navigation.navigate('Stores')}
          />
          <ButtonNav
            title="QR Code"
            iconCircle="teal"
            icon="qr-code-scanner"
            size="40px"
            color="#e2e8f0"
            onPress={() => navigation.navigate('QRCode')}
          />
        </View>
      </View>
    </View>
  );
}
