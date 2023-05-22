import { atom } from "recoil";

const dataFromLocal = localStorage.getItem("userDetail");
const initialData = dataFromLocal ? JSON.parse(dataFromLocal) : [];

const data = JSON.parse(localStorage.getItem("userName")) || [];

export const userDetails = atom({
  key: "userDetails",
  default: [...initialData],
});

export const userNames = atom({
  key: "userNames",
  default: { ...data },
});
