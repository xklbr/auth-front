import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

import { getStoresThunk } from 'features/stores';

import { shortTitle } from 'common/validation';
import { ButtonMain, Card, Spinner } from 'components';

export function Stores() {
  const dispatch = useDispatch();
  const { status, stores } = useSelector((state) => state.store);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getStoresThunk());
  }, []);

  return (
    <View style={tw.style('bg-gray-900 h-full w-full flex items-center')}>
      <ButtonMain type="back" onPress={() => navigation.goBack()} />
      {status === 'checking-stores' && <Spinner title="Loading stores..." />}
      <View
        style={tw.style('flex justify-end items-start w-full px-7 pb-3 h-36')}
      >
        <Text style={tw.style('text-slate-300 text-2xl font-bold')}>
          Stores
        </Text>
      </View>
      <View style={tw.style('flex-1 w-10/12')}>
        <View style={tw.style('w-full')}>
          <ScrollView>
            {stores[0]?.stores?.map((store, index) => {
              return (
                <Card
                  key={index}
                  title={shortTitle(store?.title)}
                  subtitle={store?.address}
                  variant="my-1"
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
