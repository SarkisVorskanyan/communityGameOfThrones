const setToken = async (token: string) => {
  return await localStorage.setItem('token', token);
};

const getToken = async () => {
  return (await localStorage.getItem('token')) || '';
};


export default {
    setToken,
    getToken,
};