import { atom } from "recoil";

export const isClickedEditButton = atom({
  key: isClickedEditButton,
  default: {
    isAnniversaryEditButtonVisible: true,
    isNicknameEditButtonVisible: true,
    isThumbnailEditButtonVisible: true,
  },
});
