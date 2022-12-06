import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { QRCodeGenerator, QRCodeScanner } from 'features/qrcode';

import { ButtonMain } from 'components';

export function QRCode() {
  const { auth } = useSelector((state) => state);
  const isAdmin = auth.roles?.includes('Admin');
  const navigation = useNavigation();

  return (
    <View
      style={tw.style(
        'flex justify-center items-center bg-zinc-900 h-full w-full'
      )}
    >
      <ButtonMain type="back" onPress={() => navigation.goBack()} />
      <View style={tw.style('flex justify-start items-start w-full px-10')}>
        <Text style={tw.style('text-slate-300 text-2xl font-bold')}>
          {isAdmin ? null : 'QRCode'}
        </Text>
      </View>
      <View style={tw.style('flex justify-center items-center')}>
        {isAdmin ? <QRCodeScanner /> : <QRCodeGenerator value={auth} />}
      </View>
    </View>
  );
}
