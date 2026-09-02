export const validUser = {
  username: 'standard_user',
  password: 'secret_sauce'
};

export const negativeLoginCases = [
  {
    scenario: 'Invalid password',
    username: 'standard_user',
    password: 'wrong_password',
    error:
      'Epic sadface: Username and password do not match any user in this service'
  },
  {
    scenario: 'Invalid username',
    username: 'wrong_user',
    password: 'secret_sauce',
    error:
      'Epic sadface: Username and password do not match any user in this service'
  },
  {
    scenario: 'Empty password',
    username: 'standard_user',
    password: '',
    error:
      'Epic sadface: Password is required'
  },
  {
    scenario: 'Empty username',
    username: '',
    password: 'secret_sauce',
    error:
      'Epic sadface: Username is required'
  }
];