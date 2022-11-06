const setToken = async (token: string) => {
  return await localStorage.setItem('token', token);
};

const getToken = async () => {
  return (await localStorage.getItem('token')) || '';
};

const setForgetToken = async (token: string) => {
    return await localStorage.setItem('forgetToken', token);
};

const getForgetToken = async () => {
    return (await localStorage.getItem('forgetToken')) || '';
};


export default {
    setToken,
    getToken,
    setForgetToken,
    getForgetToken
};