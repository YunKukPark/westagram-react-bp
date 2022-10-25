export const validator = {
  id: value => value.indexOf('@') !== -1,
  password: value => value.length > 5,
};
