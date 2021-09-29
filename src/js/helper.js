import { async } from "regenerator-runtime";
import { TIME_OUT } from "./config.js";
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJason = async function (url) {
  try {
    const response = await Promise.race([
      fetch(url, { mode: "cors" }),
      timeout(TIME_OUT),
    ]);
    const data = await response.json();
    if (!response.ok) throw new Error("invalid Id");
    return data;
  } catch (err) {
    throw err;
  }
};
