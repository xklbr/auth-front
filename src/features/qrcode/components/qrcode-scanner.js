import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import tw from 'twrnc';

import { getEmployeeByIdThunk } from 'features/employee';
import { ButtonMain } from 'components';

export function QRCodeScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  console.log('scanned', scanned);
  console.log('setScanned', setScanned);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const scannedData = JSON.parse(data);
    const { id } = scannedData?.value;
    dispatch(getEmployeeByIdThunk({ id }));
  };

  if (hasPermission === null) {
    return (
      <Text style={tw.style('text-white text-base')}>
        Requesting for camera permission
      </Text>
    );
  }

  if (hasPermission === false) {
    return (
      <Text style={tw.style('text-white text-base')}>No access to camera</Text>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={tw.style('w-full flex items-center')}>
          <ButtonMain
            title="Tap to scan again"
            type="circle"
            textVariant="text-slate-300 text-center"
            onPress={() => setScanned(false)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 400,
  },
});
