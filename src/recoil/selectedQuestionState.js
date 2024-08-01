import { atom } from "recoil";

export const selectedQuestionState = atom({
  key: "selectedQuestionState",
  default: {
    id: null,
    question: "",
  },
});

export const latestQuestionState = atom({
  key: "latestQuestionState",
  default: {
    id: null,
    question: "",
  },
});
