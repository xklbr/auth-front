import { MESSAGE_HANDLER } from './message.handler';

export function emailValidation(value) {
  const errors = {};
  const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (value === '') {
    errors.email = MESSAGE_HANDLER.EMAIL_REQUIRED;
    return errors;
  }

  if (!regex.test(value)) errors.email = MESSAGE_HANDLER.EMAIL_INVALID;
  return errors;
}

export function passwordValidation(value) {
  const errors = {};
  const regex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
  );

  if (value.length <= 7) {
    errors.password = MESSAGE_HANDLER.PASSWORD_SHORT;
    return errors;
  }

  if (!regex.test(value)) errors.password = MESSAGE_HANDLER.PASSWORD_INVALID;
  return errors;
}

export function fullNameValidation(value) {
  const errors = {};

  if (value === '') {
    errors.fullName = MESSAGE_HANDLER.FULLNAME_REQUIRED;
    return errors;
  }
  if (value.length <= 2) errors.fullName = MESSAGE_HANDLER.FULLNAME_INVALID;
  return errors;
}

export function shortTitle(value) {
  return value.length > 20 ? `${value.substring(0, 23)}...` : value;
}
