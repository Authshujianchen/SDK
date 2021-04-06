//const fetch = require("node-fetch");

async function registerByEmail(AuthenticationClient) {
  try {
    const res = await AuthenticationClient.registerByEmail(
      "test1@example.com",
      "password",
      {
        nickname: "Kevin",
        //StudentID: "45645613d",
      },
      {
        generateToken: true,
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

async function loginByEmail(AuthenticationClient, email, password) {
  try {
    const res = await AuthenticationClient.loginByEmail(email, password);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

async function registerByUsername(AuthenticationClient) {
  return await AuthenticationClient.registerByUsername(
    "bob",
    "passw0rd",
    {
      nickname: "Nick2",
    },
    {
      generateToken: true,
    }
  );
}

async function registerByPhoneCode(AuthenticationClient) {
  return await AuthenticationClient.registerByPhoneCode("15859686069", "1234");
}

async function checkPasswordStrength(AuthenticationClient, password) {
  try {
    const res = await AuthenticationClient.checkPasswordStrength(password);
    console.log(res);
  } catch (error) {
    failureCallback(error);
  }
}

async function loginByUsername(
  AuthenticationClient,
  username,
  password,
  option
) {
  try {
    const res = await AuthenticationClient.loginByUsername(
      username,
      password,
      option
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

async function setUdfValue(AuthenticationClient, option) {
  try {
    const res = await AuthenticationClient.setUdfValue(option);
    //console.log(res);
  } catch (error) {
    console.log(error);
  }
}

async function getUdfValue(AuthenticationClient) {
  try {
    const res = await AuthenticationClient.getUdfValue();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

async function removeUdfValue(AuthenticationClient, option) {
  try {
    const res = await AuthenticationClient.removeUdfValue(option);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

async function checkLoginStatus(AuthenticationClient, token) {
  try {
    const res = await AuthenticationClient.checkLoginStatus(token);
    //const haha = await AuthenticationClient.updateAvatar("./image/1.png");
    console.log(res);
    //console.log(haha);
  } catch (error) {
    console.log(error);
  }
}

export {
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
};
