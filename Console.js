import { AuthenticationClient } from "authing-js-sdk";
import { EmailScene } from "authing-js-sdk";
import * as func from "./func.js";

const {
  registerByEmail,
  loginByEmail,
  registerByUsername,
  registerByPhoneCode,
  checkPasswordStrength,
  loginByUsername,
  setUdfValue,
  getUdfValue,
  removeUdfValue,
  checkLoginStatus,
} = func;

const email = "iamshujianchen@gmail.com",
  password = "123456789",
  redirectUri =
    "https://console.authing.cn/console/60633275e57f49e4885d59d0/user",
  secret = "6bd73bc31d216d03738ce01bd2a6d586",
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDYzYTZhMWJkMzNkMDllZGU3NzU1YWMiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOiJLZXZpbkNIRU4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9maWxlcy5hdXRoaW5nLmNvL2F1dGhpbmctY29uc29sZS9kZWZhdWx0LXVzZXItYXZhdGFyLnBuZyIsInByZWZlcnJlZF91c2VybmFtZSI6bnVsbCwicHJvZmlsZSI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMjEtMDQtMDVUMTg6MTg6NTguNTg5WiIsIndlYnNpdGUiOm51bGwsInpvbmVpbmZvIjpudWxsLCJhZGRyZXNzIjp7ImNvdW50cnkiOm51bGwsInBvc3RhbF9jb2RlIjpudWxsLCJyZWdpb24iOm51bGwsImZvcm1hdHRlZCI6bnVsbH0sInBob25lX251bWJlciI6bnVsbCwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiZW1haWwiOiJpYW1zaHVqaWFuY2hlbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZXh0ZXJuYWxfaWQiOm51bGwsInVuaW9uaWQiOm51bGwsImRhdGEiOnsidHlwZSI6InVzZXIiLCJ1c2VyUG9vbElkIjoiNjA2MzMyNzVlNTdmNDllNDg4NWQ1OWQwIiwiYXBwSWQiOiI2MDYzMzI4NDA2OTFiYmYxYTJiYWRmOWEiLCJpZCI6IjYwNjNhNmExYmQzM2QwOWVkZTc3NTVhYyIsInVzZXJJZCI6IjYwNjNhNmExYmQzM2QwOWVkZTc3NTVhYyIsIl9pZCI6IjYwNjNhNmExYmQzM2QwOWVkZTc3NTVhYyIsInBob25lIjpudWxsLCJlbWFpbCI6ImlhbXNodWppYW5jaGVuQGdtYWlsLmNvbSIsInVzZXJuYW1lIjpudWxsLCJ1bmlvbmlkIjpudWxsLCJvcGVuaWQiOm51bGwsImNsaWVudElkIjoiNjA2MzMyNzVlNTdmNDllNDg4NWQ1OWQwIn0sInVzZXJwb29sX2lkIjoiNjA2MzMyNzVlNTdmNDllNDg4NWQ1OWQwIiwiYXVkIjoiNjA2MzMyODQwNjkxYmJmMWEyYmFkZjlhIiwiZXhwIjoxNjE4ODU2NzM4LCJpYXQiOjE2MTc2NDcxMzgsImlzcyI6Imh0dHBzOi8vbWFnb21vZ29vb2RuLmF1dGhpbmcuY24vb2lkYyJ9.GeLP4ZG4xsfFr2VkqVmLdJIZKCCyJXSWnkQ1t_FXBlQ";
const newemail = "csj244911099@gmail.com";
/*
const authing = new AuthenticationClient({
  appId: "606332840691bbf1a2badf9a",
  token: token,
  appHost: "https://magomogooodn.authing.cn",
});
*/
//oidc
const authing = new AuthenticationClient({
  appId: "606332840691bbf1a2badf9a",
  secret: secret,
  redirectUri: redirectUri,
  appHost: "https://magomogooodn.authing.cn",
});

//Using email to register
//registerByEmail(authing);

//Using email to log in
//loginByEmail(authing, email, password);

//Using username to register
//registerByUsername(authing);

//Using phone and code to register
//registerByPhoneCode(authing);

//Check password strength
//console.log(checkPasswordStrength(authing, "123156"));

//loginByUsername(authing, "Nick", "password", { autoRegister: true });

