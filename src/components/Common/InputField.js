import React from "react";

// ===== styles import =====
import { Label } from "../../styles/TextStyle";
import { Input } from "../../styles/InputStyle";

// ===== component =====
const InputField = ({
  fontSize,
  width,
  margin,
  hasLabel,
  labelMessage,
  inputRef,
  type = "text",
  placeholderMessage,
  onBlur,
  disabled,
}) => {
  const updateValueEvent = (e) => {
    const value = e.target.value;
    inputRef.current.value = value;
  };

  return (
    <>
      {/* haeLabel : true or false */}
      {/* labelMessage : String */}
      {hasLabel && <Label $fontSize={fontSize}>{labelMessage}</Label>}

      {/* type : text, password or email, etc. */}
      {/* placeholderMessage : String */}
      {/* disabled : true or false */}
      {/* onChane, onBlur : Funtion */}
      <Input
        $width={width}
        $margin={margin}
        ref={inputRef}
        type={type}
        placeholder={placeholderMessage}
        onChange={updateValueEvent}
        onBlur={onBlur}
        disabled={disabled}
      />
    </>
  );
};

export default InputField;
