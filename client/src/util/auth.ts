import LoginInput from '../types/LoginInput';

export const loginUser = async (loginInput: LoginInput) => {
  console.log('logging user in:', loginInput.email);
  await sleep(1000);
  console.log('logged in');
  return true;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