//token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDY1ZTNlMzEzYWY5NWQyMmE3YmY2ODAiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOiJLZXZpbiIsInBpY3R1cmUiOiJkZWZhdWx0LXVzZXItYXZhdGFyLnBuZyIsInByZWZlcnJlZF91c2VybmFtZSI6bnVsbCwicHJvZmlsZSI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMjEtMDQtMDFUMTU6MTY6NTEuNDgyWiIsIndlYnNpdGUiOm51bGwsInpvbmVpbmZvIjpudWxsLCJhZGRyZXNzIjp7ImNvdW50cnkiOm51bGwsInBvc3RhbF9jb2RlIjpudWxsLCJyZWdpb24iOm51bGwsImZvcm1hdHRlZCI6bnVsbH0sInBob25lX251bWJlciI6bnVsbCwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiZW1haWwiOiJ0ZXN0MUBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZGF0YSI6eyJ0eXBlIjoidXNlciIsInVzZXJQb29sSWQiOiI2MDYzMzI3NWU1N2Y0OWU0ODg1ZDU5ZDAiLCJhcHBJZCI6IjYwNjMzMjg0MDY5MWJiZjFhMmJhZGY5YSIsImlkIjoiNjA2NWUzZTMxM2FmOTVkMjJhN2JmNjgwIiwidXNlcklkIjoiNjA2NWUzZTMxM2FmOTVkMjJhN2JmNjgwIiwiX2lkIjoiNjA2NWUzZTMxM2FmOTVkMjJhN2JmNjgwIiwicGhvbmUiOm51bGwsImVtYWlsIjoidGVzdDFAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6bnVsbCwidW5pb25pZCI6bnVsbCwib3BlbmlkIjpudWxsLCJjbGllbnRJZCI6IjYwNjMzMjc1ZTU3ZjQ5ZTQ4ODVkNTlkMCJ9LCJ1c2VycG9vbF9pZCI6IjYwNjMzMjc1ZTU3ZjQ5ZTQ4ODVkNTlkMCIsImF1ZCI6IjYwNjMzMjg0MDY5MWJiZjFhMmJhZGY5YSIsImV4cCI6MTYxODQ5OTgxMiwiaWF0IjoxNjE3MjkwMjEyLCJpc3MiOiJodHRwczovL21hZ29tb2dvb29kbi5hdXRoaW5nLmNuL29pZGMifQ.L7Xrpyh7LSxPai9ruRwvIvUVy-KFT8lmNAV0ubPB7UQ'

//setUdfValue(authing, { studentId: "158d", age: 5 });
//getUdfValue(authing);
//removeUdfValue(authing, "age");
//getUdfValue(authing);
/*;

async function sendEmail(AuthenticationClient, email) {
  try {
    const res = await AuthenticationClient.sendEmail(
      email,
      EmailScene.ChangeEmail
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
sendEmail(authing, email);
sendEmail(authing, newemail);
*/

/*
async function updateEmail(
  AuthenticationClient,
  email,
  emailCode,
  oldEmail,
  oldEmailCode
) {
  try {
    const res = await AuthenticationClient.updateEmail(
      email,
      emailCode,
      oldEmail,
      oldEmailCode
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

updateEmail(authing, email, "1184", newemail, "1178");
*/

/*
async function resetPasswordByEmailCode(
  AuthenticationClient,
  email,
  code,
  newPassword
) {
  try {
    const res = await AuthenticationClient.resetPasswordByEmailCode(
      email,
      code,
      newPassword
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

resetPasswordByEmailCode(authing, email, "5742", "newpassword");
*/

/*
async function updateProfile(AuthenticationClient, option) {
  try {
    const res = await AuthenticationClient.updateProfile(option);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}


updateProfile(authing, { nickname: "KevinCHEN" });
*/

/*
async function updatePassword(AuthenticationClient, newPassword, oldPassword) {
  try {
    const res = await AuthenticationClient.updatePassword(
      newPassword,
      oldPassword
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

updatePassword(authing, "123456789", "newpassword");
*/

/*
async function updateToken(AuthenticationClient) {
  try {
    const res = await AuthenticationClient.refreshToken();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

updateToken(authing);
*/

/*
async function getCurrentUser(AuthenticationClient) {
  try {
    const res = await AuthenticationClient.getCurrentUser();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getCurrentUser(authing);
*/

/*
async function logout(AuthenticationClient) {
  try {
    const res = await AuthenticationClient.logout();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

checkLoginStatus(authing, token);

logout(authing);

checkLoginStatus(authing, token);
*/
/*
async function listOrgs(AuthenticationClient) {
  try {
    const res = await AuthenticationClient.listOrgs();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
listOrgs(authing);
*/

/*
const securityLevel = authing.computedPasswordSecurityLevel("cascjbian,.45ASC");
console.log(securityLevel);
*/
/*
async function getSecurityLevel(AuthenticationClient) {
  try {
    const res = await AuthenticationClient.getSecurityLevel();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
getSecurityLevel(authing);
*/

/*
async function listAuthorizedResources(AuthenticationClient, namespace) {
  try {
    const res = await AuthenticationClient.listAuthorizedResources(namespace);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
listAuthorizedResources(authing, "606332840691bbf1a2badf9a");
*/

loginByEmail(authing, email, password);

async function getAccessTokenByCode(AuthenticationClient, code) {
  try {
    const res = await AuthenticationClient.getAccessTokenByCode(code);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
getAccessTokenByCode(authing, "60633275e57f49e4885d59d0");
