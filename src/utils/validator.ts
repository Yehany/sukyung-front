export const isNotNull = (value: string | number): boolean => {
  if (typeof value === 'string') {
    return value !== null && value.trim() !== '';
  }
  if (typeof value === 'number') {
    return value !== null && value > 0;
  }
  return false;
};

export const isEmail = (value: string): boolean => {
  const emailExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return emailExp.test(value);
};

export const isPassword = (value: string): boolean => {
  const pwdExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return pwdExp.test(value);
};
