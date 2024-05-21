import React from "react";
import InputField from "./InputField";

const ImageUploader = () => {
  return <InputField type="file" accept=".jpg, .jpeg, .png" />;
};

export default ImageUploader;
