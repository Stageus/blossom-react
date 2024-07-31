import { atom } from "recoil";

export const selectedQuestionState = atom({
  key: "selectedQuestionState",
  default: {
    id: null,
    question: "",
  },
});
