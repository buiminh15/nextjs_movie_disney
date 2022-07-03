const KEYS = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  USER: "USER",
};

const saveValueStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getValueStorage = (key) => localStorage.getItem(key);
const removeValueStorage = (key) => localStorage.removeItem(key);
const clearStorage = () => localStorage.clear();

const userAccessToken = () => {
  const accessToken =
    getValueStorage(KEYS.ACCESS_TOKEN) !== "undefined"
      ? getValueStorage(KEYS.ACCESS_TOKEN)
      : clearStorage();

  return accessToken;
};

export {
  saveValueStorage,
  getValueStorage,
  removeValueStorage,
  clearStorage,
  userAccessToken,
  KEYS,
};
