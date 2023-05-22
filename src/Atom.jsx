import { atom } from "recoil";

const dataFromLocal = localStorage.getItem("userDetail");
const initialData = dataFromLocal ? JSON.parse(dataFromLocal) : [];

export const userDetails = atom({
  key: "userDetails",
  default: initialData,
});

export const userName = atom({
  key: "userName",
  default: {},
});
