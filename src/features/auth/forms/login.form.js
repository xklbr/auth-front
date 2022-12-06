import { useDispatch } from 'react-redux';
import { View, TextInput } from 'react-native';
import { Formik, useFormik } from 'formik';
import tw from 'twrnc';

import { authLoginThunk } from '../store';

import { ButtonMain, InputMessage } from 'components';
import { emailValidation, passwordValidation } from 'common/validation';

export function AuthLoginForm() {
  const dispatch = useDispatch();

  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      email: 'rylee.moore40@yahoo.com',
      password: '8hrvuD*AaYmIFIan',
    },
    validate: (values) => {
      const errors = {};

      const { email } = emailValidation(values.email);
      if (email !== undefined) errors.emailError = email;

      const { password } = passwordValidation(values.password);
      if (password !== undefined) errors.passwordError = password;

      return errors;
    },
    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(authLoginThunk({ email, password }));
    },
  });

  return (
    <View style={tw.style('flex justify-center items-center w-full')}>
      <Formik>
        <View style={tw.style('flex justify-center items-center w-full')}>
          <TextInput
            placeholder="youremail@mail.com"
            autoCapitalize="none"
            value={values.email}
            onChangeText={(text) => setFieldValue('email', text)}
            placeholderTextColor="#9ca3af"
            style={tw.style(
              'w-10/12 mt-5 px-4 pt-2 pb-3 bg-gray-700 border-gray-600 text-white text-base rounded-md border'
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
          <View
            style={tw.style('w-10/12 h-5 mt-1 mb-4 flex flex-row items-center')}
          >
            {errors?.passwordError && (
              <InputMessage type="error" message={errors.passwordError} />
            )}
          </View>
        </View>
      </Formik>
      <ButtonMain title="Confirm" type="primary" onPress={handleSubmit} />
    </View>
  );
}
