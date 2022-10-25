import { api } from 'lib/api';

export async function tryLoginOrSignup(loginForm) {
  const loginResponse = await fetch(api.login, {
    method: 'POST',
    body: JSON.stringify(loginForm),
  });

  const signupResponse = await fetch(api.signup, {
    method: 'POST',
    body: JSON.stringify(loginForm),
  });

  const response =
    [loginResponse, signupResponse].find(res => res.ok) ?? loginResponse;
  const data = await response.json();
  return data;
}
