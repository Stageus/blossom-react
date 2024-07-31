import { atom } from "recoil";

export const isClickedEditButtonState = atom({
  key: "isClickedEditButtonState",
  default: {
    isAnniversaryEditButtonVisible: true,
    isNicknameEditButtonVisible: true,
    isThumbnailEditButtonVisible: true,
  },
});
