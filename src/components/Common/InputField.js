import React from "react";

// ===== styles import =====
import { Label } from "../../styles/TextStyle";
import { Input } from "../../styles/InputStyle";

// ===== component =====
const InputField = ({
  hasLabel,
  labelMessage,
  inputRef,
  type = "text",
  placeholderMessage,
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
      {hasLabel && <Label>{labelMessage}</Label>}

      {/* type : text, password or email, etc. */}
      {/* placeholderMessage : String */}
      {/* disabled : true or false */}
      <Input
        ref={inputRef}
        type={type}
        placeholder={placeholderMessage}
        onChange={updateValueEvent}
        disabled={disabled}
      />
    </>
  );
};

export default InputField;
