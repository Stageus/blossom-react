import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import App from "./App";

// 폰트 로드 최적화 (비동기적 폰트 로드)
// const font = new FontFace("BMDOHYEON", "url(/fonts/BMDOHYEON_otf.otf)");
// font
//   .load()
//   .then(() => {
//     document.fonts.add(font);
//     document.body.style.fontFamily = "BMDOHYEON";
//   })
//   .catch((error) => {
//     console.error("폰트 로드 중 에러 발생:", error);
//   });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
