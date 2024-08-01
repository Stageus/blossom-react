import { atom } from "recoil";

export const currentNicknameState = atom({
  key: "currentNicknameState",
  default: {
    myNickname: "",
    LoverNickname: "",
  },
});
