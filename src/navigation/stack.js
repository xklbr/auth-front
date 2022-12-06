import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useCheckAuth } from 'features/auth';
import { Spinner } from 'components';

import { AuthLogin, AuthRegister, Home, QRCode, Stores } from 'pages';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const status = useCheckAuth();

  if (status === 'cheking') return <Spinner title="Checking auth" />;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} name="route-name">
      {status === 'authenticated' ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Group>
            <Stack.Screen name="QRCode" component={QRCode} />
            <Stack.Screen name="Stores" component={Stores} />
          </Stack.Group>
        </>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={AuthLogin} />
          <Stack.Screen name="Register" component={AuthRegister} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
