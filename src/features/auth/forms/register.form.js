import { useDispatch } from 'react-redux';
import { View, TextInput, Alert } from 'react-native';
import tw from 'twrnc';
import { Formik, useFormik } from 'formik';

import { ButtonMain, InputMessage } from 'components';
import { authRegisterThunk } from '../store';
import {
  emailValidation,
  fullNameValidation,
  passwordValidation,
} from 'common/validation';
import { MESSAGE_HANDLER } from 'common/message.handler';

export function AuthRegisterForm() {
  const dispatch = useDispatch();
  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '213',
    },
    validate: (values) => {
      const errors = {};

      const { fullName } = fullNameValidation(values.fullName);
      if (fullName !== undefined) errors.fullNameError = fullName;

      const { email } = emailValidation(values.email);
      if (email !== undefined) errors.emailError = email;

      const { password } = passwordValidation(values.password);
      if (password !== undefined) errors.passwordError = password;
      return errors;
    },
    onSubmit: async (values) => {
      const { fullName, email, password } = values;
      dispatch(authRegisterThunk({ fullName, email, password }));
    },
  });

  const showInfo = () => Alert.alert(MESSAGE_HANDLER.PASSWORD_HINT);

  return (
    <View style={tw.style('flex justify-center items-center w-full')}>
      <Formik>
        <View style={tw.style('flex justify-center items-center w-full')}>
          <TextInput
            placeholder="Full name"
            autoCapitalize="none"
            value={values.fullName}
            onChangeText={(text) => setFieldValue('fullName', text)}
            placeholderTextColor="#9ca3af"
            style={tw.style(
              'w-10/12 mt-5 px-4 pt-2 pb-3 bg-gray-700 border-gray-600 text-white text-base rounded-md border'
            )}
          ></TextInput>
          <View
            style={tw.style('w-10/12 h-5 mt-1 mb-2 flex flex-row items-center')}
          >
            {errors?.fullNameError && (
              <InputMessage type="error" message={errors.fullNameError} />
            )}
          </View>
          <TextInput
            placeholder="youremail@mail.com"
            autoCapitalize="none"
            value={values.email}
            onChangeText={(text) => setFieldValue('email', text)}
            placeholderTextColor="#9ca3af"
            style={tw.style(
              'w-10/12 mt-0 px-4 pt-2 pb-3 bg-gray-700 border-gray-600 text-white text-base rounded-md border'
            )}
          ></TextInput>
          <View
            style={tw.style('w-10/12 h-5 mt-1 mb-2 flex flex-row items-center')}
          >
            {errors?.emailError && (
              <InputMessage type="error" message={errors.emailError} />
            )}
          </View>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            autoCapitalize="none"
            value={values.password}
            onChangeText={(text) => setFieldValue('password', text)}
            placeholderTextColor="#9ca3af"
            style={tw.style(
              'w-10/12 mt-0 px-4 pt-2 pb-3 bg-gray-700 border-gray-600 text-white text-base rounded-md border'
            )}
          ></TextInput>
          <View style={tw.style('w-10/12 h-1 mt-1 h-5')}>
            {!errors?.passwordError && (
              <InputMessage
                type="info"
                message="Info about password rules by"
                btn
                btnTitle="clicking here"
                onPress={showInfo}
              />
            )}
            {errors?.passwordError && (
              <InputMessage type="error" message={errors.passwordError} />
            )}
          </View>
        </View>
      </Formik>
      <ButtonMain
        variant="mt-5"
        title="Confirm"
        type="primary"
        onPress={handleSubmit}
      />
    </View>
  );
}
