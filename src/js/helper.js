import { TIME_OUT } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  /*
   * fetching api from https://forkify-api.herokuapp.com/v2 site
   * consuming only 1 recipe now
   */
  try {
    const response = await Promise.race([fetch(url), timeout(TIME_OUT)]);
    const data = await response.json();
    if (data.status !== 'success') throw new Error('Check your Data');
    return data;
  } catch (err) {
    throw err;
  }
};
